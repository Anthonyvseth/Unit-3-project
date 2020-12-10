import React from 'react';
// Import delete service
import { __DeleteWeblink } from '../../services/WeblinkService';

const WebLink = (props) => {
  // destructed weblinks from props for url access
  const { weblinks, setNeedsRefresh } = props;

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await __DeleteWeblink(weblinks.id);
      setNeedsRefresh(true)
    } catch (error) {}
  };

  return (
    <div>
      <a href={`https://${weblinks.url}`} className='webLink'>
        {weblinks.url}
      </a>
      <button onClick={(e) => handleDelete(e)}>x</button>
    </div>
  );
};

export default WebLink;
