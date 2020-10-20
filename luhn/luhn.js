export class Luhn {
  constructor(string) {
    this.numbers =
      string
        .split("")
        .filter(e => e != ' ')
        .map(e => parseInt(e))
  }

  get valid() {
    if(this.numbers.length <= 1) return false
    if(this.numbers.some(e => isNaN(e))) return false
    const sum =
      [...this.numbers]
        .reverse().map((e, index) => index % 2 == 1 ? double(e) : e)
        .reduce((acc, e) => acc + e, 0)
    return sum % 10 == 0
  }
}

const double = e => e * 2 >= 10 ? e * 2 - 9 : e * 2
