// Hint 1
// You can delay execution of code with "ref = setTimeout(fn, delay)". You can abort the execution with "clearTimeout(ref)"
// Hint 2
// When storing the values in the cache, also store a reference to the timeout. The timeout should clear the key from the cache after the expiration has elapsed.
// Hint 3
// When you set a key that already exists, clear the existing timeout.

var TimeLimitedCache = function () {
  // store
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  // check if the key already exists and isn't expired
  if (this.cache[key] && this.cache[key].timeout) {
    // Kclear the existing timeout
    clearTimeout(this.cache[key].timeout);
    // update value and duration
    this.cache[key].value = value;
    this.cache[key].expirationTime = Date.now() + duration;
    // set a new timeout for expiration
    this.cache[key].timeout = setTimeout(() => {
      delete this.cache[key];
    }, duration);
    return true; // unexpired key already exisst
  } else {
    // key doesn't exist or is expired => create a new entry
    this.cache[key] = {
      value,
      expirationTime: Date.now() + duration,
      timeout: setTimeout(() => {
        delete this.cache[key];
      }, duration),
    };
    return false;
  }
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  const entry = this.cache[key];
  if (entry && entry.expirationTime > Date.now()) {
    // if key exists and is not expired
    return entry.value;
  } else {
    // if key doesn't exist or is expired
    return -1;
  }
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  // coount non-expired keys
  return Object.values(this.cache).filter(
    (entry) => entry.expirationTime > Date.now()
  ).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
