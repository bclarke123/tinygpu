import { Color } from "./color"; // Assuming Color class exists and has a uniformValue() method

// --- Type Definitions for Uniforms ---

export type UniformValue =
  | number
  | Float32Array // For vecN, matN
  | Color
  | { [key: string]: UniformValue }; // For structs

// Describes a member *within* a struct's layout definition
export interface UniformLayoutMember {
  name: string;
  // 'type' is optional for base types (f32, vecN, matN, Color) within a struct,
  // as it can be inferred from the provided 'value' for that member.
  // 'type' is REQUIRED if this member is itself a struct (to name that struct type).
  type?: string;
  // 'members' is used if this member is an INLINE struct definition.
  // If 'members' is present, 'type' (as the name of this inline struct) MUST also be present.
  members?: UniformLayoutMember[];
}

// Describes a top-level uniform item to be packed
export interface UniformItem {
  name: string;
  value: UniformValue;
  // 'type' is optional for base types (will be inferred).
  // Required for struct types to name them (for layout caching and reuse).
  type?: string;
  // 'members' is used if this item is a struct definition.
  // If 'members' is present, 'type' (as the name of this struct) MUST also be present.
  members?: UniformLayoutMember[];
}

// --- std140 Layout Information ---

interface Std140LayoutInfo {
  align: number;
  size: number; // Actual data size for base types; total padded size for structs.
  advanceAmount: number;
  paddedStride?: number; // For matrix columns.
  isStruct?: boolean;
  membersLayout?: { [name: string]: MemberLayoutInfo };
  typeName?: string; // Explicit name of the base type or struct type (e.g., "f32", "vec3", "MyStruct")
}

interface MemberLayoutInfo extends Std140LayoutInfo {
  relativeOffset: number; // Offset relative to the start of its parent struct.
}

const BASE_TYPE_LAYOUT_INFO: Record<string, Std140LayoutInfo> = {
  f32: { typeName: "f32", align: 4, size: 4, advanceAmount: 4 },
  i32: { typeName: "i32", align: 4, size: 4, advanceAmount: 4 },
  u32: { typeName: "u32", align: 4, size: 4, advanceAmount: 4 },
  vec2: { typeName: "vec2", align: 8, size: 8, advanceAmount: 8 },
  vec3: { typeName: "vec3", align: 16, size: 12, advanceAmount: 16 },
  vec4: { typeName: "vec4", align: 16, size: 16, advanceAmount: 16 },
  color: { typeName: "color", align: 16, size: 16, advanceAmount: 16 }, // Treated like vec4
  mat3: {
    typeName: "mat3",
    align: 16,
    size: 36,
    advanceAmount: 48,
    paddedStride: 16,
  },
  mat4: {
    typeName: "mat4",
    align: 16,
    size: 64,
    advanceAmount: 64,
    paddedStride: 16,
  },
};

const computedStructLayoutCache: Record<string, Std140LayoutInfo> = {};

/**
 * Infers the WGSL base data type from a JavaScript value.
 */
function getDataTypeFromValue(value: UniformValue, itemName: string): string {
  if (typeof value === "number") {
    return Number.isInteger(value) ? "u32" : "f32";
  } else if (value instanceof Color) {
    return "color";
  } else if (value instanceof Float32Array) {
    switch (value.length) {
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
      case 9:
      case 12: // ??
        return "mat3";
      case 16:
        return "mat4";
      default:
        throw new Error(
          `Unsupported Float32Array length for item "${itemName}" for type inference: ${value.length}`,
        );
    }
  }
  // This function should not be called for structs, as their type must be explicit or defined with 'members'.
  throw new Error(
    `Cannot infer base type for item "${itemName}". Value type: ${typeof value}. If it's a struct, its 'type' (and 'members' if new) must be defined.`,
  );
}

