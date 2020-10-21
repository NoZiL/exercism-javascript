// Using https://babeljs.io/docs/en/babel-plugin-proposal-class-properties

const FRAMES = [10, 10, 10, 26, 26];
const TOTAL_NUMBER_OF_NAMES = FRAMES.reduce((acc, e) => e * acc, 1);
const ALL_IDS = [...Array(TOTAL_NUMBER_OF_NAMES).keys()];

const ASCII_FIRST = 65;

const shuffle = (array) =>
  array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

export class Robot {
  static releaseNames() {
    Robot.availableIds = shuffle(ALL_IDS);
  }

  constructor() {
    this.reset();
  }

  reset() {
    this.id = Robot.availableIds.pop();
  }

  get name() {
    return FRAMES.reduce(
      (acc, e) => {
        const [[prev_div]] = acc;
        const rem = prev_div % e;
        const symbol = e === 26 ? String.fromCharCode(ASCII_FIRST + rem) : rem;
        const div = Math.trunc(prev_div / e);
        return [[div, symbol], ...acc];
      },
      [[this.id]]
    )
      .map((e) => e[1])
      .join("");
  }
}

Robot.availableIds = shuffle(ALL_IDS);
