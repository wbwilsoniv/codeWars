//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem;
// Function takes an array of 0's & 1's and returns the least amount of jumps.

function jumpingOnClouds(c) {
  let jumps = 0;
  let currentPos = 0;
  let clouds = c.length - 1;
  while (currentPos < clouds) {
    if (c[currentPos] === 0 && c[currentPos + 2] === 0) {
      currentPos = currentPos + 2;
      jumps++;
    } else {
      currentPos++;
      jumps++;
    }
  }
  return jumps;
}
