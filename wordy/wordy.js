const regex = /What is(?<operations>.*)+\?/;

export function answer(question = "") {
  const match = question.match(regex);
  if (!match) {
    throw new Error("Unknown operation");
  }
  if (!match.groups.operations) {
    throw new Error("Syntax error");
  }
  const operations = match?.groups?.operations.trim().split(" ");
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
    case head === "plus":
      return calculate(
        tail.slice(1),
        calculateOne((a, b) => a + b, acc, tail[0])
      );
    case head === "minus":
      return calculate(
        tail.slice(1),
        calculateOne((a, b) => a - b, acc, tail[0])
      );
    case head === "multiplied" && tail[0] === "by":
      return calculate(
        tail.slice(2),
        calculateOne((a, b) => a * b, acc, tail[1])
      );
    case head === "divided" && tail[0] === "by":
      return calculate(
        tail.slice(2),
        calculateOne((a, b) => a / b, acc, tail[1])
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
