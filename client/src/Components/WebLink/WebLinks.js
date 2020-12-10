import React, { useState } from 'react';
import WebLinkForm from './WebLinkForm';
import WebLinkList from './WebLinkList';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WebLinks = (props) => {
  const { setNeedsRefresh } = props;
  // console.log('weblinks: ', props);
  // const { weblinks } = props.account;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='list'>
      <Button variant='secondary' onClick={handleShow}>
        Links
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        closeLabel={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <WebLinkForm {...props} setNeedsRefresh={setNeedsRefresh} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WebLinkList {...props} setNeedsRefresh={setNeedsRefresh} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WebLinks;
