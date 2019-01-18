// https://www.hackerrank.com/challenges/repeated-string/problem
// Function that counts the a's in a repeated string[s] of n-length

function repeatedString(s, n) {
  let aCount = 0;
  let reps = Math.floor(n / s.length);
  for (let i = 0; i < s.length; i++) {
    s.charAt(i) === "a" ? aCount++ : null;
  }
  if (n % s.length === 0) {
    aCount = aCount * reps;
  } else {
    aCount = aCount * reps;
    let remain = n % s.length;
    for (let i = 0; i < remain; i++) {
      s.charAt(i) === "a" ? aCount++ : null;
    }
  }
  return aCount;
}

repeatedString("aba", 10);
