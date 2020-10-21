import names from '../name/en';

const getPrefix = function(opts, random) {
  let prefix;
  if (opts.type === 'name') {
    const list = names.lastName
      .concat(names.firstName.male)
      .concat(names.firstName.female);
    prefix = list[random.random(0, list.length - 1)];
  }
  if (opts.type === 'number') {
    prefix = random.randomNumber(1)[0];
  }
  if (opts.type === 'letter') {
    prefix = random.randomLetter();
  }
  return prefix.toLowerCase();
};

export default getPrefix;
