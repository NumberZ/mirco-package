// https://github.com/sindresorhus/decamelize/blob/master/index.js
/**
 * const decamelize = require('decamelize');
    decamelize('unicornRainbow');
    //=> 'unicorn_rainbow'
    decamelize('unicornRainbow', '-');
    //=> 'unicorn-rainbow'
 */

const decamelize = (str, sep) => {
  if (typeof str !== 'string') {
    throw new TypeError('need a string');
  }
  sep = sep || '_';
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase()
};

console.log(decamelize('liLinHBBBao'));
