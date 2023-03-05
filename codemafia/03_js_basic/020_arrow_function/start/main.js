// function fn(number) {
//   return number * 2;
// }

// const fn = function (number) {
//   return number * 2;
// };

// console.log(fn(2));

// console.log(2);

// const fn = (number) => {
//   return number * 2;
// };

// console.log(2);

// const FnArrow = (number) => number * 2;

// 複数行で出力する場合
const fnArrow = (number) => {
  console.log(number);
  return number * 2;
};

const fnArrowObj = (number) => ({ result: number * 2 });
console.log(fnArrowObj(2));
