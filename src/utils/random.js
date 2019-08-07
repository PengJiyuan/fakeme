var gen = require('random-seed')

export default class Random {
  constructor(seed) {
    this.rand = gen();
    if(seed) {
      this.rand.seed(seed);
    }
  }

  // include max
  random(min, max) {
    return Math.floor(this.rand.random() * (max - min + 1)) + min;
  }

  seed(seed) {
    this.rand.seed(seed);
  }

  randomNumber(length)  {
    try {
      // browser
      return crypto.getRandomValues(new Uint32Array(length))
    } catch (e) {
      const list = [];
      for (let i = 0; i < length; i++) {
        list.push(this.rand.random().toString().substring(3, 13));
      }
      return list;
    }
  };

  randomLetter(length = 10) {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    let letters = '';
    for (let i = 0; i < length; i++) {
      letters += str[this.random(0, 25)];
    }
    return letters;
  };

  randomId(length = 10) {
    const str = '~_0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += str[this.random(0, 63)];
    }
    return id;
  };

}