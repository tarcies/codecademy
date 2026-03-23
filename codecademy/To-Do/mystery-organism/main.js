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

function pAequorFactory(num, arr = mockUpStrand()) {
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
    compareDNA(compObj) {
      let count = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === compObj.dna[i]) count++; // Adds 1 for every common DNA base in the same location
      }

      console.log(`Specimen #${this.specimenNum} and #${compObj.specimenNum} have ` + Math.floor((count / this.dna.length) * 100) + '% DNA in common.');
    },
    willLikelySurvive() {
      cgCount = 0;

      for(const dnaBase of this.dna) {
        if (dnaBase === 'C' || dnaBase === 'G') cgCount++; // Adds 1 for every 'C' and 'G' DNA base found in the specimen's DNA strand
      }

      return (cgCount / this.dna.length) >= 0.6; // Returns true if 'C' and 'G' makes up at least 60% of the DNA strand's composition, returns false otherwise
    }
  }
}

const pAequors = [];

for (let i = 0; i < 30; i++) {
  pAequors.push(pAequorFactory(i));
}

console.log(pAequors[4].willLikelySurvive());
console.log(pAequors[5].willLikelySurvive());

pAequors[4].compareDNA(pAequors[5]);
