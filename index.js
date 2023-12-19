/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

var reduce = function (nums, fn, init) {
  let accumulator = init;
  for (const val of nums) {
    accumulator = fn(accumulator, val);
  }
  return accumulator;
};

//example

let numbers = [1, 2, 3, 4, 5];

let sum = function (accumulator, currentValue) {
  return accumulator + currentValue;
};

var totalSum = reduce(numbers, sum, 0);

console.log(totalSum); // 15
