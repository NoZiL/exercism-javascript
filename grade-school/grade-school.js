export class GradeSchool {
  constructor() {
    this.data = {}
  }
  roster() {
    return Object.entries(this.data).reduce(
      (accumulator, [grade, names]) => ({
        ...accumulator,
        [grade]: [...names]
      }),
      {}
    )
  }
  add(name, grade) {
    this.data = {
      ...this.data,
      [grade]: ((this.data[grade] || []).concat(name)).sort()
    }
  }
  grade(grade) {
    return [...(this.data[grade] || [])]
  }
}
