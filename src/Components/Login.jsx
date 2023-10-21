/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config'


const auth = getAuth(app);


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.emailfield.value;
        const password = form.passwordfield.value;
    
    
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})

    
        })
        .catch(error => {
            // console.error(error);
       })
     
    }

    return (
        <div>
            <Container className='w-25 mx-auto my-5'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="emailfield" placeholder="Enter email" required/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="passwordfield" placeholder="Password" required/>
            </Form.Group>


            
            <Button variant="primary" type="submit">
                Login
            </Button>

            <br />

            <Form.Text className="text-secondary">
               Don't have an account? <Link to="/register">Register</Link>
            </Form.Text>

            <Form.Text className="text-success">
               
            </Form.Text>
            <Form.Text className="text-danger">
               
            </Form.Text>
            </Form>
        </Container>

        </div>
    );
};

export default Login;