import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export default function TopNavitation() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <Nav.Link href="#action2">Service</Nav.Link>
                            <Nav.Link href="#action2">Cources</Nav.Link>
                            <Nav.Link href="#action2">Portfilio</Nav.Link>
                            <Nav.Link href="#action2">Contact us</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
