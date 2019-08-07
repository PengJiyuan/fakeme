import { random } from '../utils/random';

const sexs = {
  zh: ['男', '女'],
  'zh-haht': ['男', '女'],
  en: ['male', 'female']
};

export default (opts) => {
  return sexs[opts.lang][random(0, 1)];
};
