// test whether the length of data is equal to count.

const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

test('test random name (zh)', () => {
  const expected = [
    expect.stringMatching(/[\\u4E00-\\u9FFF]+/g),
  ];
  expect(fd.name({lang: 'zh'})).toEqual(
    expect.arrayContaining(expected),
  );
});
