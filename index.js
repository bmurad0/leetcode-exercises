// Hint 1
// You can return a copy of a function with: function outerFunction(fn) { return function innerFunction(...params) { return fn(...params); }; }
// Hint 2
// Inside the inner function, you will need to return a new Promise.
// Hint 3
// You can create a new promise like: new Promise((resolve, reject) => {}).
// Hint 4
// You can execute code with a delay with "setTimeout(fn, delay)"
// Hint 5
// To reject a promise after a delay, "setTimeout(() => reject('err'), delay)"
// Hint 6
// You can resolve and reject when the passed promise resolves or rejects with: "fn(...params).then(resolve).catch(reject)"
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return function (...args) {
    const originalPromise = fn(...args);

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([originalPromise, timeoutPromise]);
  };
};

// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log); // Output: "Time Limit Exceeded" at t=100ms
