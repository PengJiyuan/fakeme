import suffix from './suffixList';

const getSuffix = (opts, random) => {
  if (opts.suffix) {
    return opts.suffix;
  } else {
    return suffix[random.random(0, suffix.length - 1)];
  }
};

export default getSuffix;
