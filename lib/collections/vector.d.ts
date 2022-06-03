export declare class Vector {
    length: number;
    readonly prefix: string;
    constructor(prefix: string);
    len(): number;
    isEmpty(): boolean;
    get(index: number): any;
    swapRemove(index: number): any;
    push(element: string): void;
    pop(): any;
    replace(index: any, element: any): any;
    extend(elements: any): void;
    [Symbol.iterator](): VectorIterator;
    clear(): void;
    toArray(): any[];
}
export declare class VectorIterator {
    private current;
    private vector;
    constructor(vector: Vector);
    next(): {
        value: any;
        done: boolean;
    };
}
