export const getAbbreviatedName = (fullName) => {
  const lengthWord = fullName.split(" ")

  if (lengthWord.length <= 1) {
    return fullName
  }

  return `${lengthWord[0]} ${lengthWord[1][0]}.`
}
