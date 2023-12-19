/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    //store results in the same order as functions
    const results = new Array(functions.length);
    //track the number of completed promises
    let count = 0;

    //go through each function in the array
    functions.forEach((fn, i) => {
      fn()
        .then((val) => {
          results[i] = val;
          count++;
          if (count === functions.length) resolve(results);
        })
        .catch((reason) => reject(reason));
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
