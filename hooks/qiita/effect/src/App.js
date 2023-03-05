import React, { useState, useEffect } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const EfectFunc = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}回クリックされました`;
  });

  return (
    <>
      <p>`${count}回クリックされました</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        ボタン
      </ButtonGroup>
      <Button onClick={() => setCount((prev) => prev + 1)}>リセット</Button>
    </>
  );
};
