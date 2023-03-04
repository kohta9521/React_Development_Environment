import React, { useState } from "react";
import ReactDOM from "react-dom";

function Form(props) {
  const [val, setVal] = useState("");

  function handleChange(event) {
    setVal(event.target.value);
  }

  function handleSubmit(event) {
    console.log(props.name + ":" + val);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {props.name}:
        <input type="text" value={val} onChange={handleChange} />
      </label>
      <input type="submit" value="送信" />
    </form>
  );
}

ReactDOM.render(<Form name="お名前" />, document.getElementById("root"));

export default Form;
