import React from 'react';
import Todo from './Todo';

export default (props) => {
  const { account } = props
  const { todos } = props.account

  if (account !== null && account !== undefined) {
    return (
      <div>
        {todos.map((todo, index) => {
          return (
            <Todo todo={todo} key={index}/>
          )
        })
        }
      </div>
    )
  } else {
    return null
  }
}
