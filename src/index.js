import namesEn from './name/en';
import namesZh from './name/zh';
import namesZhHant from './name/zh-hant';
import emailSuffix from './email/suffixData';
import Random from './utils/random';
import check from './utils/check';
import getEmail from './email/index';
import getSex from './sex/index';
import { isArray } from './utils/is';

class Fake {
  constructor(opts) {
    check(opts);
    const defaultOpts = {
      lang: 'zh',
      sex: 'male'
    };
    this.opts = Object.assign({}, defaultOpts, opts || {});
    this.namesEn = namesEn;
    this.namesZh = namesZh;
    this.nameZhHant = namesZhHant;
    this.emailSuffix = emailSuffix;
    this.rand = new Random(this.opts.seed)
  }

  /**
   * 
   * @param {Object} opts
   * 
   * @opts.lang
   * @opts.sex
   * @opts.lastName
   * @opts.count
   */
  name(opts) {
    check(opts);
    const _defaults = {
      lang: this.opts.lang,
      sex: this.opts.sex,
      count: 1
    };
    const _opts = Object.assign({}, _defaults, opts || {});
    const names = {
      'zh-hant': namesZhHant,
      zh: namesZh,
      en: namesEn
    };
    const firstNames = names[_opts.lang].firstName[_opts.sex];
    const lastNames = names[_opts.lang].lastName;
    let allNames = [];
    for (let i = 0; i < _opts.count; i++) {
      const firstName = firstNames.names[this.rand.random(0, firstNames.count - 1)];
      let lastName = lastNames.names[this.rand.random(0, lastNames.count - 1)];
      let name;
      if (_opts.lastName && ~lastNames.names.indexOf(_opts.lastName)) {
        lastName = _opts.lastName;
      }
      name = _opts.lang === 'en' ? `${firstName} ${lastName}` : `${lastName}${firstName}`;
      allNames.push(name);
    }
    return allNames;
  }

  /**
   * 
   * @param {Object} opts
   * 
   * @opts.sex
   * @opts.type - ['number', 'letter', 'name'] default: 'name'
   * @opts.suffix - specify custom suffix
   * @opts.count
   */
  email(opts) {
    check(opts);
    const _defaults = {
      sex: this.opts.sex,
      type: 'name',
      count: 1
    };
    const _opts = Object.assign({}, _defaults, opts || {});
    return getEmail(_opts, this.rand);
  }

  /**
   * 
   * @param {Object} opts
   * 
   * @opts.length
   * @opts.count
   */
  id(opts) {
    check(opts);
    const _defaults = {
      length: 10,
      count: 1
    };
    const _opts = Object.assign({}, _defaults, opts || {});
    let ids = [];
    for (let i = 0; i < _opts.count; i++) {
      ids.push(this.rand.randomId(_opts.length));
    }
    return ids;
  }

  sex(opts) {
    check(opts);
    const _defaults = {
      lang: this.opts.lang,
      count: 1
    };
    const _opts = Object.assign({}, _defaults, opts || {});
    let sexs = [];
    for (let i = 0; i < _opts.count; i++) {
      sexs.push(getSex(_opts, this.rand))
    }
    return sexs;
  }

  random(list = [], count = 1) {
    const length = list.length;
    let result = [];
    if (isArray(list) && list.length > 0) {
      for (let i = 0; i < count; i++) {
        result.push(list[this.rand.random(0, length - 1)]);
      }
    }
    return result;
  }

  seed(seed) {
    this.rand.seed(seed);
  }
}

export default Fake;