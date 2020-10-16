const regex1 = /What is (?<number>-?\d*)(?<operation> (?<operator>[a-z| ]+)( (?<operand>-?\d*))?)*\?/;

export const answer1 = (question = "") => {
  const { groups } = question.match(regex1) || {};
  const { number, operation, operator, operand } = groups || {};
  switch (true) {
    case !number:
    case number && operation && !operator:
    default:
      throw new Error("Unknown operation");
    case number && !operation:
      return Number(number);
    case operator === "plus":
      return Number(number) + Number(operand);
    case operator === "minus":
      return Number(number) - Number(operand);
    case operator === "multiplied by":
      return Number(number) * Number(operand);
    case operator === "divided by":
      return Number(number) / Number(operand);
  }
};

const regex = /What is (?<operations>.*)+\?/;

export function answer(question = "") {
  const match = question.match(regex);
  const operations = match?.groups?.operations
    .split(" ")
    .map(parseNumbers)
    .reduce(calculate, [0, "plus"]);
  return operations[0];
}

function parseNumbers(string) {
  const number = Number.parseInt(string);
  return isNaN(number) ? string : number;
}

function calculate([result, operation], v) {
  if (typeof v === "string") {
    return [result, [operation, v].filter((e) => e).join(" ")];
  }
  switch (operation) {
    case "plus":
      return [result + v, null];
    case "minus":
      return [result - v, null];
    case "multiplied by":
      return [result * v, null];
    case "divided by":
      return [result / v, null];
    default:
      throw new Error("Unknown operation");
  }
}
