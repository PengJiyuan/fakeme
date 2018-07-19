const RandomData = require('../lib/fakedata.cjs');

const rd = new RandomData({
  lang: 'zh'
});

console.log(rd.name({
  sex: 'female',
  lang: 'en',
  count: 10
}));