function getLayoutInfo(item: UniformItem): Std140LayoutInfo {
  let typeNameToUse = item.type;
  const members = item.members;
  const itemName = item.name; // For error messages

  if (members) {
    // It's a struct definition or a struct type with members provided
    if (!typeNameToUse) {
      throw new Error(
        `Struct item "${itemName}" must have a 'type' property defining its name when 'members' are provided.`,
      );
    }
    if (computedStructLayoutCache[typeNameToUse]) {
      return computedStructLayoutCache[typeNameToUse];
    }

    let currentStructOffset = 0;
    let structMaxMemberAlign = 0;
    const memberLayouts: { [name: string]: MemberLayoutInfo } = {};
    const structValueObject = item.value as { [key: string]: UniformValue };

    if (
      typeof item.value !== "object" ||
      item.value === null ||
      Array.isArray(item.value)
    ) {
      throw new Error(
        `Value for struct "${itemName}" must be an object when 'members' are defined for layout calculation.`,
      );
    }

    for (const memberDef of members) {
      // memberDef is UniformLayoutMember
      const memberName = memberDef.name;
      const memberVal = structValueObject[memberName];
      if (memberVal === undefined && !memberDef.type && !memberDef.members) {
        // Only error if value is needed for inference
        throw new Error(
          `Value for struct member "${memberName}" of struct "${typeNameToUse}" not provided, and type cannot be inferred.`,
        );
      }

      let memberTypeString = memberDef.type;
      if (!memberTypeString && !memberDef.members) {
        // Infer if base type and no explicit type
        if (memberVal === undefined)
          throw new Error(
            `Value for struct member "${memberName}" needed for type inference.`,
          );
        memberTypeString = getDataTypeFromValue(
          memberVal,
          `${itemName}.${memberName}`,
        );
      } else if (!memberTypeString && memberDef.members) {
        // Inline nested struct definition without a type name for itself
        throw new Error(
          `Inline nested struct member "${memberName}" within "${typeNameToUse}" must have its own 'type' (name) defined.`,
        );
      }

      const memberItemForLayout: UniformItem = {
        name: memberName,
        value: memberVal, // Pass the actual value
        type: memberTypeString, // Use explicit or inferred type
        members: memberDef.members, // Pass nested struct definition if provided
      };

      const memberLayout = getLayoutInfo(memberItemForLayout);
      structMaxMemberAlign = Math.max(structMaxMemberAlign, memberLayout.align);

      const memberAlign = memberLayout.align;
      const padding =
        (memberAlign - (currentStructOffset % memberAlign)) % memberAlign;
      currentStructOffset += padding;

      memberLayouts[memberName] = {
        ...memberLayout,
        relativeOffset: currentStructOffset,
      };
      currentStructOffset += memberLayout.advanceAmount;
    }

    const structAlign = structMaxMemberAlign;
    const finalStructPadding =
      (structAlign - (currentStructOffset % structAlign)) % structAlign;
    const structTotalSize = currentStructOffset + finalStructPadding;

    const structLayout: Std140LayoutInfo = {
      align: structAlign,
      size: structTotalSize,
      advanceAmount: structTotalSize,
      isStruct: true,
      membersLayout: memberLayouts,
      typeName: typeNameToUse,
    };
    computedStructLayoutCache[typeNameToUse] = structLayout;
    return structLayout;
  } else if (typeNameToUse) {
    // Type is explicitly provided, not a new struct definition with members
    if (BASE_TYPE_LAYOUT_INFO[typeNameToUse]) {
      return BASE_TYPE_LAYOUT_INFO[typeNameToUse];
    }
    if (computedStructLayoutCache[typeNameToUse]) {
      // It's a pre-defined struct type
      return computedStructLayoutCache[typeNameToUse];
    }
    throw new Error(
      `Unknown explicit type "${typeNameToUse}" for item "${itemName}" and not a defined struct in cache.`,
    );
  } else {
    // No type, no members - infer base type from value
    const inferredType = getDataTypeFromValue(item.value, itemName);
    if (BASE_TYPE_LAYOUT_INFO[inferredType]) {
      return BASE_TYPE_LAYOUT_INFO[inferredType];
    }
    throw new Error(
      `Could not get layout for inferred type "${inferredType}" for item "${itemName}".`,
    );
  }
}

