// Bubble Sort Algorithim
// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?

function countSwaps(a) {
  let swaps = 0;
  let lastEl = a.length - 1;
  const arr = a;
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastEl; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swaps++;
        isSorted = false;
      }
    }
    lastEl--;
    console.log(swaps);
  }
  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
