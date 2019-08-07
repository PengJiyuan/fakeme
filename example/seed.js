const RandomData = require('../lib/fakeme.cjs');

const seed = 'Random Seed'

const fm1 = new RandomData({
  seed: seed
});

console.log(fm1.random(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));

const fm2 = new RandomData({
  seed: seed
});

console.log(fm2.random(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));

fm2.seed(seed);
console.log(fm2.random(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));

