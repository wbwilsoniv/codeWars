// HackerRank 10 Days of JS
// Create RegExp object that tests for strings that start and end with the same vowel.
// https://www.hackerrank.com/challenges/js10-regexp-1/problem?

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = new RegExp(/^([aeiou]).*\1$/, "i");
  /*
   * Do not remove the return statement
   */
  return re;
}
