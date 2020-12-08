// Basic react imports
import React from 'react';
// Import ToDo Update Service
import __UpdateWebLink from '../../services/WebLinkService';
// Import Todo Delete Service
import __DeleteWebLink from '../../services/WebLinkService';

//import your styles

//declare your function component

// function to mark todo as complete
// call TodoService with todo ID and update complete: true (directly access ID from props)

// function to delete todo
// call ToDo Delete Service with todo ID (directly access ID from props)

//return statement that includes all html to be rendered
// including:
//  - description
//  - checkbox to marks as complete, when checked calls function above
//  - icon to mark deleted, when clicked calls function above
// use either html ID or name fields to hold the todo item ID, which

const AddLink = (props) => {
  return (
    <div>
      <label>URL:</label>
      <input
        type='text'
        name='link'
        value={props.value}
        onChange={props.handleChange}
      />
      <button onClick={props.addLink}>Add</button>
    </div>
  );
};

export default AddLink;
