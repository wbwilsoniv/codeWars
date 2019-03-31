// HackerRank 10 Days of JS
// Factorial Function
// https://www.hackerrank.com/challenges/js10-function/problem

function factorial(n) {
  if (n > 1) {
    return n * factorial(n - 1);
  }
  return 1;
}
