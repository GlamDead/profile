/* eslint-disable unicorn/no-null */
export const emptyStringToNull = function (value) {
  if (value === null) {
    return null
  }

  const string = value.trim()

  return string === "" ? undefined : string
}
