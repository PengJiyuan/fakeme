import getPrefix from './prefix';
import getSuffix from './suffix';

const getEmail = (opts) => {
  let emails = [];
  for (let i = 0; i < opts.count; i++) {
    emails.push(getPrefix(opts) + getSuffix(opts));
  }
  return emails;
};

export default getEmail;