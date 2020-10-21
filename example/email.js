const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData();

console.log(rd.email({ suffix: '@qq.com' }));
