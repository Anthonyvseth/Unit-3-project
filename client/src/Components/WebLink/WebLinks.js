import React from 'react';
import WebLinkForm from './WebLinkForm';
import WebLinkList from './WebLinkList';

const WebLinks = (props) => {
  const { setNeedsRefresh} = props
  // console.log('weblinks: ', props);
  // const { weblinks } = props.account;

  return (
    <div className='list'>
      <WebLinkList {...props} setNeedsRefresh={setNeedsRefresh} />
      <WebLinkForm {...props} setNeedsRefresh={setNeedsRefresh} />
    </div>
  );
};

export default WebLinks;
