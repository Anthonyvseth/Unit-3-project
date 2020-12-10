import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default (props) => {
  const { account, setNeedsRefresh } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <>
          <Button variant='secondary' onClick={handleShow}>
            Todo's
          </Button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <TodoForm
                  {...props}
                  account={account}
                  setNeedsRefresh={setNeedsRefresh}
                />{' '}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TodoList account={account} setNeedsRefresh={setNeedsRefresh} />
            </Modal.Body>
          </Modal>
        </>
        {/* <div className='mb2'>
          <DropdownButton
            variant='secondary'
            id='dropdown-item-button'
            title='Todos'
            drop='left'
          >
            <Dropdown>
              <div>
                <TodoForm
                  {...props}
                  account={account}
                  setNeedsRefresh={setNeedsRefresh}
                />
              </div>
            </Dropdown>
            <Dropdown.Item as='button'>
              <div>
                <TodoList account={account} setNeedsRefresh={setNeedsRefresh} />
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <br></br> */}
      </div>
    </div>
  );
};
