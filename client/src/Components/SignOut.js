import React, { useState } from "react";
import { Redirect } from 'react-router'

import "../styles/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const [signedOut, setSignedOut] = useState(false)

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const clearAccount = () => {
    console.log('HIT clearAccount')
    localStorage.clear("account_id")
    onClick()
    setSignedOut(true)
  }

  if (signedOut) {
    < Redirect to='/' push={true} />
  } else {
    return (
      <button
        className={`btn 
      ${checkButtonStyle}
      ${checkButtonSize} 
      `}
        onClick={(e) => clearAccount()}
      >
        Sign Out
      </button>
    );
  }
};

export default Button;
