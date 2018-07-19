const RandomData = require('../lib/fakedata.cjs');

const rd = new RandomData();

console.log(rd.random(['a', 'b', 'c', 'd'], 10));
