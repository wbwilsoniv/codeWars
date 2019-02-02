function minimumBribes(q) {
  let bribes = 0;
  isChaotic = false;
  const bribeCounter = q.map((item, i) => {
    if (item > i + 3) {
      isChaotic = true;
      return isChaotic;
    } else if (item >= i + 1) {
      bribes = bribes + (item - (i + 1));
    } else if (item === i - 3) {
      bribes++;
    }
    return bribes;
  });
  if (!isChaotic) {
    console.log(bribes);
  } else {
    console.log("Too chaotic");
  }
}
let test = [5, 1, 2, 3, 7, 8, 6, 4];

let test2 = [1, 2, 5, 3, 7, 8, 6, 4];
//          [1, 2, 3, 4, 5, 6, 7, 8];
//          0, 0, 2, -1, 2, 2, -1, -4;
minimumBribes(test);
minimumBribes(test2);
// [1, 2, 5, 3, 4, 7, 8, 6];
// 6;

// reduce function
// const bribeCount = q.reduce((bribes, num, i) => {
//     let isChaotic = false;
//     if (num > i + 3) { isChaotic = true }
//     else if (num >= i + 1) { bribes = bribes + (num - (i + 1)) };
//     if (!isChaotic) { return bribes } else { return "Too chaotic" };
// }, 0);
// console.log(bribeCount);
