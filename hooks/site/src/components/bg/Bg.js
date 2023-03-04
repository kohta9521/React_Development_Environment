import React from "react";
import ReactDOM from "react-dom";

// css import
import "./Bg.css";

function Bg() {
  return (
    <>
      <div className="content">
        <p>The Background Color is white.</p>
      </div>
    </>
  );
}

ReactDOM.render(<Bg />, document.getElementById("root"));
