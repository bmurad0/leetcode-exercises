/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const returnedArray = [];

  for (let i = 0; i < arr.length; i++) {
    returnedArray.push(fn(arr[i], i));
  }

  return returnedArray;
};

// example:

let numbers = [1, 2, 3, 4];

let square = function (x) {
  return x * x;
};

let squaredNumbers = map(numbers, square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16]
