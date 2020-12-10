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
      <a className="webLink" href={`https://${weblinks.url}`}>
        <img class="icon-favicon" src={`https://icons.duckduckgo.com/ip2/${weblinks.url}.ico`}/>
        {weblinks.url}
      </a>
      <button onClick={(e) => handleDelete(e)}>x</button>
    </div>
  );
};

export default WebLink;
