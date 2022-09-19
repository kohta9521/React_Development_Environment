import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {

  const [todos, setTodos ] = useState([{id: 1, name: "Todo1", completed:  false}]);

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    //タスクを追加する

  };

  return (
    <div>
        <TodoList todos = {todos} />
        <input tyoe="text" ref={todoNameRef}></input>
        <button onClick={handleAddTodo}>タスクを追加</button>
        <button>完了したタスクの削除</button>
        <div>残りのタスクは : 0</div>
    </div>
  );
}

export default App;
