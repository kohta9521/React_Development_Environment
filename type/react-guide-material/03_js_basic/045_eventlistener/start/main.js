const h1Element = document.querySelector("h1");
console.dir(h1Element);

h1Element.textContent = "変更後のタイトル";
console.dir(h1Element.textContent);

// イベントハンドラ
const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => {
  console.dir(e.textContent);
  console.log("hello");
});

const helloFn = (e) => {};
