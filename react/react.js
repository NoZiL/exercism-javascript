class Cell {
  constructor() {
    this.computed_cells = []
    this.callback_cells = new Set()
  }

  setValue(value) {
    this.stable = true
    if (this.value != value) {
      this.value = value
      this.notifyCallbackCells()
      this.computed_cells.forEach(computed_cell => {
        computed_cell.setValue()
      })
    } else {
      this.stabalize()
    }
  }

  notifyCallbackCells() {
    ([...this.callback_cells.values()]).forEach(callback_cell => {
      callback_cell.addValue(this)
    })
  }

  addComputed(computed_cell) {
    this.computed_cells = [
      ...this.computed_cells,
      computed_cell
    ]
  }

  addCallback(callback_cell) {
    this.callback_cells.add(callback_cell)
  }

  removeCallback(callback_cell) {
    this.callback_cells.delete(callback_cell)
  }

  update_stable(stable) {
    this.computed_cells.forEach(computed_cell => {
      computed_cell.stable = stable
      computed_cell.update_stable(stable)
    })
  }

  unstabalize() {
    this.update_stable(false)
  }

  stabalize() {
    this.update_stable(true)
  }
}

export class InputCell extends Cell {
  constructor(value) {
    super()
    this.stable = true
    this.setValue(value)
  }

  setValue(value) {
    this.unstabalize()
    super.setValue(value)
  }
}

export class ComputeCell extends Cell {
  constructor(input_cells, fn) {
    super()
    this.fn = fn
    this.input_cells = input_cells
    this.addInputCells(input_cells)
    this.setValue()
  }

  setValue() {
    if(this.input_cells.every(input_cell => input_cell.stable)) {
      super.setValue(this.fn(this.input_cells))
    }
  }

  addInputCells(input_cells) {
    input_cells.forEach(cell => {
      cell.addComputed(this)
    })
  }
}

export class CallbackCell {
  constructor(fn) {
    this.values = []
    this.fn = fn
  }

  addValue(cell) {
    this.values = [
      ...this.values,
      this.fn(cell)
    ]
  }
}
