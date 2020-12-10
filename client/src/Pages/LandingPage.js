
import React, {useState} from 'react'
import { NavLink} from 'react-router-dom'
import Button from '../components/Button'

import '../styles/LandingPage.css'

const LandingPage = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='landing-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />

            <h1>Make Your Day</h1>
            <p></p>
            <div className="landing-btns">
            <NavLink 
            to='/register'
            activeclassName='nav-active'
            onClick={handleClick}
             >
                <Button
                className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
            </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;
