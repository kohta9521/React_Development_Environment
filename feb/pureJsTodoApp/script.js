const onClickAdd = () => {
  // テキストボックスの値を取得・初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // buttonの完了から生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("sample");
  });

  // buttonの削除から生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除する
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素の設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
