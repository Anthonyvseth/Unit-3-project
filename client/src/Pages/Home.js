import React from 'react';
import DateTime from '../components/DateTime';
import SignOut from '../components/SignOut';
import WebLinks from '../components/WebLink/WebLinks';
import Todos from '../components/Todo/Todos';
import Focus from '../components/Focus';
import Weather from '../components/Weather';
import '../styles/Home.css'

export default (props) => {
  //console.log('home props: ', props.account);
  const { account, onClickSignOut, setNeedsRefresh } = props;

  if (account !== null && account !== undefined) {

    return (
      <div className='Home-container'>
        <h1>Make Your Day</h1>
        <div>
          <Weather />
        </div>
        <h2> Welcome, {props.account.firstName}</h2>
        <div className='landing-btns'>
          <Focus account={props.account} />
        </div>
        <h1>
          <DateTime></DateTime>
        </h1>
        <div>
          <WebLinks
            {...props}
            setNeedsRefresh={setNeedsRefresh} />
        </div>
        <div>
          <Todos // we are going to need to send todolist as props
            account={account}
            setNeedsRefresh={setNeedsRefresh}
          />
          <SignOut onClick={onClickSignOut} />
        </div>
      </div>
    )
  } else {
    <div>
      Loading...
  </div>
  }
};
