export function isInputValidate(value: string, maxLength: number): boolean {
  return /^[0-9]*$/.test(value) && value.length <= maxLength;
}

export function isExactLength(value: string, length: number): boolean {
  return value.length === length;
}
