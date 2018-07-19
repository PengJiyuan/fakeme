const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

describe('test function Fake.random.', () => {
  it('matches if sex is Chinese language.', () => {
    const expected = [
      expect.stringMatching(/^[a-zA-Z]+$/)
    ];
    const randomName = fd.random(['Javascript', 'Css', 'Html', 'React', 'Vue'], 10);

    expect(randomName.length).toBe(10);
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
