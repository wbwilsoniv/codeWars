// Compare two strings to see if substrings are found in both
// https://www.hackerrank.com/challenges/two-strings/problem?

// working solution 25/25

function twoStrings(s1, s2) {
  let strArr = s1.split("");
  let match = false;
  for (let i = 0; i < strArr.length - 1; i++) {
    if (s2.includes(strArr[i])) {
      match = true;
    }
  }
  return match ? "YES" : "NO";
}
