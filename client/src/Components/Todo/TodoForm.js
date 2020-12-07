import React, { useState, useEffect} from 'react';
import {__CreateTodo} from '../../services/TodoService'
import TextInput from '../TextInput'

function TodoForm(props) {
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [complete, setComplete] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log('HIT formFieldChange: ', fieldName, fieldValue);
    switch (fieldName) {
      case 'id':
        setId(fieldValue);
        break;
      case 'description':
        setDescription(fieldValue);
      case 'complete':
        setComplete(fieldValue);
        break;
  };
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formState = {
      id: id,
      description: description,
      complete: complete
    };
    
    try {
        const addTodo = await __CreateTodo(formState);
        console.log('add to do', addTodo)

        props.history.push('/home');
    } catch (error) {
        setFormError(true)
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
        <TextInput
              type='text'
              name='Todo'
              placeholder='Add Todo'
              onChange={handleChange}
            />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <TextInput
            type='text'
              name='Todo'
              placeholder='Add Todo'
              onChange={handleChange}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm