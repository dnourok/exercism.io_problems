function Hamming() {}

Hamming.prototype.compute = function(strandOne, strandTwo) {
 counter = 0 

 if (strandOne.length!=strandTwo.length){
 	throw new Error ('DNA strands must be of equal length.');
 }

  for (var i = 0; i < strandOne.length; i++) {
    if (strandOne[i] != strandTwo[i]) {
      counter = counter + 1;
    } 
  };
  return counter;
};

module.exports = Hamming;

