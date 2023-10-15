/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Hotdish.css';

const hotdish = () => {

    const cuisineData = [
        {
          name: 'Pizza',
          imageSrc: 'https://templatekit.jegtheme.com/gulliver/wp-content/uploads/sites/377/2023/05/appetizer-served-on-a-plate.jpg', 
          description: 'A classic Italian dish with a thin crust topped with cheese, tomatoes, and various toppings.',
        },
        {
          name: 'Pasta Carbonara',
          imageSrc: 'https://templatekit.jegtheme.com/gulliver/wp-content/uploads/sites/377/2023/05/healthy-green-meal-prep-with-chicken-e1690389797718.jpg',
          description: 'A creamy pasta dish with eggs, cheese, pancetta, black pepper , olive oil, lettues and broklies',
        },
        {
          name: 'Lasagna',
          imageSrc: 'https://templatekit.jegtheme.com/gulliver/wp-content/uploads/sites/377/2023/05/chef-is-cooking-set-of-appetizers-e1690389779819.jpg', 
          description: 'A layered pasta dish made with sheets of lasagna noodles, ricotta cheese, meat sauce, and mozzarella.',
        },
        {
          name: 'Tiramisu',
          imageSrc: 'https://templatekit.jegtheme.com/gulliver/wp-content/uploads/sites/377/2023/05/chef-cooking-salad.jpg', 
          description: 'A popular Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
        },
      ];
      
    return (
        <div>
            <Container>
               <h2 className='text-center my-5'>OUR MOST HEALTHY AND FAVOURITE SERVINGS</h2>
              <Row>
                {cuisineData.map((cuisine, index) => (
                  <Col key={index} sm={6} md={4} lg={3}>
                    <Card className="cuisine-card mb-5 w-100">
                      <Card.Img variant="top" src={cuisine.imageSrc} alt={cuisine.name} />
                      <Card.Body>
                        <Card.Title>{cuisine.name}</Card.Title>
                        <Card.Text>{cuisine.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
        </div>
    );
};

export default hotdish;