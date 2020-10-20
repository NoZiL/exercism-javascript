export function isLeap(year = 0) {
  return (
    isDivisibleBy(year, 4) &&
    !(isDivisibleBy(year, 100) && !isDivisibleBy(year, 400))
  );
}

function isDivisibleBy(value = 0, divisor = 1) {
  return !(value % divisor);
}
