import React from 'react';
import WebLink from './WebLink';

const WebLinkList = (props) => {
  const { setNeedsRefresh } = props
  const { weblinks } = props.account;

  if (weblinks !== null && weblinks !== undefined) {
    return (
      <div>
        {weblinks.map((weblink, index) => (
          <WebLink
            weblinks={weblink}
            key={index}
            setNeedsRefresh={setNeedsRefresh} />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default WebLinkList;
