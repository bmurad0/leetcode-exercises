// Hint 1
// You execute code with a delay with "ref = setTimeout(fn, delay)". You can abort the execution of that code with "clearTimeout(ref)"
// Hint 2
// Whenever you call the function, you should abort any existing scheduled code. Then, you should schedule code to be executed after some delay.

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// const log = debounce(console.log, 100);
// log("Hello"); // This call is scheduled but cancelled
// log("Hello"); // This call is scheduled but cancelled
// log("Hello"); // This call is scheduled and will be executed at t=100ms
