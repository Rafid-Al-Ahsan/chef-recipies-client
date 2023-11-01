/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Awesome react components
import { Icon } from '@iconify/react';


const ChefProfile = ({chef, getRecipieId}) => {

    const {id, name, years, recipies, likes, image, description, recipieDetails} = chef;   
    
    return (
        <div>
            <Card>
                {/* <Card.Img variant="top" src={image} /> */}
                <LazyLoadImage variant="top" src={image} />
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
                                     <Button key={recipie.id} onClick={()=> getRecipieId(recipie.id)}className='btn btn-warning' style={{display: "block", margin:"1rem 0rem"}}>{recipie.name}</Button>)}  
                    </Card.Body>
            </Card>

        </div>
    );
};

export default ChefProfile;