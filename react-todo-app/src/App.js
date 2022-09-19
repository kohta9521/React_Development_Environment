import TodoList from "./TodoList";

function App() {
  
  const[ todos, setTodos ] = useState();

  return (
    <div>
        <TodoList />
        <input tyoe="text"></input>
        <button>タスクを追加</button>
        <button>完了したタスクの削除</button>
        <div>残りのタスクは : 0</div>
    </div>
  );
}

export default App;
