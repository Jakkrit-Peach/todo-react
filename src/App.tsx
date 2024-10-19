import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todo} from './types';
import { text } from 'stream/consumers';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([
      {
        id: 1,
        text: "Buy Milk 🥛",
        completed: false,
      },
      {
        id: 2,
        text: "Do homework",
        completed: true,
      }
  ])
  
 
 
 
  function add() {
    const todo ={
      id: 1,
      text: "Buy somthing",
      completed: false
    }
    setTodos([todo])
  }
  return (
    <div className="App">
      <h1> Hello World</h1>
<TodoList todos={todos}/>
    </div>
  );
}

export default App;