const nucleotides = new Map([
  ["C", "G"],
  ["G", "C"],
  ["T", "A"],
  ["A", "U"],
]);

const singleNucleotideToRna = (nucleotide) => nucleotides.get(nucleotide);

export const toRna = (dna) => dna.replace(/./g, singleNucleotideToRna);
