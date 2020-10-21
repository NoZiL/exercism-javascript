export function valid(string = "") {
  const numbers = getNumbers(string);
  if (numbers.length <= 1) return false;
  if (numbers.some((e) => isNaN(e))) return false;
  const sum = numbers.reduceRight(
    (acc, number, index) =>
      acc + ((numbers.length - 1 - index) % 2 == 1 ? double(number) : number),
    0
  );
  return sum % 10 === 0;
}

function getNumbers(string = []) {
  return string
    .split("")
    .filter((e) => e != " ")
    .map((e) => parseInt(e));
}

const double = (e) => (e * 2 >= 10 ? e * 2 - 9 : e * 2);
