const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

describe('test random id.', () => {
  it('matches if id format is correct', () => {
    const expected = [
      expect.stringMatching(/^[a-zA-Z0-9_~]{10}$/)
    ];
    const randomName = fd.id({length: 10, count: 10});
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
