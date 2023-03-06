import "./Child.css";

import React, { Fragment } from "react";

console.log(React);

const Child = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Child;
