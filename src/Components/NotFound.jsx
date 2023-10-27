/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {

    const backgroundStyle = {
        backgroundImage: 'url("https://images.unsplash.com/photo-1650692201357-3b1b15469952?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        width: '100%',
        height: '30rem',
      }
    return (
        <div >
            <Container className='my-5'>
                <Row>
                    <Col sm={12} className="text-center fw-bold fs-2">Ooops! Page Not FOund. Check your url:(</Col>
                    <Col sm={12} style={backgroundStyle}>
                    
                      
                    </Col>
               
                    
                </Row>


            </Container>

        </div>
    );
};

export default NotFound;