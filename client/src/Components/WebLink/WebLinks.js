import React from 'react';
import WebLinkForm from './WebLinkForm';
import WebLinkList from './WebLinkList';

const WebLinks = (props) => {
  // console.log('weblinks: ', props);
  // const { weblinks } = props.account;

  return (
    <div className='list'>
      <WebLinkList {...props} />
      <WebLinkForm {...props} />
    </div>
  );
};

export default WebLinks;
