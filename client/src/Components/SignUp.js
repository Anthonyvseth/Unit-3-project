
import React, {useState} from 'react'
import { Button } from './Button'
import {NavLink} from 'react-router-dom'
import TextInput from './TextInput'
import '../styles/Form.css'

const SignUp = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <div>
            <form className='form-content-right'>
                <h1>Sign Up</h1>
                <div className="form-inputs">
                    <label htmlFor='firtName'
                    className="form-label">
                        First Name
                        <TextInput
                        type="text"
                        name='firstName'
                        className='form-input'
                        placeholder='First Name'
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label htmlFor='lastName'
                    className="form-label">
                        Last Name
                        <TextInput
                        type="text"
                        name='lastName'
                        className='form-input'
                        placeholder='Last Name'
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label htmlFor='email'
                    className="form-label">
                        Email
                        <TextInput
                        type="text"
                        name='email'
                        className='form-input'
                        placeholder='Email'
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label htmlFor='password'
                    className="form-label">
                        Password
                        <TextInput
                        type="text"
                        name='password'
                        className='form-input'
                        placeholder='Password'
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label htmlFor='zipcode'
                    className="form-label">
                    Zipcode
                        <TextInput
                        type="text"
                        name='zipcode'
                        className='form-input'
                        placeholder='Zipcode'
                        />
                    </label>
                </div>
                <div className="form-inputs">
                    <label htmlFor='focus'
                    className="form-label">
                        Focus
                        <TextInput
                        type="text"
                        name='focus'
                        className='form-input'
                        placeholder='Focus'
                        />
                    </label>
                </div>
                <div>
            <NavLink 
            to='/profile'
            activeclassName='nav-active'
            onClick={handleClick}
             >
                <Button
                className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Submit
                </Button>
            </NavLink>
            </div>
            <div>
            <NavLink 
            to='/signin'
            activeclassName='nav-active'
            onClick={handleClick}
             >
             <h2>Existing user go to login</h2>
            </NavLink>
            </div>
            </form>
            
        </div>
    )
}
export default SignUp
