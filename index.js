/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentValue = init;
  return {
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};

var counter = createCounter(0);

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2

console.log(counter.decrement()); // 1

console.log(counter.reset()); // 0
console.log(counter.reset()); // 0
