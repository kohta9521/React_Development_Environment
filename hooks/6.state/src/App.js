import React, { useState } from "react";

export default function App() {
  const [isPublished, setisPublished] = useState(false);
  console.log(isPublished);
  return (
    <>
      <div className="">
        <h1>sample code about react state</h1>
        <button onClick={() => setisPublished(true)}>公開</button>
      </div>
    </>
  );
}
