const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

describe('test random sex.', () => {
  it('matches if sex is Chinese language.', () => {
    const expected = [
      expect.stringMatching(/^[\u4E00-\u9FFF]{1}$/)
    ];
    const randomName = fd.sex({lang: 'zh'});
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('matches if sex is English language.', () => {
    const expected = [
      expect.stringMatching(/^[a-zA-Z]+$/)
    ];
    const randomName = fd.sex({lang: 'en'});
    expect(randomName).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
