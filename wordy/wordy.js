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
  );
}

function calculate([head, ...tail], acc = 0) {
  switch (true) {
    case !head:
      return acc;
    case Object.keys(OPERATIONS).includes(head):
      return calculate(
        tail.slice(1),
        calculateOne(OPERATIONS[head], acc, tail[0])
      );
    case !isNaN(Number.parseInt(head)):
      throw new Error("Syntax error");
    default:
      throw new Error("Unknown operation");
  }
}

function calculateOne(operation, ...args) {
  const parsedIntArgs = args.map((e) => Number.parseInt(e));
  if (parsedIntArgs.some((e) => typeof e !== "number" || isNaN(e))) {
    throw new Error("Syntax error");
  }
  return operation(...parsedIntArgs);
}