export function packUniforms(
  items: UniformItem[],
  targetBuffer?: ArrayBuffer,
  targetOffset: number = 0,
): ArrayBuffer {
  let currentBufferOffset = 0;
  let maxBufferAlignment = 0;
  const itemLayoutsWithOffsets: (MemberLayoutInfo & {
    itemData: UniformItem;
  })[] = [];

  if (items.length === 0) {
    return targetBuffer || new ArrayBuffer(0);
  }

  for (const item of items) {
    const layoutInfo = getLayoutInfo(item);
    maxBufferAlignment = Math.max(maxBufferAlignment, layoutInfo.align);
    const padding =
      (layoutInfo.align - (currentBufferOffset % layoutInfo.align)) %
      layoutInfo.align;
    currentBufferOffset += padding;
    itemLayoutsWithOffsets.push({
      ...layoutInfo,
      relativeOffset: currentBufferOffset,
      itemData: item,
    });
    currentBufferOffset += layoutInfo.advanceAmount;
  }

  const finalBufferPadding =
    (maxBufferAlignment - (currentBufferOffset % maxBufferAlignment)) %
    maxBufferAlignment;
  const totalSizeNeededForItems = currentBufferOffset + finalBufferPadding;

  let bufferToWrite: ArrayBuffer;
  let baseWriteOffset: number;

  if (targetBuffer) {
    if (targetBuffer.byteLength < targetOffset + totalSizeNeededForItems) {
      throw new Error(
        `Target buffer too small. Need ${totalSizeNeededForItems} at offset ${targetOffset}, but buffer has ${targetBuffer.byteLength} bytes.`,
      );
    }
    bufferToWrite = targetBuffer;
    baseWriteOffset = targetOffset;
  } else {
    bufferToWrite = new ArrayBuffer(totalSizeNeededForItems);
    baseWriteOffset = 0;
  }

  const bufferView = new DataView(bufferToWrite);
  const bufferAsFloats = new Float32Array(bufferToWrite);

  function writeDataItem(
    itemValue: UniformValue,
    itemLayout: Std140LayoutInfo,
    currentAbsoluteOffset: number,
  ) {
    if (itemLayout.isStruct) {
      if (
        typeof itemValue !== "object" ||
        itemValue === null ||
        Array.isArray(itemValue)
      ) {
        throw new Error(
          `Expected an object for struct value "${itemLayout.typeName}", but got ${typeof itemValue}`,
        );
      }
      const structValue = itemValue as { [key: string]: UniformValue };
      for (const memberName in itemLayout.membersLayout) {
        const memberLayoutInfo = itemLayout.membersLayout[memberName];
        const memberValue = structValue[memberName];
        if (memberValue === undefined) {
          throw new Error(
            `Value for struct member "${memberName}" of struct "${itemLayout.typeName}" not provided.`,
          );
        }
        writeDataItem(
          memberValue,
          memberLayoutInfo,
          currentAbsoluteOffset + memberLayoutInfo.relativeOffset,
        );
      }
    } else {
      switch (
      itemLayout.typeName // Use typeName for direct switch
      ) {
        case "u32":
          bufferView.setUint32(
            currentAbsoluteOffset,
            itemValue as number,
            true
          );
          break;
        case "f32":
          bufferView.setFloat32(
            currentAbsoluteOffset,
            itemValue as number,
            true,
          );
          break;
        case "color":
          bufferAsFloats.set(
            (itemValue as Color).uniformValue(),
            currentAbsoluteOffset / 4,
          );
          break;
        case "vec2":
        case "vec4":
          bufferAsFloats.set(
            itemValue as Float32Array,
            currentAbsoluteOffset / 4,
          );
          break;
        case "vec3":
          bufferAsFloats.set(
            itemValue as Float32Array,
            currentAbsoluteOffset / 4,
          );
          break;
        case "mat4":
          bufferAsFloats.set(
            itemValue as Float32Array,
            currentAbsoluteOffset / 4,
          );
          break;
        case "mat3":
          const mat3data = itemValue as Float32Array;
          const columnStrideFloats = itemLayout.paddedStride! / 4;
          for (let i = 0; i < 3; ++i) {
            const sourceOffset = i * 3;
            const destOffsetFloats =
              currentAbsoluteOffset / 4 + i * columnStrideFloats;
            bufferAsFloats.set(
              mat3data.subarray(sourceOffset, sourceOffset + 3),
              destOffsetFloats,
            );
          }
          break;
        default:
          throw new Error(
            `Unsupported typeName for writing: "${itemLayout.typeName}" at offset ${currentAbsoluteOffset}`,
          );
      }
    }
  }

  for (const itemWithOffset of itemLayoutsWithOffsets) {
    writeDataItem(
      itemWithOffset.itemData.value,
      itemWithOffset,
      baseWriteOffset + itemWithOffset.relativeOffset,
    );
  }

  return bufferToWrite;
}

