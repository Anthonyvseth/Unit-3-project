import React from 'react';
import SignUp from './SignUp'
import SignIn from './SignIn'
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
                component={() => (<SignUp /> )}    
                />
                <Route exact path='/signin' 
                component={(props) => (<SignIn /> )}    
                />
                <Route exact path='/home'
                component={(props) => (<Home />)}/>
            </Switch>
        </main>
    )

}
