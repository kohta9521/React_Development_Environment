/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//     console.log("1か2はtrueになります。");
// }
// if (flag1 &&  flag2) {
//     console.log("1か2はtrueになります。");
// }

const num = null;
const fee = num || "金額未設定です。";
console.log(fee);