import React, { useState } from "react";
import ReactDOM from "react-dom";

const Form2 = (props) => {
  const [input1, setInput1] = useState[0];
  const [input2, setInput2] = useState(0);
  const [operator, setOperator] = useState("+");

  const handleChange1 = (event) => {
    setInput1(event.target.value);
  };
  const handleChange2 = (event) => {
    setInput2(event.target.value);
  };
  const handleChangeOperator = (event) => {
    setOperator(event.target.value);
  };

  let result = 0;

  if (operator === "+") {
    result = parseFloat(input1) + parseFloat(input2);
  } else {
    result = parseFloat(input1) - parseFloat(input2);
  }

  return (
    <div>
      <select name="operator" value={operator} onChange={handleChangeOperator}>
        <option value="+"> 加算 </option>
        <option value="-"> 減算 </option>
      </select>
      <br />
      <input type="text" value={input1} onChange={handleChange1} size="10" />
      <input type="text" value={input2} onChange={handleChange2} size="10" />
      <br />
      result: <span> {result} </span>
    </div>
  );
};

ReactDOM.render(<Form2 />, document.getElementById("root"));

export default Form2;
