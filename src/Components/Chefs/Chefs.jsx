/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Awesome react components
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';



const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
         fetch('https://chef-recipies-server-2df3xsme0-rafids-projects.vercel.app/chef')
         .then(response => response.json())
         .then(data => setChefs(data))
         .catch(error => console.error(error))
    },[])




  return (
    <div className='container mt-5'>
        <h1 className='text-center mb-3'>Our Chefs</h1>
        <h4 className='text-center mb-5'>Swipe to the right to see more of our chefs</h4>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <div>
        {/* <SwiperSlide>    
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://templatekit.jegtheme.com/gulliver/wp-content/uploads/sites/377/2023/05/chef-cooking-salad.jpg" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </SwiperSlide> */}

        {chefs.map(chef => <SwiperSlide key={chef.id} chef={chef} style={{display: "inline-block"}}>    
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={chef.image} />
            <Card.Body>
            <Card.Title>{chef.name}</Card.Title>
            <Card.Text>
            <span style={{fontWeight: "bold"}}>Years of Experience: </span>{chef.years}<br />
            <span style={{fontWeight: "bold"}}>No of Recipies: </span>{chef.recipies}
            </Card.Text>
            <Card.Text>
            <Icon icon="mdi:thumb-up" color="#1298ee" width="50" height="40" />{chef.likes}
            </Card.Text>
            <Link to={`chefdetails/${chef.id}`}><Button variant="primary">View Recipies</Button></Link>
            </Card.Body>
            </Card>
        </SwiperSlide>)}

        </div>
        

        </Swiper>
    </div>
    
  );
};

export default Chefs;

