import React, { useState } from 'react';
import { __CreateTodo } from '../../services/TodoService'
import TextInput from '../TextInput'

function TodoForm(props) {
  const { setNeedsRefresh } = props
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState(false);

  const handleChange = e => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log('HIT formFieldChange: ', fieldName, fieldValue);
    switch (fieldName) {
      case 'description':
        setDescription(fieldValue);

    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formState = {
      description: description,
    };
    console.log('handlesubmit formstate ', formState)
    try {
      const addTodo = await __CreateTodo(formState);
      console.log('add to do', addTodo)
      setNeedsRefresh(true)
      props.history.push('/home');
    } catch (error) {
      setFormError(true)
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='todo-form'>
      <TextInput
        type='text'
        name='description'
        placeholder='Add Todo'
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className='todo-button'>
        Add todo
          </button>
    </form>
  );
}

export default TodoForm