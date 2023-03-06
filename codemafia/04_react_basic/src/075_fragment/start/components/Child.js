import "./Child.css";

import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magnam
        explicabo optio enim ut laborum adipisci, animi recusandae commodi,
        sapiente voluptate culpa consequatur voluptatem dolores quae labore est,
        odio sint.
      </p>
    </React.Fragment>
  );
};

export default Child;
