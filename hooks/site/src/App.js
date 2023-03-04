import React, { useState } from "react";
import "./App.css";

// 関数コンポーネント
const App = () => {
  // useStateの呼び出し
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>{count}回クリックしました。</p>
        <button onClick={() => setCount(count + 1)}>クリック</button>
      </div>
    </>
  );
};

export default App;
