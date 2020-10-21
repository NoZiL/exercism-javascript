export class Change {
  calculate(available_cuts, change_needed) {
    if (change_needed == 0) return [];
    const fiting_cuts = available_cuts.filter((e) => e <= change_needed);
    const cut = fiting_cuts.reverse()[0];
    return [...this.calculate(available_cuts, change_needed - cut), cut];
  }
}
