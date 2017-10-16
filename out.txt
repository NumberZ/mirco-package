const add2 = (a, b) => a + 2;
const sqr = a => a * a;

const compose = (...fns) => x => fns.reduce((p, c, a) => c(p), x);

const composition = compose(add2, sqr);
console.log(composition(3));