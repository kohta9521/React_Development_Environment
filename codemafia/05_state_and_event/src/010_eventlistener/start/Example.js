const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました");
  };
  const clickHnadler2 = () => {
    alert("botanngakurikkusaremaist");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHnadler2}>クリックしてね</button>
    </>
  );
};

export default Example;
