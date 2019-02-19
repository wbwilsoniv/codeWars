// Luck Balance Challenge
// https://www.hackerrank.com/challenges/luck-balance/problem?

// Works!
function luckBalance(k, contests) {
  let luckCount = 0;
  let potentialLuck = [];
  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      luckCount += contests[i][0];
    } else if (contests[i][1] === 1) {
      potentialLuck.push(contests[i][0]);
    }
  }
  potentialLuck.sort((a, b) => a - b);
  let luckToAdd = potentialLuck.length - k;
  for (let j = 0; j < potentialLuck.length; j++) {
    if (j < luckToAdd) {
      luckCount -= potentialLuck[j];
    } else {
      luckCount += potentialLuck[j];
    }
  }
  return luckCount;
}
