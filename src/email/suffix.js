import { random } from '../utils/random';
import suffix from './suffixData';

const getSuffix = (opts) => {
  if (opts.suffix) {
    return opts.suffix;
  } else {
    return suffix.list[random(0, suffix.count - 1)];
  }
};

export default getSuffix;
