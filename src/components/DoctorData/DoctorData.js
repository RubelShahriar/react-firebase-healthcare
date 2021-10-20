import React from 'react';
import { Container } from 'react-bootstrap';
import './DoctorData.css';

const DoctorData = (props) => {
    const {name, image, degree, description} = props.doctor;
    return (
            <Container>
                <div  className='doctors-intro'>
                    <div className='image'>
                        <img src={image} alt=''></img>
                    </div>
                    <div className='text'>
                        <h3>{name}</h3>
                        <h4>{degree}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </Container> 
    );
};

export default DoctorData;