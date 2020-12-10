import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import { __LoginUser } from '../services/AccountService';
import Button from '../components/Button'

const SignInPage = (props) => {
  const { setAccount } = props
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
      const userData = { email: loginValue, password: passwordValue };
      const loginResponse = await __LoginUser(userData);
      console.log('Login Response: ', loginResponse);
      setAccount(loginResponse)
      props.history.push('/home');
      // props.toggleAuthenticated(true, loginData.user, () => this.props.history.push('/list')
      // )
    } catch (error) {
      setFormError(true);
    }
  };

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
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
