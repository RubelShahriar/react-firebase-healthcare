import React from 'react';
import './AboutUs.css';
import image from '../images/doctor-image.jpeg';
import { Container } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <Container>
            <div className='about'><h2>About Us</h2>
            <div className="about-us">
            <div className="about-text">
                <h3> Know more About Us</h3>
                <p>Improved patient health outcomes: Experience and scientific knowledge show that patients receiving this kind of care are happier, more satisfied, heal more quickly, are in less pain and stay healthier. Patient-centred model improves quality of life, apart from being a profitable business model</p>
                <p>Round the clock care, which will help stop any new infections, and keep the present ones in check as they are being treated. so that quick action can be taken.</p>
            </div>
            <div className="about-image">
                <img src={image} alt=""></img>
            </div>
        </div>
        </div>
        </Container>
    );
};

export default AboutUs;