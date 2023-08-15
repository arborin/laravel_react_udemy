import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player'

export default function Video() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <Row className='mb-5 mt-5'>

                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>

                    <Modal size="lg" show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    url='https://www.youtube.com/watch?v=CEY-olOo5Rg'
                                    width='100%'
                                // height='100%'
                                />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </>
    );
}
