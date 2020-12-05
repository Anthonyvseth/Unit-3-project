import React from 'react'

const SignUp = () => {
    
    return (
        <div>
            <form className='form'>
                <h1>Sign Up</h1>
                <div className="form-inputs">
                    <label htmlFor='firtName'
                    className="form-label">
                        First Name
                        <input 
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
                        <input 
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
                        <input 
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
                        <input 
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
                        <input 
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
                        <input 
                        type="text"
                        name='focus'
                        className='form-input'
                        placeholder='Focus'
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}
export default SignUp