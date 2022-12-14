"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytes = exports.beetBytes = exports.logTrace = exports.logDebug = exports.logInfo = exports.logError = void 0;
const debug_1 = __importDefault(require("debug"));
const ansicolors_1 = __importDefault(require("ansicolors"));
const types_1 = require("./types");
const { brightBlack } = ansicolors_1.default;
exports.logError = (0, debug_1.default)('beet:error');
exports.logInfo = (0, debug_1.default)('beet:info');
exports.logDebug = (0, debug_1.default)('beet:debug');
exports.logTrace = (0, debug_1.default)('beet:trace');
function beetBytes(beet, isFixable = false) {
    let bytes;
    if ((0, types_1.isFixableBeet)(beet)) {
        bytes = '? B';
    }
    else if ((0, types_1.isElementCollectionFixedSizeBeet)(beet)) {
        const len = isFixable ? 'length' : beet.length;
        const lenBytes = beet.lenPrefixByteSize;
        bytes =
            lenBytes > 0
                ? `${lenBytes} + (${beet.elementByteSize} * ${len}) B  (${beet.byteSize} B)`
                : `(${beet.elementByteSize} * ${len}) B (${beet.byteSize} B)`;
    }
    else {
        bytes = `${beet.byteSize} B`;
    }
    return brightBlack(bytes);
}
exports.beetBytes = beetBytes;
function bytes(n) {
    return brightBlack(`${n} B`);
}
exports.bytes = bytes;
//# sourceMappingURL=utils.js.map