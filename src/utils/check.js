import { isObject } from './is';
const langs = ['zh', 'en'];
const sexs = ['male', 'female'];
const emailTypes = ['number', 'letter', 'name'];

export const checkName = (opts) => {
  if (opts && !isObject(opts)) {
    throw 'param option should be an object';
  }
  if (opts && opts.lang && !~langs.indexOf(opts.lang)) {
    console.log(langs.indexOf(opts.lang))
    throw `lang should be one of ${langs}`;
  }
  if (opts && opts.sex && !~sexs.indexOf(opts.sex)) {
    throw `sex should be one of ${sexs}`;
  }
};

export const checkGlobal = checkName;
export const checkEmail = (opts) => {
  if (opts && !isObject(opts)) {
    throw 'param option should be an object';
  }
  if (opts && opts.sex && !~sexs.indexOf(opts.sex)) {
    throw `sex should be one of ${sexs}`;
  }
  if (opts && opts.type && !~emailTypes.indexOf(opts.type)) {
    throw `sex should be one of ${emailTypes}`;
  }
};
