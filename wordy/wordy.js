const regex = /What is (?<number>-?\d*)(\s(?<operation>.*)\s(?<number2>-?\d*))?\?/;

export const answer = (question = "") => {
  const { groups } = question.match(regex);
  const { number, operation, number2 } = groups;
  switch (true) {
    default:
    case !number:
      return null;
    case !operation:
      return Number(number);
    case operation === "plus":
      return Number(number) + Number(number2);
    case operation === "minus":
      return Number(number) - Number(number2);
    case operation === "multiplied by":
      return Number(number) * Number(number2);
    case operation === "divided by":
      return Number(number) / Number(number2);
    case !!operation:
      throw new Error("Unknown operation");
  }
};
