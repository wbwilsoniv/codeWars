// Hackerrank Minimum Swaps 2
// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?

// Pass 4/12 Tests
function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      swaps++;
    }
  }
  return swaps - 1;
}
