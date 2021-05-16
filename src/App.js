/*
* PROJECT: js-project-11-05-2021
* DESCRIPTION: Small Todo List in React JS
* AUTHOR: Vahin Sharma
*/

import {React, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  let [actualTodoList, setActualTodoList] = useState([])
  let [textValue, setTextValue] = useState("")
  
  function handleTextBoxKeyDown(e) {
    if (e.which === 13) {
      setActualTodoList(prevTodos => [...prevTodos, {name: textValue, checked: false}])
    }
  }
  
  function handleOnChangeTextValue(e) {
    setTextValue(e.target.value)
  }
  
  return (
    <div className="App">
      <input type="text" id="textBox" value={textValue} onChange={handleOnChangeTextValue} onKeyDown={handleTextBoxKeyDown} />
      <TodoList todos={actualTodoList}/>
    </div>
  );
}

export default App;
