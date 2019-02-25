// Hackerrank New Year Chaos Problem
// https://www.hackerrank.com/challenges/new-year-chaos/problem?

// Works!
function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length; i-- > 0; ) {
    if (q[i] - (i + 1) > 2) {
      bribes = "Too chaotic";
      break;
    }
    for (let j = Math.max(q[i]) - 2; j < i; j++) {
      if (q[j] > q[i]) {
        bribes++;
      }
    }
  }
  console.log(bribes);
}
let test = [5, 1, 2, 3, 7, 8, 6, 4];

let test2 = [1, 2, 5, 3, 7, 8, 6, 4];

minimumBribes(test);
minimumBribes(test2);

// reduce function
// const bribeCount = q.reduce((bribes, num, i) => {
//     let isChaotic = false;
//     if (num > i + 3) { isChaotic = true }
//     else if (num >= i + 1) { bribes = bribes + (num - (i + 1)) };
//     if (!isChaotic) { return bribes } else { return "Too chaotic" };
// }, 0);
// console.log(bribeCount);
