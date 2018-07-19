const RandomData = require('../lib/fakeme.cjs');

const rd = new RandomData();

console.log(rd.id({
  length: 19,
  count: 10
}));
