/// <reference types="node" />
import { Beet } from './types';
/**
 * Converts the provided beet into a {@link FixedBeet} unless it already is.
 * The sizes for {@link FixableBeet}s are determined from the provided data.
 *
 * @param beet to convert
 * @param buf containing serialized data that the fixed beet needs to process
 * @param offset at which the data for the beet starts
 *
 * @category beet
 */
export declare function fixBeetFromData<T, V = Partial<T>>(beet: Beet<T, V>, buf: Buffer, offset: number): import("./types").ScalarFixedSizeBeet<T, V> | import("./types").ScalarFixedSizeBeet<T, Partial<T>>;
/**
 * Converts the provided beet into a {@link FixedBeet} unless it already is.
 * The sizes for {@link FixableBeet}s are determined from the provided value.
 *
 * @param beet to convert
 * @param val value that the fixed beet needs to process
 *
 * @category beet
 */
export declare function fixBeetFromValue<T, V = Partial<T>>(beet: Beet<T, V>, val: V): import("./types").ScalarFixedSizeBeet<T, V> | import("./types").ScalarFixedSizeBeet<T, Partial<T>>;
