/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let currentValue = n;
  return function () {
    let result = currentValue;
    currentValue += 1;
    return result;
  };
};

var counter1 = createCounter(1);
console.log(counter1()); //1
console.log(counter1()); //2

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
