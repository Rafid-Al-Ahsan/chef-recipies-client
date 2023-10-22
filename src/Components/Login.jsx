/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
import { Icon } from '@iconify/react';

// import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


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

    const provider = new GithubAuthProvider();

    const githubLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => { 
            const credential = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const credential = result.user;
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message);
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

            <br /><br />
            <Button onClick={githubLogin} className='btn btn-light btn-outline-secondary w-100'><Icon icon="mdi:github" color="black" width="37" height="37"/>  Login using Github</Button>
            <br /><br />
            <Button onClick={googleLogin} className='btn btn-light btn-outline-warning w-100'><Icon icon="flat-color-icons:google" color="black" width="34" height="34" />  Login using Google</Button>

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