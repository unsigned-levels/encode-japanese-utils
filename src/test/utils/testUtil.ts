export const rIt = (func: Function) => {
  it(func.name, () => func())
}
