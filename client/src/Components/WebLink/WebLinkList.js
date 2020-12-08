import React, { useState } from 'react';
import Links from './Link';
import AddLink from './AddLink';

const WebLinkList = () => {
  const [links, manageLinks] = useState([]);
  const [newLink, setLink] = useState('');

  const addLink = () => {
    let myNewLink = [...links, newLink];
    manageLinks(myNewLink);
    setLink('');
  };

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const deleteLink = (index) => {
    const linkArr = [...links];
    linkArr.splice(index, 1);
    console.log(links);
    manageLinks(linkArr);
  };

  return (
    <div className='links'>
      <AddLink handleChange={handleChange} addLink={addLink} value={newLink} />
      <Links links={links} deleteLink={deleteLink} />
    </div>
  );
};

export default WebLinkList;
