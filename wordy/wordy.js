export const answer = (question = "") => {
  const { groups } = question.match(/What is (?<number>\d*)\?/);
  if (groups.number) {
    return Number(groups.number);
  }
  throw new Error("Not yet implemented");
};
