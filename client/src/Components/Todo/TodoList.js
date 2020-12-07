import React, { useState } from 'react';
import TodoForm from './TodoForm';

import {__GetTodos} from '../../services/TodoService'

function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [formError, setFormError] = useState(false);

  const todoField = (e) => {
    setTodos(e.target.value);
    console.log('todos', todos);
  };

  const completeField = (e) => {
    setComplete(e.target.value);
    console.log('is complete?', complete);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm 
      />
    </>
  );
    
 
}

export default TodoList;
