function hourglassSum(arr) {
  let sumArr = [];
  hrSum = 0;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      let hrSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      sumArr.push(hrSum);
    }
  }
  let compNum = (a, b) => a - b;
  let highNum = sumArr.sort(compNum);
  console.log(highNum, highNum[sumArr.length - 1]);
  return highNum[sumArr.length - 1];
}
hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]);
