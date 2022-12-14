import debug from 'debug';
import { FixableBeet, FixedSizeBeet } from './types';
export declare const logError: debug.Debugger;
export declare const logInfo: debug.Debugger;
export declare const logDebug: debug.Debugger;
export declare const logTrace: debug.Debugger;
export declare function beetBytes<T, V = Partial<T>>(beet: FixedSizeBeet<T, V> | FixableBeet<T, V>, isFixable?: boolean): string;
export declare function bytes(n: number): string;
