const fakeData = require('../lib/fakeme.cjs');
const fd = new fakeData();

describe('test random id.', () => {
  it('matches if id format is correct', () => {
    const expected = [
      expect.stringMatching(/^[a-zA-Z0-9_~]{10}$/)
    ];
    const randomId = fd.id({length: 10, count: 10});

    expect(randomId.length).toBe(10);
    expect(randomId).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
