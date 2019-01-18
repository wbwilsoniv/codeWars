// https://www.hackerrank.com/challenges/counting-valleys/problem
// Write a function that takes a string describe Gary's hike and counts the valleys

function countingValleys(n, s) {
  let alt = 0;
  let valleys = 0;
  for (let i = 0; i < n; i++) {
    s.charAt(i) === "D" ? alt-- : alt++;
    if (alt === 0 && s.charAt(i) === "U") {
      valleys++;
    }
  }
  return valleys;
}
