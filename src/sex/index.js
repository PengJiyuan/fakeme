const sexs = {
  zh: ['男', '女'],
  'zh-haht': ['男', '女'],
  en: ['male', 'female']
};

export default (opts, random) => {
  return sexs[opts.lang][random.random(0, 1)];
};
