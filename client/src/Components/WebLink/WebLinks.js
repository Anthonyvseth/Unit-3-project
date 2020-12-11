import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";


import WebLinkForm from './WebLinkForm';
import WebLinkList from './WebLinkList';
import '../../styles/weblinks.css'

const WebLinks = (props) => {
    const {setNeedsRefresh} = props;
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
                <Modal.Header className='weblinks-background-color' closeButton>
                    <Modal.Title>
                        Favorites
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body centered="true" className='weblinks-background-color'>
                    <WebLinkForm {...props} setNeedsRefresh={setNeedsRefresh}/>
                    <WebLinkList {...props} setNeedsRefresh={setNeedsRefresh}/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default WebLinks;
