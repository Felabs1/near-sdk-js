export function u8ArrayToStringUnchecked(array: Uint8Array) {
  let ret = "";
  for (let e of array) {
    ret += String.fromCharCode(e);
  }
  return ret;
}

export function stringToU8Array(string: any): Uint8Array {
  // TODO fix this. Overflow on multi-byte character strings
  let ret = new Uint8Array(string.length);
  for (let i in string) {
    ret[i] = string.charCodeAt(i);
  }
  return ret;
}

export function encodeCall(contract: string, method: string, args: any) {
  return Buffer.concat([
    Buffer.from(contract),
    Buffer.from([0]),
    Buffer.from(method),
    Buffer.from([0]),
    Buffer.from(JSON.stringify(args)),
  ]);
}
