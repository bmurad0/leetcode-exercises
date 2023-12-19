/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (let fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
};

const fn1 = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
console.log(fn1(1)); // 1000

const fn2 = compose([]);
console.log(fn2(42)); //42 there are no fncs in the arr, the composed fn is the identity fn => it returns the input value (x).

//reduceRight?

// return function(x) {
//     if(functions.length == 0){
//       return x;
//     }else{
//       for(let i=functions.length; i--; i>0){
//         x=functions[i](x)
//       }
//       return x
//     }
// }
