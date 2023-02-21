// アロー関数

// 従来の書き方
function func1(str) {
  return str;
}

console.log(func1("func1です"));

const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

// アロー関数での書き方
const func3 = (str) => {
  return str;
};

console.log(func3("test complete"));
