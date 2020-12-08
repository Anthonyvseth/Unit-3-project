import React from 'react';

const Links = (props) => {
  return (
    <ul>
      {props.links.map((link, index) => (
        <li key={index}>
          {link}
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Links;
