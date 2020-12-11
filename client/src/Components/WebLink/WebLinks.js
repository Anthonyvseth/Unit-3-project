import React, {useState} from 'react';
import WebLinkForm from './WebLinkForm';
import WebLinkList from './WebLinkList';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobeAmericas, faList} from "@fortawesome/free-solid-svg-icons";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WebLinks = (props) => {
    const {setNeedsRefresh} = props;
    // console.log('weblinks: ', props);
    // const { weblinks } = props.account;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='list'>
            <button
                className={'btn-list'}
                variant='secondary'
                onClick={handleShow}>
                <FontAwesomeIcon
                    className="fas fa-white"
                    icon={faGlobeAmericas}
                    inverse
                />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop='static'
                keyboard={false}
                closeLabel={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <WebLinkForm {...props} setNeedsRefresh={setNeedsRefresh}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <WebLinkList {...props} setNeedsRefresh={setNeedsRefresh}/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default WebLinks;
