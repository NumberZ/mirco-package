const flatArr = (arr, res = []) => {
  let cur, i = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    cur = arr[i];
    Array.isArray(cur) ? flatArr(cur, res) : res.push(cur);
  }
  return res;
}

console.log(flatArr(['a', ['b', ['c']], 'd', ['e']]));