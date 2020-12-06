import React from 'react';
<<<<<<< HEAD
import SignUp from './Account/SignUp'
import SignIn from './Account/SignIn'
import LandingPage from '../Pages/LandingPage'
=======
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
>>>>>>> 8191dba90a8ab72c289a45a03c68305a79abb2b8
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
                component={(props) => (<SignIn {...props}  /> )}    
                />
                <Route exact path='/home'
                component={(props) => (<Home />)}/>
            </Switch>
        </main>
    )

}
