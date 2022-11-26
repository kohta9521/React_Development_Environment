/**
 * スプレッド構文
 */

// 配列の展開
const arr1 = [1, 2];
console.log(arr1);

console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);

// スプレッド構文　使用
sumFunc(...arr1);



// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);

console.log(arr3);


// 配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);


// 結合することも可能
const arr7 = [...arr4, ...arr5];
console.log(arr7);



const srr8 = arr4;
arr8[0] = 100;
console.log(arr8);
