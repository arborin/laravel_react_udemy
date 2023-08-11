import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row, Card } from 'react-bootstrap'
import CountUp from 'react-countup';

export default function Summary() {
    return (
        <>
            <Container className='text-center mt-5 mb-5'>
                <Row className='countSection'>
                    <Col lg={8}>
                        <Row>
                            <Col>
                                <h1>

                                    <CountUp start={0} end={100}>
                                        {({ countUpRef, start }) => (
                                            <div>
                                                <span ref={countUpRef} />
                                                <button onClick={start}>Start</button>
                                            </div>
                                        )}
                                    </CountUp>
                                </h1>
                                <h4 >Students worldwide</h4>
                                <hr />
                            </Col>
                            <Col>
                                <h1><FontAwesomeIcon icon={faEnvelope} /> 25000</h1>
                                <h4>Students worldwide</h4>
                                <hr className='w-25' />
                            </Col>
                            <Col>
                                <h1>25000</h1>
                                <h4>Students worldwide</h4>
                                <hr />
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Card.Text><FontAwesomeIcon className={"text-success"} icon={faCheckSquare}></FontAwesomeIcon>title</Card.Text>
                                    <Card.Text><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>title</Card.Text>
                                    <Card.Text><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>title</Card.Text>
                                    <Card.Text><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>title</Card.Text>
                                    <Card.Text><FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>title</Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row >
            </Container>
        </>
    )
}
