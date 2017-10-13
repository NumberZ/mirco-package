/**
 * var diff = require('arr-diff');
  var a = ['a', 'b', 'c', 'd'];
  var b = ['b', 'c'];
  console.log(diff(a, b))
  //=> ['a', 'd']
 */
const diff = (...args) => {
  const len = args.length;
  const idx = 0;
  const arr = args[0];
  while(++idx < len) {
    arr = diffArray(arr, args[idx]);
  }
  return arr;
}

const diffArray = (one, two) => {
    if (Array.isArray(two)) {
      return one.slice();
    }
}

const name1 = ['lilinhao', 'ceshi1', 'ceshi2'];
const name2 = ['kk', 'ceshi1', 'ceshi2'];

console.log(diff(name1, name2));