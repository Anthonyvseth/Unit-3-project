import React, {useState} from 'react';
import TextInput from '../components/TextInput';
<<<<<<< HEAD
import { __LoginUser } from '../services/AccountService';
import Button from '../components/Button'
=======
import {__LoginUser} from '../services/AccountService';
>>>>>>> a666e63c236a405722b16792d4601ae820df7d63

const SignInPage = (props) => {
    const {setAccount} = props
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [formError, setFormError] = useState(false);

    const emailField = (e) => {
        setLoginValue(e.target.value);
        console.log('Email: ', loginValue);
    };

    const passwordField = (e) => {
        setPasswordValue(e.target.value);
        console.log('Password: ', passwordValue);
    };

    const handleSubmit = async (event) => {
        console.log('HIT handleLogin Submit', loginValue, passwordValue);
        event.preventDefault();
        try {
            const userData = {email: loginValue, password: passwordValue};
            const loginResponse = await __LoginUser(userData);
            console.log('Login Response: ', loginResponse === undefined);
            if (loginResponse !== "") {
                setAccount(loginResponse)
                props.history.push('/home');
            }
        } catch (error) {
            setFormError(true);
        }
    };

<<<<<<< HEAD
  return (
    <div>
      
      <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign In</h1>
        <div className='form-inputs'>
        
          <label htmlFor='email' className='form-label'>
            Email
            <TextInput
              className='form-input'
              name='email'
              type='email'
              onChange={emailField}
            />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
            <TextInput
              className='form-input'
              name='password'
              type='password'
              onChange={passwordField}
            />
          </label>
        </div>
        <div>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Submit
          </Button>
=======
    return (
        <div>
            <h1>Sign in</h1>
            <form className='form-content-right' onSubmit={(e) => handleSubmit(e)}>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                        <TextInput
                            className='form-input'
                            placeholder='email'
                            name='email'
                            type='email'
                            onChange={emailField}
                        />
                    </label>
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                        <TextInput
                            className='form-input'
                            placeholder='password'
                            name='password'
                            type='password'
                            onChange={passwordField}
                        />
                    </label>
                </div>
                <div>
                    <button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Submit
                    </button>
                </div>
            </form>
>>>>>>> a666e63c236a405722b16792d4601ae820df7d63
        </div>
    );
};

export default SignInPage;
