const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

const colorCode = (color) => COLORS.findIndex((element) => element === color);

export const decodedValue = ([color1, color2]) =>
  colorCode(color1) * 10 + colorCode(color2);
