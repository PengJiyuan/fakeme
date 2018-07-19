const RandomData = require('../lib/random-data.cjs');

const rd = new RandomData();

console.log(rd.random(['a', 'b', 'c', 'd'], 10));
