const namesEn = require('../lib/name/en');
const namesZh = require('../lib/name/zh');

const output = {
  en: {
    firstName: {
      male: namesEn.firstName.male.names.length,
      female: namesEn.firstName.female.names.length
    },
    lastName: namesEn.lastName.length
  },
  zh: {
    firstName: {
      male: namesZh.firstName.male.names.length,
      female: namesZh.firstName.female.names.length
    },
    lastName: namesZh.lastName.length
  }
};

module.exports = output;
