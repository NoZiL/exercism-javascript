export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(list) {
    this.values = [...this.values, ...list.values];
    return this;
  }

  concat(list) {
    const concat_fn = (acc, el) => acc.append(el);
    const flattened_list = list.foldl(concat_fn, new List());
    return new List(this.values).append(flattened_list);
  }

  filter(fn) {
    const filter_fn = (acc, el) => acc.append(new List(fn(el) ? [el] : []));
    return this.foldl(filter_fn, new List());
  }

  length() {
    return this.foldl((acc) => acc + 1, 0);
  }

  map(fn) {
    const map_fn = (acc, el) => acc.append(new List([fn(el)]));
    return this.foldl(map_fn, new List());
  }

  foldl(fn, acc) {
    const [head, ...tail] = this.values;
    if (!head) return acc;
    const list_tail = new List(tail);
    return list_tail.foldl(fn, fn(acc, head));
  }

  foldr(fn, acc) {
    return this.reverse().foldl(fn, acc);
  }

  reverse() {
    const reverse_fn = (acc, el) => new List([el]).append(acc);
    return this.foldl(reverse_fn, new List());
  }
}
