/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container className='my-5'>
              <Row>
                <Col sm={12}>
                    <p className='fw-bold'>Q1) Tell us the differences between uncontrolled and controlled components.</p>
                    <p><span className="fw-bold">Answer:</span> Control component state and behaviour are managed by it parent component whereas, uncontrolled components behaviour and state are manged by themselves.</p>
                    <p></p>
                    <p className='fw-bold'>Q2) How to validate React props using PropTypes</p>
                    <p><span className="fw-bold">Answer:</span> Firstly we would define the proptype for our component. There are different proptypes PropTypes.string, PropTypes.number, and PropTypes.bool. We can also use the optional 'isRequired' property to indicate that a prop is required. We would also need to install the libary if it is not installed using 'npm install prop-types'.</p>
                    <p></p>
                    <p className='fw-bold'>Q3) Tell us the difference between nodejs and express js.</p>
                    <p><span className="fw-bold">Answer:</span> NodeJS is a javascript runtime environment for running JavaScript programs and is used to build server-side applications. Express JS is a Node. js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy</p>   
                    <p className='fw-bold'>Q4) What is a custom hook, and why will you create a custom hook?</p>
                    <p><span className="fw-bold">Answer:</span> A custom hook is a reusable javascript function which can be used to add unique functionality. Custom hooks starts with the name "use" followed by a descriptive name. Custom hooks enable us to encapsulate complex logic into a single function thus, make the code reuseable and keeps components focused on rendering.</p>

                </Col>
              </Row>

            </Container>
        </div>
    );
};

export default Blog;