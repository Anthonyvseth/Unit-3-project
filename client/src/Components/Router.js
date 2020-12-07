import React, { useState } from 'react';

import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import ProtectedRoute from '../components/ProtectedRoute';

import { Switch, Route } from 'react-router-dom';
import { __GetProfile } from '../services/AccountService';

export default function Router() {
  const [account, setAccount] = useState(null);

  //  create fn to retrieve account from backend
  //  if localstorage contains an account_id key and value
  const localAccountId = localStorage.getItem('account_id');

  const retrieveAccount = async (account_id) => {
    try {
      const x = await __GetProfile(parseInt(localAccountId));
      // console.log('whats x:', x);
      setAccount(x);
      // console.log('accountState: ', account);
      return x;
    } catch (error) {
      // console.log('retr. account: ', error);
    }
  };

  console.log('localAccountId: ', localAccountId);
  if (account === null && localAccountId !== null) {
    const retrievedAccount = retrieveAccount(localAccountId);
    console.log('ret acct: ', retrievedAccount);
    setAccount(retrievedAccount);
  }

  const clearAccount = () => {
    setAccount(null);
  };

  return (
    <main>
      <Switch>
        <Route exact path='/' component={() => <LandingPage />} />
        <Route
          exact
          path='/register'
          component={(props) => <SignUpPage {...props} />}
        />
        <Route
          exact
          path='/signin'
          component={(props) => <SignInPage {...props} />}
        />
        <ProtectedRoute
          authenticated={account !== null}
          path='/home'
          component={(props) => (
            <Home {...props} account={account} onClickSignOut={clearAccount} />
          )}
        />
      </Switch>
    </main>
  );
}
