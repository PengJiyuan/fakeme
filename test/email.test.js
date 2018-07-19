const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

describe('test random email.', () => {
  it('matches if email format is correct', () => {
    const expected = [
      expect.stringMatching(/^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
    ];
    const randomName = fd.email({lang: 'zh', sex: 'male', type: 'name', count: 10});

    expect(randomName.length).toBe(10);
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
