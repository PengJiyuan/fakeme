const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData();

console.log(rd.sex({ lang: 'zh', count: 10 }));
