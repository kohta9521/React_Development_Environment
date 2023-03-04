import React, { useState } from "react";
import "./App.css";

import Bg from "./components/bg/Bg";
import Form from "./components/form/Form";
import Form2 from "./components/form/Form2";

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

      <Bg />
      <Form />

      <Form2 />
    </>
  );
};

export default App;
