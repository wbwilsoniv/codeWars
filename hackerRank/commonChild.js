// Hackerrank CommonChild problem: find the longest common substring
// https://www.hackerrank.com/challenges/common-child/problem?

function commonChild(s1, s2) {
  let result = [];
  // function to create LCS matrix with lengths of substrings
  function lcsMatrix(str1, str2, result) {
    for (let i = -1; i < str1.length; i++) {
      result[i] = [];
      for (let j = -1; j < str2.length; j++) {
        if (i === -1 || j === -1) {
          result[i][j] = 0;
        } else if (str1[i] === str2[j]) {
          result[i][j] = result[i - 1][j - 1] + 1;
        } else {
          result[i][j] = Math.max(result[i - 1][j], result[i][j - 1]);
        }
      }
    }
    return result;
  }
  lcsMatrix(s1, s2, result);

  // find the max value of a 2-D array
  function findMax(arr) {
    return Math.max(...arr.map(e => (Array.isArray(e) ? findMax(e) : e)));
  }
  return findMax(result);
}
