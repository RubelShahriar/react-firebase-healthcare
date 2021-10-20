import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCheck} />

const Pricing = () => {
    return (
        <Container>
            <div className='pricing'>
            <h2>Price Table</h2>
            <p>The optimum ratio of price and quality responsible and conscientious approach</p>
            <div className='pricing-container'>
                <div className='pricing-item'>
                    <div className='diagnostics'>
                            <h4>Diagnostics</h4>
                            <p>Feature laboratory</p>
                        </div>
                        <div>
                            <h3>$50</h3>
                            <ul>
                                <li>{element}<span>Ultrasound diagnostics</span></li>
                                <li>{element}<span>Laboratory diagnostics</span></li>
                                <li>{element}<span>X-ray diagnostics scan</span></li>
                                <li>{element}<span>Functional diagnostics</span></li>
                                <li>{element}<span>Endoscopic diagnostics</span></li>
                            </ul>
                            <Button className='btn' variant="info">Booking</Button>{' '}
                        </div>
                </div>
                <div className='pricing-item'>
                    <div className='diagnostics'>
                            <h4>Laboratory and diagnostic</h4>
                            <p>Feature laboratory</p>
                        </div>
                        <div>
                            <h3>$50</h3>
                            <ul>
                                <li>{element}<span>Ultrasound diagnostics</span></li>
                                <li>{element}<span>Laboratory diagnostics</span></li>
                                <li>{element}<span>X-ray diagnostics scan</span></li>
                                <li>{element}<span>Functional diagnostics</span></li>
                                <li>{element}<span>Endoscopic diagnostics</span></li>
                            </ul>
                            <Button className='btn' variant="info">Booking</Button>{' '}
                        </div>
                </div>
                <div className='pricing-item'>
                    <div className='diagnostics'>
                            <h4>Computed Tomography</h4>
                            <p>Feature laboratory</p>
                        </div>
                        <div>
                            <h3>$50</h3>
                            <ul>
                                <li>{element}<span>Ultrasound diagnostics</span></li>
                                <li>{element}<span>Laboratory diagnostics</span></li>
                                <li>{element}<span>X-ray diagnostics scan</span></li>
                                <li>{element}<span>Functional diagnostics</span></li>
                                <li>{element}<span>Endoscopic diagnostics</span></li>
                            </ul>
                            <Button className='btn' variant="info">Booking</Button>{' '}
                        </div>
                </div>
                <div className='pricing-item'>
                    <div className='diagnostics'>
                            <h4>Magnetic Resonance</h4>
                            <p>Feature laboratory</p>
                        </div>
                        <div>
                            <h3>$50</h3>
                            <ul>
                                <li>{element}<span>Ultrasound diagnostics</span></li>
                                <li>{element}<span>Laboratory diagnostics</span></li>
                                <li>{element}<span>X-ray diagnostics scan</span></li>
                                <li>{element}<span>Functional diagnostics</span></li>
                                <li>{element}<span>Endoscopic diagnostics</span></li>
                            </ul>
                            <Button className='btn' variant="info">Booking</Button>{' '}
                        </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Pricing;