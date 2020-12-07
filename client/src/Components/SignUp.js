import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom'

import Button from './Button'
import TextInput from './TextInput'
import { __RegisterUser } from '../services/AccountServices'

import '../styles/Form.css'

const SignUp = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [formError, setFormError] = useState(false)

    const formFieldChange = (e) => {
        const fieldName = e.target.name
        const fieldValue = e.target.value
        console.log('HIT formFieldChange: ', fieldName, fieldValue)
        switch (fieldName) {
            case 'firstName':
                setFirstName(fieldValue)
                break
            case 'lastName':
                setlastName(fieldValue)
                break
            case 'email':
                setEmail(fieldValue)
                break
            case 'password':
                setPassword(fieldValue)
                break
            case 'zipCode':
                setZipCode(fieldValue)
                break
        }
    }

    const handleSubmit = async (event) => {
        console.log('HIT handleSubmit SignUp')
        event.preventDefault()

        const formState = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            zipCode: zipCode,
        }

        try {
            const signUpResponse = await __RegisterUser(formState)
            console.log('Response - SignUp: ', signUpResponse)

            props.history.push('/home')
            // props.toggleAuthenticated(true, loginData.user, () => this.props.history.push('/list')
            // )
        } catch (error) {
            setFormError(true)
        }
    }

    return (
        <div>
            <form
             className='form-content-right'
             onSubmit={e => handleSubmit(e)}
            >
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
                            onChange={formFieldChange}
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
                            onChange={formFieldChange}
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
                            onChange={formFieldChange}
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
                            onChange={formFieldChange}
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
                            onChange={formFieldChange}
                        />
                    </label>
                </div>
                <div>
                <Button
                    className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Submit
                </Button>
                </div>
            </form>

        </div>
    )
}
export default SignUp
