import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from './Button'
import TextInput from './TextInput'

const SignIn = () => {


    return (
        <div>
            <h1>Sign in</h1>
            <form className='form-content-right'>
            <div className="form-inputs">
                    <label htmlFor='email'
                    className="form-label">
                        Email
                        <TextInput className='form-input'
                        placeholder='email'
                        name='email'
                        type="email"
                        
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label htmlFor='password'
                    className="form-label">
                        Password
                        <TextInput className='form-input'
                        placeholder='password'
                        name='password'
                        type="password"
                        
                        />
                    </label>
                </div>
                <div>
            <NavLink 
            to='/profile'
            activeclassName='nav-active'
             >
                <Button
                className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Submit
                </Button>
            </NavLink>
            </div>
            </form>
        </div>
    )
}

export default SignIn
