import React from 'react';

function Todo({ todo }) {
  return <li className="todoItem"><input type="checkbox" checked={todo.checked} />{todo.name}</li>
}

export default Todo;