export class Matrix {
  constructor(str) {
    this.rows = Matrix.extractRowsFromString(str)
    this.columns = zip(this.rows)
  }

  static extractRowsFromString(str) {
    return str.split('\n').map(e => e.split(' ').map(Number))
  }
}

const zip = (arrays) => arrays[0].map(
  (_, i) => arrays.map(
    (array) => array[i]
  )
)
