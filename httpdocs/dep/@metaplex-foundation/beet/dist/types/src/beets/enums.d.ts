/// <reference types="node" />
import { DataEnumBeet, Enum, FixedSizeBeet, SupportedTypeDefinition } from '../types';
/**
 * De/serializer for enums with up to 255 less variants which have no data.
 *
 * @param enumType type of enum to process, i.e. Color or Direction
 *
 * @category beet/enum
 */
export declare function fixedScalarEnum<T>(enumType: Enum<T>): FixedSizeBeet<Enum<T>, Enum<T>>;
/**
 * Represents an {@link Enum} type which contains fixed size data and whose
 * data is uniform across all variants.
 *
 * @template Kind the enum variant, i.e. `Color.Red`
 * @template Data the data value, i.e. '#f00'
 *
 * @category beet/composite
 */
export declare type UniformDataEnum<Kind, Data> = {
    kind: Kind & number;
    data: Data;
};
/**
 * De/Serializes an {@link Enum} that contains a type of data, i.e. a {@link Struct}.
 * The main difference to a Rust enum is that the type of data has to be the
 * same for all enum variants.
 *
 * @template T inner enum data type
 *
 * @param inner the De/Serializer for the data type
 *
 * @category beet/enum
 */
export declare function uniformDataEnum<Kind, Data>(inner: FixedSizeBeet<Data>): FixedSizeBeet<UniformDataEnum<Kind, Data>>;
declare type EnumDataVariant<Kind, Data> = {
    __kind: Kind;
} & Data;
/**
 * De/serializes Data Enums.
 * They are represented as a discriminated unions in TypeScript.
 *
 * NOTE: only structs, i.e. {@link BeetArgsStruct} and
 * {@link FixableBeetArgsStruct} are supported as the data of each enum variant.
 *
 * ## Example
 *
 * ```ts
 * type Simple = {
 *   First: { n1: number }
 *   Second: { n2: number }
 * }
 *
 * const beet = dataEnum<Simple>([
 *   ['First', new BeetArgsStruct<Simple['First']>([['n1', u32]])],
 *   ['Second', new BeetArgsStruct<Simple['Second']>([['n2', u32]])],
 * ])
 * ```
 *
 * @category beet/enum
 * @param variants an array of {@link DataEnumBeet}s each a tuple of `[ kind, data ]`
 */
export declare function dataEnum<T, Key extends keyof T = keyof T>(variants: DataEnumBeet<T, Key>[]): {
    toFixedFromData(buf: Buffer, offset: number): FixedSizeBeet<EnumDataVariant<Key, T[Key]>, Partial<EnumDataVariant<Key, T[Key]>>>;
    toFixedFromValue(val: any): FixedSizeBeet<EnumDataVariant<Key, T[Key]>, Partial<EnumDataVariant<Key, T[Key]>>>;
    description: string;
};
/**
 * @category TypeDefinition
 */
export declare type EnumsExports = keyof typeof import('./enums');
/**
 * @category TypeDefinition
 */
export declare type EnumsTypeMapKey = 'fixedScalarEnum' | 'dataEnum';
/**
 * @category TypeDefinition
 */
export declare type EnumsTypeMap = Record<EnumsTypeMapKey, SupportedTypeDefinition & {
    beet: EnumsExports;
}>;
/**
 * Maps composite beet exports to metadata which describes in which package it
 * is defined as well as which TypeScript type is used to represent the
 * deserialized value in JavaScript.
 *
 * @category TypeDefinition
 */
export declare const enumsTypeMap: EnumsTypeMap;
export {};
