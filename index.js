// Hint 1
// In Javascript, you can execute code after some delay with the setTimeout(fn, sleepTime) function.
// Hint 2
// An async function is defined as function which returns a Promise.
// Hint 3
// To create a Promise, you can code new Promise((resolve, reject) => {}). When you want the function to return a value, code resolve(value) inside the callback.

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
}
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // Output: 100
