export class Triangle {
  constructor(size) {
    this.rows = computeTriangle(size)
    this.lastRow = this.rows[size-1]
  }
}

const computeTriangle = (size) =>
  range(0, size)
    .reduce((triangle, lineIndex) => ([...triangle, computeLine(triangle[lineIndex-1])])
    , [])

const computeLine = (previousRow = []) => ([
  ...previousRow.map(computeItem),
  1
])

const computeItem = (_, index, previousRow) =>
  sum(previousRow[index-1], previousRow[index])

const sum = (...values) =>
  values
    .filter(e => !!e)
    .reduce((acc, v) => acc + v)

const range = (start, end) =>
  Array.from({length: (end - start)}, (v, k) => k + start);
