const RandomData = require('../lib/random-data.cjs');

const rd = new RandomData({
  lang: 'zh',
  sex: 'male'
});

console.log(rd.email({
  type: 'name',
  suffix: '@isweety.me'
}));
