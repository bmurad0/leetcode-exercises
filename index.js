/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return new Promise(async (resolve, reject) => {
    let a = await promise1;
    let b = await promise2;
    resolve(a + b);
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