export function uploadUniformBuffer(
  packedUniforms: ArrayBuffer,
  device: GPUDevice,
  label: string = "Uniform Buffer",
  buffer?: GPUBuffer,
): GPUBuffer {
  buffer ??= device.createBuffer({
    label,
    size: packedUniforms.byteLength,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
  });

  device.queue.writeBuffer(
    buffer,
    0,
    packedUniforms,
    0,
    packedUniforms.byteLength,
  );

  return buffer;
}

// --- Example Usage ---
/*
const pointLightMembers: UniformLayoutMember[] = [
    { name: "position", value: new Float32Array([0,0,0]) }, // Type 'vec3' will be inferred
    { name: "color", value: new Float32Array([0,0,0]) },    // Type 'vec3' will be inferred
    { name: "intensity", value: 0 }, // Type 'f32' will be inferred
    { name: "radius", value: 0 },    // Type 'f32' will be inferred
    // If a member was another struct, e.g., 'attenuation', its 'type' (struct name) would be required:
    // { name: "attenuation", type: "AttenuationParams", members: [...] }
];

const sceneUniformItems: UniformItem[] = [
    { // Struct defined inline
        name: "light1",
        type: "PointLightCustom", // Name for this struct type (used for caching its layout)
        members: [ // Define members; their base types can now be inferred from 'value' for light1
            { name: "position" }, // Type will be inferred from light1.value.position
            { name: "color" },    // Type will be inferred from light1.value.color
            { name: "intensity" },// Type will be inferred from light1.value.intensity
            { name: "radius" },   // Type will be inferred from light1.value.radius
        ],
        value: { // Provide values for all members
            position: new Float32Array([10, 20, 30]),
            color: new Float32Array([1.0, 0.8, 0.5]),
            intensity: 1.5,
            radius: 100.0,
        }
    },
    { // Base type, type is inferred
        name: "ambientColor",
        value: new Float32Array([0.1, 0.1, 0.15, 1.0]) // Inferred as vec4
    },
    { // Base type, type is inferred
        name: "time",
        value: 0.0 // Inferred as f32
    },
    { // Using a pre-defined (now cached) struct type
        name: "light2",
        type: "PointLightCustom", // Refers to the layout cached from "light1"
        // No 'members' needed here as "PointLightCustom" layout is already known/cached.
        value: { // Values must match the structure of PointLightCustom
            position: new Float32Array([-5, 5, 5]),
            color: new Float32Array([0.5, 0.8, 1.0]),
            intensity: 0.8,
            radius: 50.0,
        }
    }
];

// To pack these:
// const packedBuffer = packUniforms(sceneUniformItems);
// console.log("Packed Buffer Byte Length:", packedBuffer.byteLength); // Should be 80 (for light1, ambient, time) + 48 (for light2) = 128

// To verify (requires a way to read back from ArrayBuffer according to layout):
// const floatView = new Float32Array(packedBuffer);
// console.log("Light1 Position X:", floatView[0]); // 10
// console.log("Light1 Color R:", floatView[16/4 + 0]); // 1.0
// console.log("Light1 Intensity:", floatView[28/4]); // 1.5
// console.log("Light1 Radius:", floatView[32/4]); // 100.0
// console.log("Ambient R:", floatView[48/4]); // 0.1
// console.log("Time:", floatView[64/4]); // 0.0
// console.log("Light2 Position X:", floatView[80/4 + 0]); // -5
*/
