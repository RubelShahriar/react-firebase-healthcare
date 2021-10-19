import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageOne from '../images/hero-01.jpeg';
import imagetwo from '../images/hero-02.jpeg';
import imageThree from '../images/hero-03.jpeg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel className='banner'>
  <Carousel.Item>
    <img
      className="d-block w-100" 
      src={imageOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Best Medical & Health Care Center</h1>
      <p>Helping the poor and the needy is one of the most important things in life. Providing healthcare and helping people will make you feel good .If you want to escape from the emotional and physical problems, come to us</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagetwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Best Medical & Health Care Center</h1>
      <p>Helping the poor and the needy is one of the most important things in life. Providing healthcare and helping people will make you feel good. If you want to escape from the emotional and physical problems, come to us</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imageThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>Best Medical & Health Care Center</h1>
      <p>Helping the poor and the needy is one of the most important things in life. Providing healthcare and helping people will make you feel good . If you want to escape from the emotional and physical problems, come to us</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;