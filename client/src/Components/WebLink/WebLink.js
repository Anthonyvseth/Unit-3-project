import React from 'react';
// Import delete service
import { __DeleteWeblink } from '../../services/WeblinkService';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

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
        <img
          class="icon-favicon"
          src={`https://icons.duckduckgo.com/ip2/${weblinks.url}.ico`}
        />
        {weblinks.url}
      </a>
      <FontAwesomeIcon 
        className="fas fa-white"
        icon={faTimesCircle}
        onClick={(e) => handleDelete(e)}
      />
    </div>
  );
};

export default WebLink;
