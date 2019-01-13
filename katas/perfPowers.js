// What's a Perfect Power anyway?
// write a function that determines if an integer is a perfect power.

var isPP = function(n) {
  let sqrtN = Math.round(Math.sqrt(n));
  for (let i = 2; i <= sqrtN; i++) {
    for (let j = 2; i ** j <= n; j++) {
      if (n === i ** j) {
        return [i, j];
      }
    }
  }
  return null;
};
console.log(Math.log(8));
