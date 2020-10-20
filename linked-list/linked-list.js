export class LinkedList {
  constructor() {
    this.head = this.tail = undefined
  }

  _insertAfter(value, previous) {
    const next = previous ? previous.next : this.head
    const node = { value, previous, next }

    if(previous) previous.next = node
    else this.head = node

    if(next) next.previous = node
    else this.tail = node
  }

  _drop(node) {
    const previous = node.previous
    const next = node.next

    if(previous) previous.next = next
    else this.head = next

    if(next) next.previous = previous
    else this.tail = previous

    return node.value
  }

  push(value) {
    this._insertAfter(value, this.tail)
  }

  pop() {
    return this._drop(this.tail)
  }

  shift() {
    return this._drop(this.head)
  }

  unshift(value) {
    this._insertAfter(value)
  }

  count() {
    const traverse = 'next'
    const recursiveCount = (node) =>
      node ? recursiveCount(node[traverse]) + 1 : 0
    return recursiveCount(this.head)
  }

  delete(value) {
    const traverse = 'next'
    const recursiveDelete = (node) => {
      if(node) {
        if(node.value === value) this._drop(node)
        recursiveDelete(node[traverse])
      }
    }
    recursiveDelete(this.head, 'next', value)
  }
}
