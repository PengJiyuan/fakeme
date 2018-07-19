import getPrefix from './prefix';
import getSuffix from './suffix';

const getEmail = (opts) => {
  return getPrefix(opts) + getSuffix(opts);
};

export default getEmail;