import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceData.css';

const ServiceData = (props) => {
    const {name, image, description} = props.service;
    return (
        <div className='coursecomp'>
              <Col>
                <Card >
                  <div className='image'>
                  <Card.Img variant="top" src={image} />
                  </div>
                  <div className='text'>
                  <Card.Body>
                    <Card.Title><h3>Name: {name}</h3></Card.Title>
                    <Card.Text>Duration: {description}</Card.Text>
                  </Card.Body>
                  <div>
                  <Link className='link' to="/log-in">Details</Link>
                  </div>
                  </div>
                </Card>
              </Col> 
        </div>
    );
};

export default ServiceData;