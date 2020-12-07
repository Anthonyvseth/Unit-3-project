import React from 'react';
import Button from '../components/Button';
import DateTime from '../components/DateTime';
import SignOut from '../components/SignOut';

export default (props) => {
  // console.log('home props: ', props.account);
  const { onClickSignOut } = props;

  return (
    <div className='landing-container'>
      <h1>Make Your Day</h1>
      <h2> Welcome, {props.account.firstName} </h2>
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          add Focus
        </Button>
      </div>
      <h1>
        <DateTime></DateTime>
      </h1>
      <div>
        <SignOut onClick={onClickSignOut} />
      </div>
    </div>
  );
};
