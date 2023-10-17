/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Container className='w-25 mx-auto my-5'>
            <h3>Please Login</h3>
            <Form onSubmit="">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
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