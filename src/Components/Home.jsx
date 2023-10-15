/* eslint-disable no-unused-vars */
import React from 'react';
import About from './About';
import Hotdish from './Hotdish/Hotdish';


const Home = () => {


    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%',
    };

    const backgroundStyle = {
        backgroundImage: 'url("https://demos.hogash.com/phaeton-restaurant-html/images/slide1.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        width: '100%',
        height: '40rem',
      
      }
      
      const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)', 
      };

      const textStyle = {
        position: 'absolute',
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        color: 'white', 
        fontSize: '4rem', 
      };
    

    return (

        <div>
            <div style={containerStyle}>
                <div style={backgroundStyle}></div>
                <div style={overlayStyle}></div>
                <div style={textStyle}>
                    <p>Delicious Italian Cuisines</p>
                    <div className='d-flex justify-content-center'>
                        <button className="btn py-3 px-5" style={{backgroundColor: "black", color: 'white', }}>SEE OUR MENU</button>
                    </div>
                </div>
            </div>      

            <About></About>
            <Hotdish></Hotdish>

     


        </div>


    );
};

export default Home;