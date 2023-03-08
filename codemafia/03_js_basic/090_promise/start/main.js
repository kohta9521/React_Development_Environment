// 非同期処理
let a = 0;

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
    reject(a);
  }, 2000);
}).then((b) => {
  console.log(b);
  return b;
}.then(() => {
  
}).catch((c) => {
  console.log('キャッチが実行', c);
})
