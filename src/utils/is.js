const __opt__ = Object.prototype.toString;

export function isObject(obj) {
  return __opt__.call(obj) === '[object Object]';
};

export function isArray(obj) {
  return __opt__.call(obj) === '[object Array]';
};

export function isNumber(obj) {
  // NaN !== NaN
  return (__opt__.call(obj) === '[object Number]') && obj === obj;
};
