import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount((state) => state + 1);
  };
  const minus = () => {
    setCount((state) => state - 1);
  };
  return (
    <>
      <h3>練習問題</h3>
      <p>現在のカウント数: {count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
};

export default Example;
