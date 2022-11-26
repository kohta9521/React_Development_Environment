/**
 * const, let等の変数宣言
 */

var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "var変数を再宣言";
console.log(val1);



let val2 = "let変数";
console.log(val2);

//　letは上書きが可能
val2 = "let変数を上書き";
console.log(val2);

// let は再宣言不可能
// let val2 =  "let変数を再宣言";
// console.log(val2);


// 一番厳密な宣言方法

const val3 = "const変数";
console.log(val3);



// constでもオブジェクトだと中のものを変化させることができる!

const val4 = {
    name: "じゃけ",
    age: 29,
};

val4.name= "はああ";
val4.address = "Hiroshima";
console.log(val4);


const val5 = ['dog', 'cat'];
console.log(val5);
val5[0] = 'bird';
console.log(val5);

val5.push('monkey');
console.log(val5);

const name = "光太";
const age = 19;

// テンプレート文字列を用いた
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);