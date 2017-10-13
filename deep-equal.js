/**
 * https://github.com/substack/node-deep-equal
 * var equal = require('deep-equal');
    console.dir([
        equal(
            { a : [ 2, 3 ], b : [ 4 ] },
            { a : [ 2, 3 ], b : [ 4 ] }
        ),
        equal(
            { x : 5, y : [6] },
            { x : 5, y : 6 }
        )
    ]);
 */
const equal = require('deep-equal');
const deepEqual = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (!a || !b || (typeof a != 'object' && typeof b != 'object')) {
    return a === b;
  }
  return objEquiv(a, b);
};

const objEquiv = (a, b) => {
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length != kb.length) return false;
  ka.sort();
  kb.sort();
  for (let i = ka.length - 1; i >=0; i--) {
    if (ka[i] != kb[i]) return false;
    const key = ka[i];
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
};

const test1 = {
  name: 'lilinhao',
  age: 20
}
const test2 = {
  name: 'lilinhao',
  age: 20
}
console.log(deepEqual(test1, test2));
