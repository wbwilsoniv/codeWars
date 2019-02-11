// HackerRank problem
// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?

function checkMagazine(magazine, note) {
  let n = note.length;
  let noteCount = 0;
  let noteSort = note.filter((item, i, magazine) => {
    // if (magazine.includes(item)) {
    //     noteCount++;
    // }
  });
  let magSort = magazine.filter((item, i, note) => {});
  console.log(magSort);
  noteSort == note ? console.log("Yes") : console.log("No");
}
// working solution
function checkMagazine(magazine, note) {
  for (let i = 0; i < note.length; i++) {
    let findEl = magazine.indexOf(note[i]);
    if (findEl != -1) {
      magazine[findEl] = "";
      if (i === note.length - 1) {
        console.log("Yes");
      }
    } else {
      return console.log("No");
    }
  }
}
