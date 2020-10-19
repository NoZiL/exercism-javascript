const regex = /What is(?<operations>.*)\?/;

const OPERATIONS = {
  plus: (a, b) => a + b,
  minus: (a, b) => a - b,
  "multiplied by": (a, b) => a * b,
  "divided by": (a, b) => a / b,
};

export function answer(question = "") {
  const match = question.match(regex);
  if (!match) {
    throw new Error("Unknown operation");
  }
  if (!match.groups.operations) {
    throw new Error("Syntax error");
  }
  const operations = match.groups.operations.trim().split(/\s(?!by)/);
  return calculate(operations);
}

function calculate(operations = [], acc = null) {
  const [head, ...tail] = operations;
  if (operations.length <= 0) return acc;
  const numberValue = Number.parseInt(head);
  switch (true) {
    case !isNaN(numberValue) && acc === null:
      return calculate(tail, numberValue);
    case !isNaN(numberValue) && acc !== null:
      throw new Error("Syntax error");
    case Object.keys(OPERATIONS).includes(head):
      return calculate(
        tail.slice(1),
        calculateOne(OPERATIONS[head], acc, tail[0])
      );
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
