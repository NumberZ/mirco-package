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