// HackerRank Day 3: Try, Catch, and Finally
// Function that reverses and prints a string with a try/catch block
// https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem?

function reverseString(s) {
  try {
    let sArr = s.split("");
    let reversedArr = sArr.reverse();
    let reversedStr = reversedArr.join("");
    console.log(reversedStr);
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

console.log(reverseString("abcd"));
