const fakeData = require('../lib/fakeme.cjs');
const fd = new fakeData();

describe('test random sex.', () => {
  it('matches if sex is Chinese language.', () => {
    const expected = [
      expect.stringMatching(/^[\u4E00-\u9FFF]{1}$/)
    ];
    const randomSex = fd.sex({lang: 'zh'});
    expect(randomSex).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('matches if sex is English language.', () => {
    const expected = [
      expect.stringMatching(/^[a-zA-Z]+$/)
    ];
    const randomSex = fd.sex({lang: 'en'});
    expect(randomSex).toEqual(
      expect.arrayContaining(expected)
    );
  });

  it('matches if options is null but ok', () => {
    const randomSex = fd.sex();
    expect(randomSex.length).toBe(1);
  });
});
