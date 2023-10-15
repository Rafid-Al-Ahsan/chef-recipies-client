/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col sm={12} md={5}>
            <h5>Our Story</h5>
            <p className='mt-3'>
              Our story begins in the enchanting town of Tuscany, where our passionate founder, Antonio, grew up surrounded by the rich traditions of Italian cuisine. From an early age, he learned the art of crafting pasta from scratch, slow-simmering sauces, and selecting the finest, freshest ingredients from local markets.
            </p>
          </Col>
          <Col sm={12} md={3}>
            <h5 className='mb-3'>Useful Links</h5>
            <ul>
              <li>
                <Link>Menu</Link>
              </li>
              <li>
                <Link href="#">Reservation</Link>
              </li>
              <li>
                <Link href="#">Catering</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <Row>
              <Col sm={8} style={{padding:"0rem"}}>
                <h5>Search</h5>
                <Form>
                  <Form.Group controlId="search" >
                    <Form.Control type="text" placeholder="Search..." />
                  </Form.Group>
                </Form>
              </Col>
              <Col sm={4} className="search-button-col " >
              <h5 style={{visibility: "Hidden"}}>Search</h5>
                <Button variant="primary" type="submit" className="search-button">
                  Search
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <h6>All Rights Reserved &copy; 2023</h6>
      </Container>
    </footer>
  );
};

export default Footer;
