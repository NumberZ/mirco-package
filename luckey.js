// const draw = (amount, n = 1) => {
//   const cards = Array(amount).fill().map((ele, index) => index + 1);
//   for (let i = amount - 1; i >= 0; i--) {
//     let rands = Math.floor((i + 1) * Math.random());
//     [cards[rands], cards[i]] = [cards[i], cards[rands]];
//   }
//   return cards.slice(0, n);
// }
// console.log(draw(62, 10));

function* draw(amount) {
  const cards = Array(amount)
    .fill()
    .map((_, i) => i + 1);
    for (let i = amount - 1; i >= 0; i--) {
      let rand = Math.floor((i + 1) * Math.random());
      [cards[rand], cards[i]] = [cards[i], cards[rand]];
      yield cards[i];
    }
}
const pick = (amount, n) => {
  const drawer = draw(amount);
  return new Array(n).fill().map((e, i) => drawer.next().value);
} 
console.log(pick(30, 5));
console.log(pick(30, 5));

/**
  返回值期间 [0, 0.25)，概率 0.01
  返回值期间 [0.25, 0.5)，概率 0.03
  返回值期间 [0.5, 0.75)，概率 0.06
  返回值期间 [0.75, 1)，概率 0.9
 */
function updateRandom() {
  let p = Math.random(),
    n = Math.random() / 4;
  if (p < 0.01) {
    return 0 + n;
  }
  if (p < 0.04) {
    return 0.25 + n;
  }
  if (p < 0.1) {
    return 0.5 + n;
  }
  if (p < 1) {
    return 0.75 + n;
  }
}
console.log(updateRandom());