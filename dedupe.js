// 移除数组中相同的元素
const dedupe = (arr, hasher) => {
  hasher = hasher || sigmund;
  const clone = [];
  const lookup = {};
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    const hashed = hasher(ele);
    console.log(hashed);
    if (!lookup[hashed]) {
      clone.push(ele);
      lookup[hashed] = true;
    }
  }
  return clone;
};

const sigmund = (obj, maxSession = 10) => {
  let analysis = '';
  const notes = [];
  const RE = RegExp;
  const analyse = (subejct, session) => {
    if (typeof subejct === 'function' || typeof subejct === 'undefined') {
      return;
    }
    if (typeof subejct !== 'object' || !subejct || subejct instanceof RE) {
      analysis += subejct;
      return;
    }
    if (notes.indexOf(subejct) !== -1 || session === maxSession) return;
    notes.push(subejct);
    console.log('notes', notes);
    analysis += '{';
    Object.keys(subejct).forEach((cur, index, arr) => {
      let to = typeof subejct[cur];
      if (to === 'function' || to === 'undefined') return;
      analysis += cur;
      analyse(subejct[cur], session + 1);
    });
  };
  analyse(obj, 0);
  return analysis;
};

// var a = [1, 2, 2, 3];
// var b = dedupe(a);

// var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
// var bb = dedupe(aa)

var aaa = [
  { a: 2, b: {a: 1, b: 3} },
  { a: 2, b: 1 },
  { a: 1, b: 2 },
  { a: 1, b: 3 },
  { a: 1, b: 4 }
];
var bbb = dedupe(aaa);

console.log(bbb);
// console.log(bb)
// console.log(b)
