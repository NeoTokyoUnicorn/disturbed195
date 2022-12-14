/// <reference types="node" />
import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
import { Key } from '../types/Key';
import { ReservationV1 } from '../types/ReservationV1';
export declare type ReservationListV1Args = {
    key: Key;
    masterEdition: web3.PublicKey;
    supplySnapshot: beet.COption<beet.bignum>;
    reservations: ReservationV1[];
};
export declare class ReservationListV1 implements ReservationListV1Args {
    readonly key: Key;
    readonly masterEdition: web3.PublicKey;
    readonly supplySnapshot: beet.COption<beet.bignum>;
    readonly reservations: ReservationV1[];
    private constructor();
    static fromArgs(args: ReservationListV1Args): ReservationListV1;
    static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset?: number): [ReservationListV1, number];
    static fromAccountAddress(connection: web3.Connection, address: web3.PublicKey): Promise<ReservationListV1>;
    static gpaBuilder(programId?: web3.PublicKey): beetSolana.GpaBuilder<ReservationListV1Args>;
    static deserialize(buf: Buffer, offset?: number): [ReservationListV1, number];
    serialize(): [Buffer, number];
    static byteSize(args: ReservationListV1Args): number;
    static getMinimumBalanceForRentExemption(args: ReservationListV1Args, connection: web3.Connection, commitment?: web3.Commitment): Promise<number>;
    pretty(): {
        key: string;
        masterEdition: string;
        supplySnapshot: beet.bignum;
        reservations: ReservationV1[];
    };
}
export declare const reservationListV1Beet: beet.FixableBeetStruct<ReservationListV1, ReservationListV1Args>;
