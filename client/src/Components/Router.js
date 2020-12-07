import React from 'react';
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SignInPage'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import {Switch, Route} from 'react-router-dom'

export default function Router() {


    return (
        <main>
            <Switch>
                <Route exact path='/' 
                component={() => (<LandingPage /> )}    
                />
                <Route exact path='/register' 
                component={(props) => (<SignUpPage {...props} /> )}    
                />
                <Route exact path='/signin' 
                component={(props) => (<SignInPage {...props}  /> )}    
                />
                <Route exact path='/home'
                component={(props) => (<Home />)}/>
            </Switch>
        </main>
    )

}
