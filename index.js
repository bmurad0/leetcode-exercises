/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (typeof obj === "object" && obj !== null) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else {
      return Object.keys(obj).length === 0;
    }
  }
  return true;
};
