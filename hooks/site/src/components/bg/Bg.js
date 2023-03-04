import React, { useState } from "react";
import ReactDOM from "react-dom";

// css import
import "./Bg.css";

function Bg() {
  const [isDark, setDark] = useState(false);

  const bgColor = isDark ? "black" : "white";
  return (
    <>
      <div className={`content bg-${bgColor}`}>
        <p>The Background Color is {bgColor}.</p>
      </div>
      <button onClick={() => setDark(!isDark)}>
        Change to {isDark ? "white" : "black"}
      </button>
    </>
  );
}

ReactDOM.render(<Bg />, document.getElementById("root"));
export default Bg;
