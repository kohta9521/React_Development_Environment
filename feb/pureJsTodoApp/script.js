const onClickAdd = () => {
  // テキストボックスの値を取得・初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
