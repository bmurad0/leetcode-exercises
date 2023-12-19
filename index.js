// Hint 1
// You can create copy of a function by spreading function parameters. function outerFunction(passedFunction) { return newFunction(...params) { return passedFunction(...params); }; }
// Hint 2
// params is an array. Since you know all values in the array are numbers, you can turn it into a string with JSON.stringify().
// Hint 3
// In the outerFunction, you can declare a Map or Object. In the inner function you can avoid executing the passed function if the params have already been passed before.

/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = fn(...args);

      cache.set(key, result);

      return result;
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 3)); // 5 -cached
console.log(callCount); // 1 fn was only called once
