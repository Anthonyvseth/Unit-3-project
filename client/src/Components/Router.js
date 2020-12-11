import React, {useState, useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home';
import LandingPage from '../Pages/LandingPage';
import SignUpPage from '../Pages/SignUpPage';
import SignInPage from '../Pages/SignInPage';
import ProtectedRoute from './ProtectedRoute'

import {__GetProfile} from '../services/AccountService';

import '../styles/App.css';

export default function Router() {
    const [account, setAccount] = useState(null);
    const [needsRefresh, setNeedsRefresh] = useState(false)

    const localAccountId = localStorage.getItem('account_id');

    const retrieveAccount = async (account_id) => {
        try {
            const x = await __GetProfile(parseInt(localAccountId));
            setAccount(x);
            return x;
        } catch (error) {
        }
    };

    if ((account === null && localAccountId !== null) || needsRefresh) {
        setNeedsRefresh(false)
        const retrievedAccount = retrieveAccount(localAccountId);
        setAccount(retrievedAccount);
    }

    const clearAccount = () => {
        setAccount(null);
    };

    return (
        <main>
            <Switch>
                <Route exact path='/' component={() => <LandingPage/>}/>
                <Route
                    exact
                    path='/register'
                    component={(props) => <SignUpPage {...props} setAccount={setAccount}/>}
                />
                <Route
                    exact
                    path='/signin'
                    component={(props) => <SignInPage {...props} setAccount={setAccount}/>}
                />
                <ProtectedRoute
                    authenticated={account !== null}
                    path='/home'
                    component={(props) => (
                        <Home
                            {...props}
                            account={account}
                            onClickSignOut={clearAccount}
                            setNeedsRefresh={setNeedsRefresh}/>
                    )}
                />
            </Switch>
        </main>
    );
}
