const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData();

console.log(rd.id({
  length: 18,
  count: 2
}));
