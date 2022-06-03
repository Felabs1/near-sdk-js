export declare function log(message: any): void;
export declare function signerAccountId(): any;
export declare function signerAccountPk(): any;
export declare function predecessorAccountId(): any;
export declare function blockIndex(): any;
export declare function blockTimestamp(): any;
export declare function epochHeight(): any;
export declare function attachedDeposit(): any;
export declare function prepaidGas(): any;
export declare function usedGas(): any;
export declare function randomSeed(): any;
export declare function sha256(value: any): any;
export declare function keccak256(value: any): any;
export declare function keccak512(value: any): any;
export declare function ripemd160(value: any): any;
export declare function ecrecover(hash: any, sign: any, v: any, malleabilityFlag: any): any;
export declare function panic(msg: any): void;
export declare function panicUtf8(msg: any): void;
export declare function logUtf8(msg: any): void;
export declare function logUtf16(msg: any): void;
export declare function storageRead(key: any): any;
export declare function storageHasKey(key: any): boolean;
export declare function validatorStake(accountId: any): any;
export declare function validatorTotalStake(): any;
export declare function altBn128G1Multiexp(value: any): any;
export declare function altBn128G1Sum(value: any): any;
export declare function altBn128PairingCheck(value: any): boolean;
export declare function jsvmAccountId(): any;
export declare function jsvmJsContractName(): any;
export declare function jsvmMethodName(): any;
export declare function jsvmArgs(): any;
export declare function jsvmStorageWrite(key: any, value: any): boolean;
export declare function jsvmStorageRead(key: any): any;
export declare function jsvmStorageRemove(key: any): boolean;
export declare function jsvmStorageHasKey(key: any): boolean;
export declare function jsvmCallRaw(contractName: any, method: any, args: any): any;
export declare function jsvmCall(contractName: any, method: any, args: any): any;
export declare function storageGetEvicted(): any;
export declare function jsvmValueReturn(value: any): void;
