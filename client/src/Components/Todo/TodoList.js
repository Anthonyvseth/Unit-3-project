import React from 'react';
import Todo from './Todo';

export default (props) => {
  const { account, setNeedsRefresh } = props
  const { todos } = props.account

  if (todos !== null && todos !== undefined && todos.length > 0) {
    return (
      <div>
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={index}
              setNeedsRefresh={setNeedsRefresh} />
          )
        })
        }
      </div>
    )
  } else {
    return null
  }
}
