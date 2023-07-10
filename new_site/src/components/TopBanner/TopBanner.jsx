import React from 'react'
import '../../asset/css/custom.css'
import { Container, Row, Col, Button } from 'react-bootstrap'


export default function TopBanner() {
    return (
        <>
            <Container fluid={true} className='topFixedBanner p-0'>
                <div className='topBannerOverlay'>
                    <Container className='topContent'>
                        <Row>
                            <Col className='text-center'>
                                <h1 className='topTitle'>React Learning </h1>
                                <h4 className='topSubTitle'>Learn step by step</h4>
                                <Button variant='primary'>Show More</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </>
    )
}
