const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData({
  lang: 'zh',
  sex: 'female'
});

console.log(rd.name({
  count: 10
}));
console.log(rd.name({lang: 'en', count: 5}));

console.log(rd.name({lastName: '李'}));

console.log(rd.name({lang: 'zh-hant', count: 3, lastName: '陳'}));

console.log(rd.name({object: true}));

