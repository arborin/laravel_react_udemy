import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

export default function Summary() {
    return (
        <>
            <Container className='text-center mt-5 mb-5'>
                <Row className='countSection'>
                    <Col lg={8}>
                        <Row>
                            <Col>
                                <h1>25000</h1>
                                <h4 >Students worldwide</h4>
                                <hr />
                            </Col>
                            <Col>
                                <h1>25000</h1>
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
                                    <Card.Title>title</Card.Title>
                                    <Card.Text>tesxt</Card.Text>
                                    <Card.Text>tesxt</Card.Text>
                                    <Card.Text>tesxt</Card.Text>
                                    <Card.Text>tesxt</Card.Text>
                                </Card.Body>

                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
