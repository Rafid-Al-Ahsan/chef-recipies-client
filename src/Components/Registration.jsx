/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <Container className='w-25 mx-auto my-5'>
        <h3>Please Register</h3>
        <Form onSubmit="">
        <Form.Group className="mb-3">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Photo URL" required/>

        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Your Name" required/>

        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
                onClick=""
                type="checkbox" 
                name="accept" 
                label={<>Accept <Link to="/terms">Terms and Conditions</Link></>}
            />
        </Form.Group>

        
        <Button variant="primary" /*disabled={!accepted}*/ type="submit" >
            Register
        </Button>

        <br />

        <Form.Text className="text-secondary">
           Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>

        <Form.Text className="text-success">
           
        </Form.Text>
        <Form.Text className="text-danger">
           
        </Form.Text>
        </Form>
    </Container>
    );
};

export default Registration;