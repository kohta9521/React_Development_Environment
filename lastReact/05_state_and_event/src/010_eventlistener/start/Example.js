const Example = () => {
  const clickHandler = () => {
    alert("クリックされました");
  };
  const clickHandler2 = () => {
    alert("クリックされましたaaa");
  };

  const hello = () => "hello";
  console.log(hello);

  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      {hello}
    </>
  );
};

export default Example;
