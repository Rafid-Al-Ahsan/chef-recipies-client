/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.config';


const Registration = () => {

    const auth = getAuth(app);

    const [error , setError] = useState('');
    const [success , setSuccess] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length<6){
            setError('Please add atleast 6 characters in your password');
            return;
        }

        console.log(photo,name,email,password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setSuccess("User created successful! Please go to the login page and login");
            event.target.reset();
            setIsChecked(false);
        })
        .catch(error => {
            setError(error.message);
        })
        


    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        
      };



    return (
        <Container className='w-25 mx-auto my-5'>
        <h3>Please Register</h3>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Photo URL" />

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
                onChange={handleCheckboxChange}
                type="checkbox" 
                name="accept" 
                label={<>Accept <Link to="/terms">Terms and Conditions</Link></>}
            />
        </Form.Group>

        
        <Button variant="primary" /*disabled={!accepted}*/ type="submit" disabled={!isChecked}>
            Register
        </Button>

        <br />

        <Form.Text className="text-success">
              {success}
        </Form.Text>

        <br /> 

        <Form.Text className="text-danger">
              {error}
        </Form.Text>

        <br />

        <Form.Text className="text-secondary">
           Already Have an Account? <Link to="/login">Login</Link>
        </Form.Text>


        </Form>
    </Container>
    );
};

export default Registration;