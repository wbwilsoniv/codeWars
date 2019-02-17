// Making Anagrams Challenge
// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?
// given two strings (a,b) find the number of char deleted to create anagrams

// Works!
function makeAnagram(a, b) {
  let letterFreq = {};
  a.split("").forEach(el => (letterFreq[el] = (letterFreq[el] || 0) + 1));
  b.split("").forEach(el => (letterFreq[el] = (letterFreq[el] || 0) - 1));
  return Object.keys(letterFreq).reduce(
    (sum, key) => sum + Math.abs(letterFreq[key]),
    0
  );
}
