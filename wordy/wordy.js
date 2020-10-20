const OPERATIONS = {
  "What is": (_, b) => b,
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => a / b,
};

const questionRegex = /^(?<question>.*)\?$/;

export function answer(question = "") {
  return calculate(
    question
      .match(questionRegex)
      .groups.question.trim()
      .split(/\s(?!by|is)/)
      .map((e) => {
        const parsed = Number.parseInt(e);
        return isNaN(parsed) ? e : parsed;
      })
  );
}

function calculate([head, ...tail], acc = 0) {
  const existingOperation = Object.keys(OPERATIONS).includes(head);
  const nextOperationIndex = tail.findIndex((e) => typeof e !== "number");
  const sliceIndex = nextOperationIndex < 0 ? tail.length : nextOperationIndex;
  const nextNumbers = tail.slice(0, sliceIndex);
  const hasCorrectArity = OPERATIONS[head]?.length - 1 === nextNumbers.length;

  switch (true) {
    case !head:
      return acc;
    case existingOperation && hasCorrectArity:
      return calculate(
        tail.slice(sliceIndex),
        OPERATIONS[head](acc, ...nextNumbers)
      );
    case existingOperation:
      throw new Error("Syntax error");
    default:
      throw new Error("Unknown operation");
  }
}
