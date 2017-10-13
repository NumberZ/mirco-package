// 根据start和end参数生产数组
const newArray = (start, end) => {
  let s = typeof start === 'number',
    e = typeof end === 'number';
  if (s && !e) {
    end = start;
    start = 0;
  } else if (!s && !e) {
    start = 0;
    end = 0;
  }
  start = start | 0; // 取整操作
  end = end | 0;
  const len = end - start;
  const newArray = new Array(len);
  if (len < 0) throw new Errro('array length must be positive');
  for (let i = 0, c = start; i < len; i ++, c++) {
    a[i] = c;
  }
  return newArray;
};
