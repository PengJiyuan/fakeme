const RandomData = require('../lib/fakeme.cjs');

const fm = new RandomData();

console.log(fm.random(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));
