// 10 days of JS
// Loops
// Function that prints all vowels in string, then all consonants
// https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
  let consArr = [];
  let i = 0;
  while (i < s.length) {
    if (
      s.charAt(i) === "a" ||
      s.charAt(i) === "e" ||
      s.charAt(i) === "i" ||
      s.charAt(i) === "o" ||
      s.charAt(i) === "u"
    ) {
      console.log(s.charAt(i));
      i++;
    } else {
      consArr.push(s.charAt(i));
      i++;
    }
  }
  let consVals = consArr.values();
  for (const value of consVals) {
    console.log(value);
  }
}

// Refactored:

function vowelsAndConsonants(s) {
  let consArr = [];
  let i = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  while (i < s.length) {
    if (vowels.includes(s.charAt(i))) {
      console.log(s.charAt(i));
      i++;
    } else {
      consArr.push(s.charAt(i));
      i++;
    }
  }
  let consVals = consArr.values();
  for (const value of consVals) {
    console.log(value);
  }
}
