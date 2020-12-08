import React from 'react';
import Button from '../components/Button';
import DateTime from '../components/DateTime';
import SignOut from '../components/SignOut'
import Todos from '../components/Todo/Todos'
import Focus from '../components/Focus'
import Weather from '../components/Weather'

export default (props) => {
  //console.log('home props: ', props.account);
  const { account, onClickSignOut } = props

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
        <Todos // we are going to need to send todolist as props
        account={account}
        />
        <SignOut onClick={onClickSignOut}/>
      </div>
      <div>
        <Weather/>
      </div>
    </div>
  );
};
