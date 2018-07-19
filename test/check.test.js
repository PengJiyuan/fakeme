// check error throw

const fakeData = require('../lib/fakeme.cjs');
const commonFd = new fakeData();

describe('test error throw.', () => {
  it('matches if error message is equal to throw error message.', () => {
    const errorMsgOptions = 'param option should be an object';
    const errorMsgLang = 'lang should be one of zh,en';
    const errorMsgSex = 'sex should be one of male,female';
    const errorMsgType = 'type should be one of number,letter,name';
    const errorMsgCount = 'count must be a number type';
    const errorMsgLength = 'length must be a number type';

    const occurOptionsError = () => {
      const fd = fakeData('Im a string but expect an object!');
    };
    const occurLangError = () => {
      commonFd.name({
        lang: 'error language'
      });
    };
    const occurSexError = () => {
      commonFd.name({
        sex: 'error sex'
      });
    };
    const occurTypeError = () => {
      commonFd.email({
        type: 'error type'
      });
    };
    const occurCountError = () => {
      commonFd.id({
        count: '10'
      });
    };
    const occurLengthError = () => {
      commonFd.id({
        length: '10'
      });
    };

    expect(occurOptionsError).toThrowError(errorMsgOptions);
    expect(occurLangError).toThrowError(errorMsgLang);
    expect(occurSexError).toThrowError(errorMsgSex);
    expect(occurTypeError).toThrowError(errorMsgType);
    expect(occurCountError).toThrowError(errorMsgCount);
    expect(occurLengthError).toThrowError(errorMsgLength);
  });
});
