/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState }  from 'react';
import { Button, Card } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chefrecipie = ({recipieid, chef}) => {

const [disable, setDisable] = useState(false);
// console.log(recipieid);
// const recipie = recipieid-1;

// recipieid && console.log(chef.recipieDetails[recipieid-1].name);

const notify = () =>{
    toast.success('Recipie added to favourites', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    setDisable(true);
}



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

                            <Card.Text className='my-4'>
                                {recipieid && <Button  onClick={() => notify()} disabled={disable} className='btn btn-primary'>Add to Favourite </Button>}
                                <ToastContainer />
                            </Card.Text>

                                
                    </Card.Body>
            </Card>
        </div>
    );
};

export default Chefrecipie;