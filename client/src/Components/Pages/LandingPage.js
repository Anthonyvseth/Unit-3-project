import React from 'react'
import { Button } from '../Button'
import '../../style/LandingPage.css'

const LandingPage = () => {

    return (
        <div className='landing-container'>
            <h1>Make Your Day</h1>
            <p>lorem ipsum dsfj woeiaslkdj skdf asdkjfasdlkjsdjf kaslf</p>
            <div className="landing-btns">
                <Button
                className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default LandingPage