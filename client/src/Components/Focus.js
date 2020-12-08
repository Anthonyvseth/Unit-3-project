import React, { useState } from "react";
import TextInput from "./TextInput";
import { __UpdateFocus } from "../services/AccountService";

const Focus = (props) => {
  const [focusValue, setFocusValue] = useState("");

  //   const focusField = (e) => {
  //     e.preventDefault();
  //     setFocusValue(e.target.value);
  //     console.log("Focus:", focusValue);
  //   };

  const handleSubmit = async (e) => {
    console.log("MZ HIT - Focus.HandleSubmit:", e.target.value);
    e.preventDefault();
    try {
      //   const newFocus = { focus: focusValue };
      const updatedFocus = await __UpdateFocus(focusValue);
      console.log("Focus updated:", updatedFocus);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = async (e) => {
    console.log("MZ HIT Focus.handleChange:", e.target.value);
    e.preventDefault();
    try {
      const updatedFocus = await __UpdateFocus(e.targetValue);
      console.log("MZ within handleChange; Focus updated:", updatedFocus);
      setFocusValue(updatedFocus);
    } catch (error) {
      throw error;
    }
  };

  const handleClick = (e) => {
    console.log("MZ HIT Focus.handleClick:", e.target.value);
    //this is what is firing with either an enter keystroke or click
    e.preventDefault();
    setFocusValue(e.target.value);
  };

  const clearFocus = (e) => {
    setFocusValue('')
  }

  if (props.account === null || props.account === undefined) {
    return null;
  } else if (props.account.focus !== 'NULL' || props.account.focus !== "") {
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextInput
            name="focus"
            value={props.account.focus}
            placeholder="Focus for today?"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={(e) => handleClick(e)}>Add</button>
        </form>
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
