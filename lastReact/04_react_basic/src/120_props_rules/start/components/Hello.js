const Hello = (props) => {
  console.log(props.name);
  const name = "Bob";
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
