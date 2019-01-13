// Write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
// For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
// Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

function pickPeaks(arr) {
  let pos = [];
  let peaks = [];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      pos.push(i);
      peaks.push(arr[i]);
    } else if (arr[i] > arr[i - 1] && arr[i] === arr[i + 1]) {
      let temp = [];
      temp.push(i);
      temp.push(arr[i]);
      for (let j = i + 1; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          pos.push(temp[0]);
          peaks.push(temp[1]);
          break;
        } else if (arr[j] < arr[j + 1]) {
          break;
        }
      }
    }
  }
  return { pos, peaks };
}
