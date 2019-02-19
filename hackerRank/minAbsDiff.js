// Find minimum absolute difference between an array of integers
// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?

// Works!

function minimumAbsoluteDifference(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let diffArr = [];
  console.log(sortedArr);
  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] < 0) {
      diffArr.push(Math.abs(sortedArr[i] - sortedArr[i + 1]));
    } else if (sortedArr[i] > 0) {
      diffArr.push(sortedArr[i + 1] - sortedArr[i]);
    } else {
      diffArr.push(sortedArr[i] + sortedArr[i + 1]);
    }
  }
  let sortedDiffArr = diffArr.sort((a, b) => a - b);
  console.log(sortedDiffArr);
  return sortedDiffArr[0];
}
