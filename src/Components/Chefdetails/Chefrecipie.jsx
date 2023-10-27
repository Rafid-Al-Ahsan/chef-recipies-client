/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState }  from 'react';
import { Button, Card } from 'react-bootstrap';

// Awesome react components
import { Icon } from '@iconify/react';

const Chefrecipie = ({recipieid, chef}) => {

// console.log(recipieid);
// const recipie = recipieid-1;

// recipieid && console.log(chef.recipieDetails[recipieid-1].name);



    return (
        <div>
            <Card>
                <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title className='text-center fw-bold fs-4 '>{
                        recipieid && 
                        chef.recipieDetails[recipieid-1].name}
                        </Card.Title>
                            <Card.Text className='my-4'>

                                {recipieid && <span className='fw-semibold fs-5'>Ingredients</span>} 


                               {
                                 
                                 recipieid && chef.recipieDetails[recipieid-1].ingredients.map(ingredient => <span style={{display: "block"}} key={ingredient}>{ingredient}</span>)
                               }
                            </Card.Text>

                            <Card.Text className='my-4'>
                                {recipieid && <span  style={{display: "block"}} className='fw-semibold fs-5'>Method of Cooking</span>} 
                                {recipieid && chef.recipieDetails[recipieid-1].instructions}
                            </Card.Text>

                                
                    </Card.Body>
            </Card>
        </div>
    );
};

export default Chefrecipie;