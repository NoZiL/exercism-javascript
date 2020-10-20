export const isPangram = (sentence) => Object.values(alphabetCount(sentence)).length === 26

const alphabetCount = (sentence) =>
  captureLetters(sentence)
    .map((v) => v.toLowerCase())
    .reduce(reduceAlphabetCount, {})

const captureLetters = (sentence) => sentence.match(/[a-z]/ig) || []

const reduceAlphabetCount = (acc, value) => ({ ...acc, [value]: acc[value] || 0 + 1, })
