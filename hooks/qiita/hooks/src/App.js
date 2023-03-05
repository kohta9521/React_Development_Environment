import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const Counter = () => {
    const [count, setCount] = useState(0);
  };
  return (
    <>
      <p>count is {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+ 1</button>
      <span></span>
      <button onClick={() => setCount((c) => c - 1)}>-1</button>
    </>
  );
}

export default App;
