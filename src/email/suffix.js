import suffix from './suffixData';

const getSuffix = (opts, random) => {
  if (opts.suffix) {
    return opts.suffix;
  } else {
    return suffix.list[random.random(0, suffix.count - 1)];
  }
};

export default getSuffix;
