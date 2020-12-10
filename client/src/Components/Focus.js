import React, { useState, useEffect } from "react";
import { __UpdateFocus } from "../services/AccountService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const Focus = (props) => {
  const { setNeedsRefresh } = props;
  const [focusValue, setFocusValue] = useState(null);

  useEffect(() => {
    if (focusValue === null) {
      setFocusValue(props.account.focus);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sentValues = { focus: focusValue };
      const updatedFocus = await __UpdateFocus(sentValues);
      setNeedsRefresh(true);
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFocusValue(e.target.value);
  };

  const clearFocus = async (e) => {
    e.preventDefault();
    try {
      const updatedFocus = await __UpdateFocus({ focus: "" });
      setNeedsRefresh(true);
    } catch (error) {
      throw error;
    }
  };

  // is this if statement still necessary following changes to signin/signup?
  if (props.account === null || props.account === undefined) {
    return null;
  } else if (props.account.focus === "NULL" || props.account.focus === "") {
    return (
      <div>
        <span>Focus</span>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="focus"
            value={focusValue}
            placeholder="Focus for today?"
            onChange={handleChange}
          />
          <FontAwesomeIcon 
          className="fas fa-white"
          icon={faPlusSquare}
          />
          </form>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Focus on:</h3>
        <p>
          {props.account.focus}
          <FontAwesomeIcon
            className="fas fa-white"
            icon={faCheckSquare}
            onClick={clearFocus}
          />
        </p>
      </div>
    );
  }
};

export default Focus;
