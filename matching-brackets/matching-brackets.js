export const matchingBrackets = (str) => {
  try {
    return str.split('').reduce(readChar, []).length === 0
  } catch (error) {
    return false
  }
}

const readChar = (buffer, char) => {
  const [head, ...tail] = buffer
  switch (char) {
    case head:
      return tail
    case '}':
    case ']':
    case ')':
      throw new Error('Invalid bracket')
    case '{':
      return ['}', ...buffer]
    case '[':
      return [']', ...buffer]
    case '(':
      return [')', ...buffer]
    default:
      return buffer
  }
}
