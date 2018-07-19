const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData({
  lang: 'zh',
  sex: 'male'
});

console.log(rd.email({
  type: 'name',
  suffix: '@isweety.me',
  count: 10
}));
