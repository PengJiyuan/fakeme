import { isObject } from './utils/is';

class Fake {
  constructor(opts) {
    const defaultOpts = {
      lang: 'zh-CN'
    };
    if (!isObject(opts)) {
      throw 'param option should be an object.';
    }
    this.opts = Object.assign({}, defaultOpts, opts);
  }

  name(opts) {
    
  }
}