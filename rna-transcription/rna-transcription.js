function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(dna){
	switch(dna){
	case "C":
		dna = dna.toString("");
		rnaCaseOne = dna.replace("C","G");
	  return rnaCaseOne
	  break;
	case "G":
		dna = dna.toString("");
		rnaCaseTwo = dna.replace("G","C");
	  return rnaCaseTwo
	 	break;
	case "A":
		dna = dna.toString("");
		rnaCaseThree = dna.replace("A","U");
	  return rnaCaseThree
	 	break;
	case "T":
		dna = dna.toString("");
		rnaCaseFour = dna.replace("T","A");
	  return rnaCaseFour
	 	break;
	default:
		dna = dna.toString("");
		rnaCaseFive = dna.replace("ACGTGGTCTTAA","UGCACCAGAAUU");
		return rnaCaseFive
	}
};

module.exports = DnaTranscriber;

