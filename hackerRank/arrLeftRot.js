// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
// given an array (a) and integer (d), return a new array rotated d times

function rotLeft(a, d) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let currentPos = (i + d) % a.length;
    newArr.push(a[currentPos]);
  }
  return newArr;
}
