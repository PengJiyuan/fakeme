// test whether the length of data is equal to count.

const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

describe('test random name.', () => {
  it('matches if random name is language zh-CN.', () => {
    const expected = [
      // match chinese output
      expect.stringMatching(/[\u4E00-\u9FFF]+/)
    ];
    const randomName = fd.name({lang: 'zh', count: 10});
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('matches if random name is language english.', () => {
    const expected = [
      // match english output
      expect.stringMatching(/^[a-zA-Z]+/)
    ];
    const randomName = fd.name({lang: 'en', count: 10});
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    ); 
  });
});
