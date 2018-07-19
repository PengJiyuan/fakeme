const RandomData = require('../lib/fakedata.cjs');

const rd = new RandomData();

console.log(rd.sex({lang: 'zh', count: 10}));
