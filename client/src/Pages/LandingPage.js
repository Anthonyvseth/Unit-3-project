
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
<<<<<<< HEAD
            <p></p>
=======
            <p>“A browser based daily planner and motivator”</p>
>>>>>>> 1f0790de008695b1cb3050a9ead87ae26d00fdaa
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
