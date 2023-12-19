/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

//example:

let numbers = [1, 2, 3, 4, 5, 6];

let isEven = function (x) {
  return x % 2 === 0;
};

let evenNumbers = filter(numbers, isEven);

console.log(evenNumbers); // [2, 4, 6]
