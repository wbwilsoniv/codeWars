const Memoizer = (function(){ 
    let cache = {};
    function cacher(func){
      return function(){
        let key = JSON.stringify(arguments);
        if(cache[key]) {
          return cache[key];
        } else {
          val = func.apply(this, arguments);
          cache[key] = val;
          return vale;
        }
      }
    }
    return {
      memo: function(func){
        return cacher(func);
      }
    }
  })()
  
  let fibonacci = Memoizer.memo(function(n) {
      if(n < 2) {
          return n;
      } else {
      return fibonacci(n-1) + fibonacci(n-2);
      }
  });