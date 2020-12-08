import React, { useState } from 'react';
import TodoForm from './TodoForm';
// import Todo.js as a subcomponent

import {__GetTodos} from '../../services/TodoService'

function TodoList(props) {
 
// get the todos to display

// retrieve todolist from props

// render new todo component

return (
  <>
      <h1>What's the Plan for Today?</h1>
        {/* // iterate through todolist using map and return a ToDo subcomponent */}
      <TodoForm 
      />
    </>
  );
    
 
}

export default TodoList;
