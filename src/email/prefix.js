import names from '../name/en';
import { random, randomLetter, randomNumber } from '../utils/random';

const getPrefix = function(opts) {
  let prefix;
  if (opts.type === 'name') {
    const list = names.lastName.names
      .concat(names.firstName.male.names)
      .concat(names.firstName.female.names);
    const count = names.lastName.count
      + names.firstName.male.count
      + names.firstName.female.count;
    prefix = list[random(0, count - 1)];
  }
  if (opts.type === 'number') {
    prefix = randomNumber(1)[0];
  }
  if (opts.type === 'letter') {
    prefix = randomLetter();
  }
  return prefix.toLowerCase();
};

export default getPrefix;
