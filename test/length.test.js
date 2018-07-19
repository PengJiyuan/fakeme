// test whether the length of data is equal to count.

const fakeData = require('../lib/fakedata.cjs');
const fd = new fakeData();

test('test data count (names, email suffixs)', () => {
  const firstNameEnMale = fd.namesEn.firstName.male;
  const firstNameEnFemale = fd.namesEn.firstName.female;
  const firstNameZhMale = fd.namesZh.firstName.male;
  const firstNameZhFemale = fd.namesZh.firstName.female;
  const lastNameEn = fd.namesEn.lastName;
  const lastNameZh = fd.namesZh.lastName;
  const emailSuffix = fd.emailSuffix;

  expect(firstNameEnMale.names.length).toBe(firstNameEnMale.count);
  expect(firstNameEnFemale.names.length).toBe(firstNameEnFemale.count);
  expect(firstNameZhMale.names.length).toBe(firstNameZhMale.count);
  expect(firstNameZhFemale.names.length).toBe(firstNameZhFemale.count);
  expect(lastNameEn.names.length).toBe(lastNameEn.count);
  expect(lastNameZh.names.length).toBe(lastNameZh.count);
  expect(emailSuffix.list.length).toBe(emailSuffix.count);
});
