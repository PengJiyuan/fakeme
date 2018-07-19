const RandomData = require('../lib/fakedata.cjs');

const rd = new RandomData();

console.log(rd.id({
  length: 19,
  count: 10
}));
