import React from 'react';
import Todo from './Todo'

function TodoList({ todos }) {
  return <ul>
    {
      todos.map(todoItem => <Todo todo={todoItem}/>)
    }
  </ul>
}

export default TodoList;