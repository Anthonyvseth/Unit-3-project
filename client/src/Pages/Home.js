import React from 'react';
import Button from '../components/Button';

export default (props) => {
  console.log('home props: ', props.account);

  return (
    <div className='landing-container'>
      <h1>Make Your Day</h1>
      <p> Welcome, {props.account.firstName}</p>
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          add Focus
        </Button>
      </div>
    </div>
  );
};
