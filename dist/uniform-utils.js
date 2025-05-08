"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.packUniforms = packUniforms;
exports.uploadUniformBuffer = uploadUniformBuffer;
const color_1 = require("./color");
// Map WGSL types to their std140 layout info, now including advanceAmount and paddedStride for all
const STD140_LAYOUT_INFO = {
    // type: { align, size, advanceAmount, paddedStride }
    f32: { align: 4, size: 4, advanceAmount: 4, paddedStride: 4 },
    vec2: { align: 8, size: 8, advanceAmount: 8, paddedStride: 8 },
    vec3: { align: 16, size: 12, advanceAmount: 16, paddedStride: 16 }, // Aligns to 16, data size 12, occupies 16
    vec4: { align: 16, size: 16, advanceAmount: 16, paddedStride: 16 },
    color: { align: 16, size: 16, advanceAmount: 16, paddedStride: 16 },
    mat3: { align: 16, size: 36, advanceAmount: 48, paddedStride: 16 }, // Size 9*4=36, 3 cols * 16 bytes/col stride = 48 bytes advance
    mat4: { align: 16, size: 64, advanceAmount: 64, paddedStride: 16 }, // Size 16*4=64, 4 cols * 16 bytes/col stride = 64 bytes advance
};
// Helper to determine the WGSL type string from a JavaScript value
function getDataType(item) {
    if (typeof item.value === "number") {
        return "f32";
    }
    else if (item.value instanceof color_1.Color) {
        return "color";
    }
    else if (item.value instanceof Float32Array) {
        switch (item.value.length) {
            case 2:
                return "vec2";
            case 3:
                return "vec3";
            case 4:
                return "vec4";
            case 9:
                return "mat3";
            case 16:
                return "mat4";
            default:
                throw new Error(`Unsupported Float32Array length in item ${item.name} for uniform packing: ${item.value.length}`);
        }
    }
    else {
        throw new Error(`Unsupported data type in item ${item.name} for uniform packing: ${typeof item.value}`);
    }
}
function packUniforms(items, targetBuffer, targetOffset = 0) {
    let currentOffset = 0;
    let maxAlignment = 0;
    // Store layout info including the calculated offset relative to the start of packing
    const itemLayouts = [];
    if (items.length === 0 && !targetBuffer) {
        return new ArrayBuffer(0); // Handle empty input when creating new buffer
    }
    if (items.length === 0 && targetBuffer) {
        return targetBuffer; // Nothing to write if items are empty
    }
    // --- First Pass: Calculate relative offsets and total size ---
    for (const item of items) {
        const type = getDataType(item);
        const layoutInfo = STD140_LAYOUT_INFO[type];
        if (!layoutInfo) {
            throw new Error(`Layout info not defined for type: ${type}`);
        }
        const itemAlign = layoutInfo.align;
        const itemSize = layoutInfo.size; // Actual data size
        maxAlignment = Math.max(maxAlignment, itemAlign);
        // Calculate padding needed BEFORE this item to meet its alignment
        const padding = (itemAlign - (currentOffset % itemAlign)) % itemAlign;
        currentOffset += padding;
        // Store layout info for the second pass (writing data)
        const layoutEntry = {
            relativeOffset: currentOffset, // Offset relative to the start of packing
            size: itemSize,
            type: type,
            data: item,
            paddedStride: layoutInfo.paddedStride,
        };
        itemLayouts.push(layoutEntry);
        // Advance offset by the pre-calculated amount for this type
        currentOffset += layoutInfo.advanceAmount;
    }
    // --- Calculate final size needed for packing ---
    // The total size must be a multiple of the maximum alignment encountered
    const finalPadding = (maxAlignment - (currentOffset % maxAlignment)) % maxAlignment;
    const totalSizeNeeded = currentOffset + finalPadding;
    // --- Determine target buffer and base offset for writing ---
    let bufferToWrite;
    let baseWriteOffset;
    if (targetBuffer) {
        // Check if the provided buffer is large enough
        if (targetBuffer.byteLength < targetOffset + totalSizeNeeded) {
            throw new Error(`Target buffer is too small. Need ${totalSizeNeeded} bytes starting at offset ${targetOffset}, but buffer size is ${targetBuffer.byteLength} bytes.`);
        }
        bufferToWrite = targetBuffer;
        baseWriteOffset = targetOffset;
    }
    else {
        // Create a new buffer if none was provided
        bufferToWrite = new ArrayBuffer(totalSizeNeeded);
        baseWriteOffset = 0;
    }
    // --- Create views for the buffer we are writing to ---
    const bufferView = new DataView(bufferToWrite);
    const bufferAsFloats = new Float32Array(bufferToWrite);
    // --- Second Pass: Write data to the target buffer ---
    for (const layout of itemLayouts) {
        // Calculate the absolute byte offset in the target buffer
        const writeOffset = baseWriteOffset + layout.relativeOffset;
        const data = layout.data.value; // Cast for convenience, handle number below
        const type = layout.type;
        switch (type) {
            case "f32":
                // Write single float using DataView
                bufferView.setFloat32(writeOffset, layout.data.value, true); // true for littleEndian
                break;
            case "color":
                bufferAsFloats.set(layout.data.value.uniformValue(), writeOffset / 4);
                break;
            case "vec2":
            case "vec4":
            case "mat4": // mat4 columns are tightly packed in source and dest has same stride
                // Write Float32Array data directly using Float32Array view
                // Offset needs to be converted to float elements (writeOffset / 4 bytes_per_float)
                bufferAsFloats.set(data, writeOffset / 4);
                break;
            case "vec3":
                // Write vec3 data (3 floats) using Float32Array view
                // The buffer has space for 4 floats allocated, but we only write 3.
                bufferAsFloats.set(data, writeOffset / 4);
                break;
            case "mat3":
                // Write mat3 data column by column due to padding
                // Each vec3 column takes 12 bytes of data but occupies 16 bytes stride
                const columnStrideFloats = layout.paddedStride / 4; // 16 / 4 = 4 floats stride
                for (let i = 0; i < 3; ++i) {
                    // 3 columns
                    const sourceOffset = i * 3; // Source data is tightly packed (0, 3, 6)
                    // Calculate destination offset in float elements, relative to the start of the buffer
                    const destOffsetFloats = writeOffset / 4 + i * columnStrideFloats;
                    bufferAsFloats.set(data.subarray(sourceOffset, sourceOffset + 3), destOffsetFloats);
                }
                break;
            // Add cases for other types if supported
        }
    }
    // Return the buffer (either the one passed in or the newly created one)
    return bufferToWrite;
}
function uploadUniformBuffer(packedUniforms, device, label = "Uniform Buffer", buffer) {
    buffer !== null && buffer !== void 0 ? buffer : (buffer = device.createBuffer({
        label,
        size: packedUniforms.byteLength,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
    }));
    device.queue.writeBuffer(buffer, 0, packedUniforms, 0, packedUniforms.byteLength);
    return buffer;
}
