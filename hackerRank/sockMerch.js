// Given an array of colors (ar) and the number of socks (n), write a function that returns the amount of pairs.
// colors are represented by numbers

function sockMerchant(n, ar) {
  let sortedSocks = ar.sort();
  let pairs = 0;
  for (let i = 0; i < n - 1; i++) {
    if (sortedSocks[i] === sortedSocks[i + 1]) {
      pairs++;
      i++;
    }
  }
  return pairs;
}
