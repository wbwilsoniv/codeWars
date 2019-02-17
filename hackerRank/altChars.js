// Alternating Characters challenge
// https://www.hackerrank.com/challenges/alternating-characters/problem?

// Works!
function alternatingCharacters(s) {
  const sArr = s.split("");
  let deleteCount = 0;
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i] === sArr[i + 1]) {
      deleteCount++;
    }
  }
  return deleteCount;
}
