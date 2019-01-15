// https://www.codewars.com/kata/546d15cebed2e10334000ed9/train/javascript
// Find the unknown digit in a string

function solveExpression(exp) {
  let result = exp.split("");
  for (let i = 0; i <= 9; i++) {
    result = exp
      .replace(/\?/g, i.toString())
      .replace(/\-\-/, "+")
      .split("=");
    if (
      parseInt(result[1]) === eval(result[0]) &&
      !exp.includes(i) &&
      !result[1].match(/^0{2}/)
    )
      return i;
  }
  return -1;
}
solveExpression("123*45?=5?088");
