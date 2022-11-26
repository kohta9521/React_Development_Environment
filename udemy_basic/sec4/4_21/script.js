/**
 * アロー関数
 */

// 従来の関数の画期かた
function func1(str) {
    return str
}
// const func1 = function(str) {
//     return str;
// }

console.log(func1("func1です。"));


// アロー関数
const func2 = str => str;

console.log(func2("func2です。!!!"));