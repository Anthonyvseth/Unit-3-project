import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

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
              variant='secondary'
              onClick={handleShow}>
            <FontAwesomeIcon
                className="fas fa-white"
                icon={faList}
            />
          </button>

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
      </div>
    </div>
  );
};
