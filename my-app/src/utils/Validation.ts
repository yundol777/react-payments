export default function isInputValidate(value: string, maxLength: number): boolean {
  const isNumberOnly = /^[0-9]*$/.test(value);

  if (!isNumberOnly) return false;
  if(value.length > maxLength) return false;
  
  return true;
}
