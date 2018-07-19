const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

describe('test random email.', () => {
  it('matches if email format is correct', () => {
    const expected = [
      expect.stringMatching(/^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
    ];
    const randomName = fd.email({type: 'name', count: 10});

    expect(randomName.length).toBe(10);
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('matches if input suffix is equal to output email suffix', () => {
    const inputSuffix = '@gmail.com';
    const randomEmail = fd.email({suffix: inputSuffix, type: 'name'});
    const outputSuffix = `@${randomEmail[0].split('@')[1]}`;

    expect(inputSuffix).toBe(outputSuffix);
  });
});
