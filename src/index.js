import namesEn from './name/en';
import namesZh from './name/zh';
import emailSuffix from './email/suffixData';
import {
  random,
  randomId
} from './utils/random';
import {
  checkGlobal,
  checkName,
  checkEmail
} from './utils/check';
import getEmail from './email/index';

class Fake {
  constructor(opts) {
    checkGlobal(opts);
    const defaultOpts = {
      lang: 'zh',
      sex: 'male'
    };
    this.opts = Object.assign({}, defaultOpts, opts || {});
    this.namesEn = namesEn;
    this.namesZh = namesZh;
    this.emailSuffix = emailSuffix;
  }

  /**
   * 
   * @param {Object} opts
   * 
   * @opts.lang
   * @opts.sex
   * @opts.lastName
   */
  name(opts) {
    checkName(opts);
    const _defaults = {
      lang: this.opts.lang,
      sex: this.opts.sex
    };
    const _opts = Object.assign({}, _defaults, opts || {});
    const names = {
      zh: namesZh,
      en: namesEn
    };
    const firstNames = names[_opts.lang].firstName[_opts.sex];
    const firstName = firstNames.names[random(0, firstNames.count - 1)];
    const lastNames = names[_opts.lang].lastName;
    let lastName = lastNames.names[random(0, lastNames.count - 1)];
    let name;
    if (_opts.lastName && ~lastNames.names.indexOf(_opts.lastName)) {
      lastName = _opts.lastName;
    }
    name = _opts.lang === 'en' ? `${firstName} ${lastName}` : `${lastName}${firstName}`;
    return name;
  }

  /**
   * 
   * @param {Object} opts
   * 
   * @opts.sex
   * @opts.type - ['number', 'letter', 'name'] default: 'name'
   * @opts.suffix - specify custom suffix
   */
  email(opts) {
    checkEmail(opts);
    const _defaults = {
      sex: this.opts.sex,
      type: 'name'
    };
    const _opts = Object.assign({}, _defaults, opts || {});
    return getEmail(_opts);
  }

  id(length = 10) {
    return randomId(length);
  }
}

export default Fake;