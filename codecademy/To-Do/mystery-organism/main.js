// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  if (typeof num !== 'number' || num < 0) return 'Invalid number';
  if (arr.length !== 15) return 'Invalid array';
  
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const dnaToChange = Math.floor(Math.random() * this.dna.length); // Chose the base to mutate
      do {
        newDna = returnRandBase(); // Find a new DNA property
      } while (newDna !== this.dna[dnaToChange]) // Prevent reassignment of the same DNA property

      this.dna[dnaToChange] = newDna; // Reassign a random DNA base to a random base of the specimen
    },
  }
}