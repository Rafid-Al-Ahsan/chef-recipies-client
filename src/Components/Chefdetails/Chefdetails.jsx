/* eslint-disable no-unused-vars */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';

// Awesome react components
import { Icon } from '@iconify/react';
import { useLoaderData } from 'react-router-dom';

const Chefdetails = () => {
    const chef = useLoaderData();
    const {id, name, years, recipies, likes, image, description} = chef;
    // console.log(id, name, years, recipies, likes, image, description);
    return (
         <div>
            <Container className='my-5'>
                <Row>
                    <Col sm={12} md={8}>
                    <Card>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                              {description}
                            </Card.Text>
                            <Card.Text>
                                <span style={{fontWeight: "bold"}}>Years of Experience: </span>{years}<br />
                                <span style={{fontWeight: "bold"}}>No of Recipies: </span>{recipies}
                            </Card.Text>
                            <Card.Text>
                                <Icon icon="mdi:thumb-up" color="#1298ee" width="50" height="40" />{likes}
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    </Col>
                    <Col sm={12} md={4}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione praesentium corporis, exercitationem ducimus odio quae laudantium tempora eveniet fuga aliquam nam dolores debitis amet dignissimos porro, laborum tempore enim cum. Ducimus sed mollitia quasi similique tempore autem nam tempora aliquam dignissimos eos id, maxime placeat sequi odio itaque laborum omnis sapiente perferendis officiis quas? Molestias sunt velit accusantium necessitatibus nihil dolorum laboriosam non esse. Consequuntur sapiente eaque beatae ipsum voluptas dignissimos quia facilis amet ipsa natus reiciendis reprehenderit, blanditiis ab ratione perspiciatis veritatis, eligendi aspernatur dolores aliquid! Ad atque modi aspernatur debitis, consectetur porro maiores error aliquam accusantium soluta id.</Col>
                    
                </Row>


            </Container>
         </div>
    );
};

export default Chefdetails;