/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) {
    return arr;
  }

  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (n > 0 && Array.isArray(arr[i])) {
      flattenedArray.push(...flat(arr[i], n - 1));
    } else {
      flattenedArray.push(arr[i]);
    }
  }

  return flattenedArray;
};

// const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// console.log(flat(arr1, 0));

// const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// console.log(flat(arr2, 1));

// const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// console.log(flat(arr3, 2));
