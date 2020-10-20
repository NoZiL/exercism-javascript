const BRACKETS_PAIRS = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const OPENING_BRACKETS = Object.keys(BRACKETS_PAIRS);

const CLOSING_BRACKETS = Object.values(BRACKETS_PAIRS);

export function isPaired(string) {
  try {
    return string.split("").reduce(readChar, []).length === 0;
  } catch (error) {
    return false;
  }
}

const readChar = (bracketsBuffer, currentCharacter) => {
  switch (true) {
    case bracketsBuffer[0] === currentCharacter:
      return bracketsBuffer.slice(1);
    case OPENING_BRACKETS.includes(currentCharacter):
      return [BRACKETS_PAIRS[currentCharacter], ...bracketsBuffer];
    case CLOSING_BRACKETS.includes(currentCharacter):
      throw new Error("invalid bracket");
    default:
      return bracketsBuffer;
  }
};
