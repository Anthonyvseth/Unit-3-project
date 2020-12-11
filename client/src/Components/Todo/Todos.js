import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default (props) => {
  const { account, setNeedsRefresh } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <>
          <button
              className={'btn-list'}
              // variant='secondary'
              onClick={handleShow}>
            <FontAwesomeIcon
                className="fas fa-white"
                icon={faList}
                inverse
            />
          </button>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
          >
            <Modal.Header className='center-words' closeButton>
              <Modal.Title> To Do List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TodoForm
                  {...props}
                  account={account}
                  setNeedsRefresh={setNeedsRefresh}
                />{' '}
              <TodoList account={account} setNeedsRefresh={setNeedsRefresh} />
            </Modal.Body>
          </Modal>
        </>
      </div>
    </div>
  );
};
