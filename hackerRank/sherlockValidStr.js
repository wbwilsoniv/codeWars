// Sherlock and the Valid String
// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?

// works!
function isValid(s) {
  let sArr = s.split("").sort();
  let freq = {};
  let isValid = true;
  function counter(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
      let char = arr[i];
      freq[char] === undefined
        ? (freq[char] = 1)
        : (freq[char] = freq[char] + 1);
    }
    console.log(freq);
    return freq;
  }
  counter(sArr);

  function objCheck(obj) {
    let freqCount = Object.values(obj).sort();
    console.log(freqCount);
    let len = freqCount.length;
    if (
      freqCount[0] === freqCount[len - 2] &&
      freqCount[len - 2] === freqCount[len - 1] - 1
    ) {
      isValid = true;
    } else if (freqCount[0] === freqCount[len - 1]) {
      isValid = true;
    } else if (freqCount[0] === 1 && freqCount[1] === freqCount[len - 1]) {
      isValid = true;
    } else {
      isValid = false;
    }
    return isValid;
  }
  objCheck(freq);

  return isValid ? "YES" : "NO";
}
