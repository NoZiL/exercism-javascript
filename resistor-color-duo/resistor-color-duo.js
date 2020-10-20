const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

const colorCode = (color) => COLORS.findIndex(element => element === color)

export const value = (colors) =>
  colors
    .map(colorCode)
    .reverse()
    .reduce(reduceToDecimal, 0)

const reduceToDecimal = (acc, cur, idx) => acc + cur * (10 ** idx)
