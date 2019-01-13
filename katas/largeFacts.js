function factorial(n){
    let factV = n;
    if(n === 1 || n === 0) {
      return '1';
    } else {
    for (i = n -1; i>= 1; i--) {
      factV = factV * i;
    }
    return Number(factV).toString();
    }
  }

function factorial(n) {
    let fact = 1;
    for(i = 2; i <= n; i++) {
        if(Number.isSafeInteger(fact*1)) {
            fact = fact * i;
        } else {
            let factxi = "0";
            for(let j = 0; j < i; j++) {
                factxi = add(factxi, fact.toString());
            }
            fact = factxi;
        }
    }
    return fact;
}
// currently times out
function factorial(n) {
    n === 0 ? '1' : '';
    let i, nextNum, carret;
    result = n.toString().split('').reverse().map(Number);
    while(--n) {
        i = carret = 0;
        while((nextNum = result[i++]) !== undefined || carret) {
            carret = (nextNum || 0) * n + carret;
            result[i-1] = carret % 10;
            carret = parseInt(carret/10)
        }
    }
    return result.reverse().join('');
}

function factorial(n) {
    function memoize(func, max) {
        max = max || 5000;
        return (function() {
            var cache = {};
            var remaining = max;
            function fn(n) {
                return (cache[n] || (remaining-- >0 ? (cache[n]=func(n)) : func(n)));
            }
            return fn;
        }());
    }
    
    function fact(n) {
        return n<2 ? 1: n*fact(n-1);
    }
    
    // construct memoized version
    var memfact = memoize(fact,170);

}

