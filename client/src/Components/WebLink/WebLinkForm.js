// Basic react imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { __CreateWeblink } from "../../services/WeblinkService";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
//import your styles

//declare your function component
const WebLinkForm = (props) => {
  const { setNeedsRefresh } = props;
  const [newLink, setLink] = useState('');

  const [formError, setFormError] = useState(false);

  // track input of link
  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    console.log("HIT formFieldChange: ", fieldName, fieldValue);
    switch (fieldName) {
      case "url":
        setLink(fieldValue);
    }
  };

  //    Calling to db to store created link and set new link state
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendLink = {
      url: newLink,
    };
    try {
      const addLink = await __CreateWeblink(sendLink);
      setNeedsRefresh(true);
    } catch (error) {
      setFormError(true);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="todo-form">
        <input
          type="text"
          id="url"
          name="url"
          value={newLink}
          placeholder="https://example.com"
          size="30"
          required
          onChange={handleChange}
        ></input>
          <FontAwesomeIcon
            className="fas fa-white"
            icon={faPlusSquare}
            onClick={handleSubmit}
          />
      </form>
    </div>
  );
};

export default WebLinkForm;
