const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData();

console.log(rd.random(['a', 'b', 'c', 'd'], 10));
