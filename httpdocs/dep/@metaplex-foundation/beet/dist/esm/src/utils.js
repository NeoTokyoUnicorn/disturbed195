import debug from 'debug';
import colors from 'ansicolors';
import { isElementCollectionFixedSizeBeet, isFixableBeet, } from './types';
const { brightBlack } = colors;
export const logError = debug('beet:error');
export const logInfo = debug('beet:info');
export const logDebug = debug('beet:debug');
export const logTrace = debug('beet:trace');
export function beetBytes(beet, isFixable = false) {
    let bytes;
    if (isFixableBeet(beet)) {
        bytes = '? B';
    }
    else if (isElementCollectionFixedSizeBeet(beet)) {
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
export function bytes(n) {
    return brightBlack(`${n} B`);
}
//# sourceMappingURL=utils.js.map