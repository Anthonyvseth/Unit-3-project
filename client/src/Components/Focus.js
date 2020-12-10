import React, { useState, useEffect } from "react";
import { __UpdateFocus } from "../services/AccountService";

const Focus = (props) => {
  const { setNeedsRefresh } = props
  const [focusValue, setFocusValue] = useState(null);

  useEffect(()=>{
    if (focusValue === null) {
      setFocusValue(props.account.focus)
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sentValues = {focus: focusValue}
      const updatedFocus = await __UpdateFocus(sentValues);
      setNeedsRefresh(true)
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFocusValue(e.target.value)   
  };

  const clearFocus = async (e) => {
    e.preventDefault()
    try {
      const updatedFocus = await __UpdateFocus({focus: ''})
      setNeedsRefresh(true)
    } catch (error) {
      throw error;
    }
  }

  if (props.account === null || props.account === undefined) {
    return null;
  } else if (props.account.focus !== 'NULL' || props.account.focus !== "") {
    return (
          <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            name="focus"
            value={focusValue}
            placeholder="Focus for today?"
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
        <button onClick={(e)=>clearFocus(e)}>Clear</button>
        </div>
    )
  } else {
      return (
      <div>
        <h3>You're currently focused on:</h3>
        <p>{props.account.focus}</p>
        <button onClick={clearFocus}>*</button>
      </div>
    );
  }
};

export default Focus;