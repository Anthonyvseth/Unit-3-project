import React from 'react';
import Button from '../components/Button';
import DateTime from '../components/DateTime';
import SignOut from '../components/SignOut'
import TodoList from '../components/Todo/TodoList'
import Focus from '../components/Focus'

export default (props) => {
  //console.log('home props: ', props.account);
  const { onClickSignOut } = props

  return (
    <div className='landing-container'>
      <h1>Make Your Day</h1>
      <h2> Welcome, {props.account.firstName}</h2>
      <div className='landing-btns'>
      <Focus account={props.account}/>
      </div>
      <h1>
        <DateTime></DateTime>
      </h1>
      <div>
        <TodoList // we are going to need to send todolist as props
        todos={props.account}
        />
        <SignOut onClick={onClickSignOut}/>
      </div>
    </div>
  );
};
