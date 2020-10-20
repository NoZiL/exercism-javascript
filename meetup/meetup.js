const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function meetup(year = 0, month = 1, schedule = "", day = "") {
  const first_day = getFirstDay(year, month - 1, schedule);
  const step = schedule === "last" ? -1 : 1;
  return findDayInMonth(first_day, day, step, new Date(year, month + 1), -1);
}

function getFirstDay(year = 0, month = 0, schedule = "") {
  switch (schedule) {
    case "first":
      return new Date(year, month, 1 + 7 * 0);
    case "second":
      return new Date(year, month, 1 + 7 * 1);
    case "third":
      return new Date(year, month, 1 + 7 * 2);
    case "fourth":
      return new Date(year, month, 1 + 7 * 3);
    case "fifth":
      return new Date(year, month, 1 + 7 * 4);
    case "teenth":
      return new Date(year, month, 13);
    case "last":
      return addDays(new Date(year, month + 1), -1);
    default:
      throw new Error("invalid schedule");
  }
}

function findDayInMonth(
  date = new Date(),
  day = 0,
  step = 1,
  firstDateNextMonth = new Date()
) {
  if (step === 1 && date > firstDateNextMonth) throw new Error("not found");
  if (date.getDay() === DAYS.findIndex((e) => e === day)) return date;
  return findDayInMonth(addDays(date, step), day, step, firstDateNextMonth);
}

const addDays = (date = new Date(), days = 1) =>
  new Date(new Date(date).setDate(date.getDate() + days));
