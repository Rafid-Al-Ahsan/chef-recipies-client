/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap';

const About = () => {

    const backgroundStyle = {
        backgroundImage: 'url("https://demos.hogash.com/phaeton-restaurant-html/images/about-chefs.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        width: '100%',
        height: '25rem',
      
      }
    return (
        <div className='container my-5'>
           <div className='row'>
            <div className='col-sm-12 col-md-6'>  
                        <h2>ABOUT</h2><br />
                        <p>Our Chefs offer you perfect cooking, best served dishes with fresh ingredients and old recipes. We have only carefully sourced and seasonal ingredients in our disposal to make rustic dishes. We provide you with daily self-made bread, sourdough pizza, roasted fish-meat-vegetables and many more.</p>
                        <Button className='btn py-3 px-5' style={{backgroundColor: "white", color: 'black', borderColor: "black",}}>READ MORE</Button>

                </div>
                <div className='col-sm-12 col-md-6'>
                    <div style={backgroundStyle}></div>
                </div>

           </div>

            
        </div>
    );
};

export default About;