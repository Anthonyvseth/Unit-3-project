import React from 'react';
import WebLink from './WebLink';

const WebLinkList = (props) => {
  // console.log('listlink: ', props.account.weblinks);
  // destructed weblinks from props for mapping access and passing for WebLink
  const { weblinks } = props.account;
  console.log('webLLL: ', weblinks);

  if (weblinks !== null && weblinks !== undefined) {
    return (
      <div>
        {weblinks.map((weblink, index) => (
          <WebLink weblinks={weblink} key={index} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default WebLinkList;
