/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Card } from 'react-bootstrap';

// Awesome react components
import { Icon } from '@iconify/react';
import { useLoaderData } from 'react-router-dom';
import ChefProfile from './ChefProfile';
import Chefrecipie from './Chefrecipie';

const Chefdetails = () => {
    const chef = useLoaderData();
    // const {id, name, years, recipies, likes, image, description, recipieDetails} = chef;
    // // console.log(id, name, years, recipies, likes, image, description);
    // // console.log(recipieDetails);
    // const recipiNames = recipieDetails.map(recipie => recipie.name);
    // // console.log(recipiNames);

    
    const [recipieId, setRecipieId] = useState();
    const [selected, setSelected] = useState();


    const getRecipieId = (id) => {
        setRecipieId(id);
    }

    // console.log(chef.recipieDetails.find(recipie => recipie.id == recipieId));



    return (
         <div>
            <Container className='my-5'>
                <Row>
                    <Col sm={12} md={8}>
                        <ChefProfile chef={chef} getRecipieId={getRecipieId} ></ChefProfile>

                        {/* <Card>
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

                                <h4>Click on a recipie to show Ingredients and Instructions</h4>
                                {recipieDetails.map(recipie =>
                                     <Button key={recipie.id} className='btn btn-warning' style={{display: "block", margin:"1rem 0rem"}}>{recipie.name}</Button>)}  
                            </Card.Body>
                    </Card> */}

                    </Col>
                    <Col sm={12} md={4}>
                        <Chefrecipie recipieid={recipieId} chef={chef}></Chefrecipie>
                    </Col>
                    
                </Row>


            </Container>
         </div>
    );
};

export default Chefdetails;