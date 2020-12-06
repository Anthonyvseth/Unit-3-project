import React from 'react';
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import LandingPage from './LandingPage'
import {Switch, Route} from 'react-router-dom'

export default function Router() {


    return (
        <main>
            <Switch>
                <Route exact path='/' 
                component={() => (<LandingPage /> )}    
                />
                <Route exact path='/register' 
                component={(props) => (<SignUp {...props} /> )}    
                />
                <Route exact path='/signin' 
                component={(props) => (<SignIn {...props}  /> )}    
                />
                <Route exact path='/home'
                component={(props) => (<Home />)}/>
            </Switch>
        </main>
    )

}