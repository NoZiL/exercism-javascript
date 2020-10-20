const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const meetupDay = (year, month, day, schedule) => {
  const first_day = find_first_date(schedule, year, month)
  const step = schedule == 'last' ? -1 : 1
  return find_day(first_day, day, step, new Date(year, month + 1), -1)
}

const find_first_date = (schedule, year, month) => {
  switch (schedule) {
    case '1st':
      return new Date(year, month)
    case '2nd':
      return new Date(year, month, 1 + 7)
    case '3rd':
      return new Date(year, month, 1 + 7 * 2)
    case '4th':
      return new Date(year, month, 1 + 7 * 3)
    case '5th':
      return new Date(year, month, 1 + 7 * 4)
    case 'teenth':
      return new Date(year, month, 13)
    case 'last':
      return add_days(new Date(year, month + 1), -1)
    default:
      throw new Error("invalid schedule")
  }
}

const find_day = (date, day, step, max_date) => {
  if(step == 1 && date > max_date) throw new Error("not found")
  if(date.getDay() == days.findIndex(e => e == day)) return date
  return find_day(add_days(date, step), day, step, max_date)
}

const add_days = (date, days) => new Date((new Date(date)).setDate(date.getDate() + days))
