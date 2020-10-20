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

export class ResistorColorTrio {
  constructor(colors = []) {
    const [digit1, digit2, digit3] = colors.map((e) => {
      const value = COLORS.findIndex((c) => c === e);
      if (value === -1) throw new Error("invalid color");
      return value;
    });
    this.value = (digit1 * 10 + digit2) * Math.pow(10, digit3);
  }

  get label() {
    return `Resistor value: ${labelUnit(this.value, "ohms")}`;
  }
}

const MULTIPLES = {
  1_000: "kilo",
  1_000_000: "mega",
  1_000_000_000: "giga",
};

function labelUnit(value = 0, unit = "") {
  const multiple = Object.keys(MULTIPLES)
    .reverse()
    .find((e) => value >= e);
  return `${value / (multiple ?? 1)} ${MULTIPLES[multiple] ?? ""}${unit}`;
}
