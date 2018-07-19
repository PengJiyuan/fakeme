const fakeData = require('../lib/fakeme.cjs');
const fd = new fakeData();

describe('test random email.', () => {
  it('matches if email format is correct', () => {
    const expected = [
      expect.stringMatching(/^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
    ];
    const randomEmailName = fd.email({type: 'name', count: 10});
    const randomEmailNumber = fd.email({type: 'number', count: 10});
    const randomEmailLetter = fd.email({type: 'letter', count: 10});

    expect(randomEmailName.length).toBe(10);
    expect(randomEmailNumber.length).toBe(10);
    expect(randomEmailLetter.length).toBe(10);
    expect(randomEmailName).toEqual(
      expect.arrayContaining(expected)
    );
    expect(randomEmailNumber).toEqual(
      expect.arrayContaining(expected)
    );
    expect(randomEmailLetter).toEqual(
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
