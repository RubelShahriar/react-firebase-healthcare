import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';
import './Services.css';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Container>
            <div className='service'>
                <h2>Our Services</h2>
            <Row xs={1} md={3} className="g-4"> 
            {
                service.map(service => <ServiceData
                key = {service.id}
                service = {service}
                ></ServiceData>)
            }
            </Row>
        </div>
        </Container>
    );
};

export default Services;