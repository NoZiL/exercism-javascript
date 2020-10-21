const A_CHAR_CODE = "a".charCodeAt();
const Z_CHAR_CODE = "z".charCodeAt();
const ALPHABET_LENGTH = Z_CHAR_CODE - A_CHAR_CODE + 1;

const wrapAlphabetShift = (shiftedCharCode) =>
  A_CHAR_CODE +
  ((shiftedCharCode - A_CHAR_CODE + ALPHABET_LENGTH) % ALPHABET_LENGTH);

export class Cipher {
  constructor(key = "aaaaaaaaaa") {
    this._key = key;
  }

  _shift(string, direction) {
    const { _key } = this;
    return String.fromCharCode(
      ...Array.from(string).map((e, i) => {
        const charCode = e.charCodeAt();
        const shift =
          (_key.charCodeAt(i % _key.length) - A_CHAR_CODE) * direction;
        return wrapAlphabetShift(charCode + shift);
      })
    );
  }

  encode(string) {
    return this._shift(string, 1);
  }

  decode(string) {
    return this._shift(string, -1);
  }

  get key() {
    return this._key;
  }
}
