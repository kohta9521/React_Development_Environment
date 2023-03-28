import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
        reprehenderit placeat repudiandae animi enim cupiditate omnis ut veniam
        voluptatum doloribus eaque natus labore sint, ab rem asperiores facilis
        assumenda dolor?
      </p>
    </React.Fragment>
  );
};

export default Child;
