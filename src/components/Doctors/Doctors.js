import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DoctorData from '../DoctorData/DoctorData';
import './Doctors.css';

const Doctors = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('./doctors.JSON')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, []);
    return (
        <Container>
            <div className='specialist'>
            <h2>Our Specialist</h2>
            <div className='doctor-service'>
            {
                 doctor.map(doctor => <DoctorData
                kay= {doctor.id}
                doctor = {doctor}
                ></DoctorData>)
            }
        </div>
            </div>
        </Container>
    );
};

export default Doctors;