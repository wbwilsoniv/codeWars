// HackerRank 10 Days of JS
// Write a function that throws errors for numbers >= 0
// https://www.hackerrank.com/challenges/js10-throw/problem?

function isPositive(a) {
  if (a < 0) {
    throw new Error("Negative Error");
  } else if (a === 0) {
    throw new Error("Zero Error");
  } else {
    return "YES";
  }
}
