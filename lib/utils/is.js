const __opt__ = Object.prototype.toString.call;
export default {
  isArray(obj) {
    return __opt__(obj) === '[object Array]';
  },
  isObject(obj) {
    return __opt__(obj) === '[object Object]';
  }
};
