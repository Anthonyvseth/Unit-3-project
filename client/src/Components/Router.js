import React, { useState, useEffect } from 'react';

import Home from '../Pages/Home';
import LandingPage from '../Pages/LandingPage';
import SignUpPage from '../Pages/SignUpPage';
import SignInPage from '../Pages/SignInPage';
import ProtectedRoute from '../Components/ProtectedRoute'

import { Switch, Route } from 'react-router-dom';
import { __GetProfile } from '../services/AccountService';

import '../styles/App.css';

export default function Router() {
    const [account, setAccount] = useState(null);
    const [needsRefresh, setNeedsRefresh] = useState(false)

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
    if ((account === null && localAccountId !== null) || needsRefresh) {
        setNeedsRefresh(false)
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
                    component={(props) => <SignUpPage {...props} setAccount={setAccount} />}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage {...props} setAccount={setAccount} />}
                />
                <ProtectedRoute
                    authenticated={account !== null}
                    path='/home'
                    component={(props) => (
                        <Home
                            {...props}
                            account={account}
                            onClickSignOut={clearAccount}
                            setNeedsRefresh={setNeedsRefresh} />
                    )}
                />
            </Switch>
        </main>
    );
}
