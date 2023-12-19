/**
 * @param {*} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (compareValue) {
      if (val === compareValue) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (compareValue) {
      if (val !== compareValue) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

try {
  expect(5).toBe(5);
  expect(5).notToBe(5);
} catch (error) {
  console.error(error.message);
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
