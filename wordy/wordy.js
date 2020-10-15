const regex = /What is (?<number>-?\d*)(?<operation> (?<operator>[a-z| ]+)( (?<operand>-?\d*))?)*\?/;

export const answer = (question = "") => {
  const { groups } = question.match(regex) || {};
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
