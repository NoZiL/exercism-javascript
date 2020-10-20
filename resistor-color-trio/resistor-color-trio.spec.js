import { ResistorColorTrio } from "./resistor-color-trio.js";

function makeLabel({ value, unit }) {
  return `Resistor value: ${value} ${unit}`;
}

describe("Resistor Color Trio", () => {
  test("Orange and orange and black", () => {
    expect(new ResistorColorTrio(["orange", "orange", "black"]).label).toEqual(
      makeLabel({ value: 33, unit: "ohms" })
    );
  });

  test("Blue and grey and brown", () => {
    expect(new ResistorColorTrio(["blue", "grey", "brown"]).label).toEqual(
      makeLabel({ value: 680, unit: "ohms" })
    );
  });

  test("Red and black and red", () => {
    expect(new ResistorColorTrio(["red", "black", "red"]).label).toEqual(
      makeLabel({ value: 2, unit: "kiloohms" })
    );
  });

  test("Green and brown and orange", () => {
    expect(new ResistorColorTrio(["green", "brown", "orange"]).label).toEqual(
      makeLabel({ value: 51, unit: "kiloohms" })
    );
  });

  test("Yellow and violet and yellow", () => {
    expect(new ResistorColorTrio(["yellow", "violet", "yellow"]).label).toEqual(
      makeLabel({ value: 470, unit: "kiloohms" })
    );
  });

  // optional: error
  test("Invalid color", () => {
    expect(
      () => new ResistorColorTrio(["yellow", "purple", "black"]).label
    ).toThrowError(/invalid color/);
  });

  test("Red and brown and blue", () => {
    expect(new ResistorColorTrio(["red", "brown", "blue"]).label).toEqual(
      makeLabel({ value: 21, unit: "megaohms" })
    );
  });

  test("White and white and white", () => {
    expect(new ResistorColorTrio(["white", "white", "white"]).label).toEqual(
      makeLabel({ value: 99, unit: "gigaohms" })
    );
  });
});
