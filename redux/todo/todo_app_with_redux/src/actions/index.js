// todoを追加する際に使用するAction
let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  // todoを追加するたびに11追加
  id: nextTodoId++,
  text,
});

// TODOの完了・未完了を操作するときに使用するAction
export const toggleTodo = id = > ({
  type: 'TOGGLE_TODO',
  id
});

