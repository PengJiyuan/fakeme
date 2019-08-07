import getPrefix from './prefix';
import getSuffix from './suffix';

const getEmail = (opts, random) => {
  let emails = [];
  for (let i = 0; i < opts.count; i++) {
    emails.push(getPrefix(opts, random) + getSuffix(opts, random));
  }
  return emails;
};

export default getEmail;