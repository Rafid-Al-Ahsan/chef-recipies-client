/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import '../shared/Header.css';
  
const Header = () => {

    const {user, logout} = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
        .then()
        .catch(error => console.log(error))
    };

    console.log(user);

    return (
        <div>
    <Navbar className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="#home">Italiano Gusto</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="mx-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink className="my-link" to="/blog">Blog</NavLink>
            </Nav>
            <div >
            {user &&     
                <Image
                src={user?.photoURL}
                alt="Profile Photo"
                roundedCircle // Apply Bootstrap's roundedCircle class
                fluid // Make the image responsive
                style={{width: "3rem", height: "3rem"}}
                title={user?.displayName}
            />}

            </div>
            <Navbar.Text className='mx-3'>
                {/* <Link to='/login'><Button variant="secondary">Login</Button></Link>  */}
                {user ? <Button onClick={handleLogOut}  variant="secondary">Logout
                </Button> :
                <Link to='/login'><Button variant="secondary">Login</Button></Link> 
                                }
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </div>
    );
};

export default Header;