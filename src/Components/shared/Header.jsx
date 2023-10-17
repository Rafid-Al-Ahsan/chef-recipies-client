/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
  
const Header = () => {
    return (
        <div>
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="mx-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Feature</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Navbar.Text>
                <Link to='/login'><Button variant="secondary">Login</Button></Link> 
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
};

export default Header;