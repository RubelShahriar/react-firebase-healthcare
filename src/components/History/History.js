import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faProcedures, faHospitalUser, faUserFriends} from '@fortawesome/free-solid-svg-icons'
import './History.css';
const element = <FontAwesomeIcon icon={faAmbulance} />
const elementone = <FontAwesomeIcon icon={faProcedures} />
const hospitalUser = <FontAwesomeIcon icon={faHospitalUser} />
const faUserFriend = <FontAwesomeIcon icon={faUserFriends} />

const History = () => { 
    return (
        <div className='history-top'>
            <h2>Our History</h2>
            <div className='history'>
                <div className='history-item'>
                    <div className='icon'>{element}</div>
                    <h2>500</h2>
                    <h3>Ambulance</h3>
                </div>
                <div className='history-item'>
                    <div className='icon'>{faUserFriend}</div>
                    <h2>6300k+</h2>
                    <h3>Healthy Clients</h3>
                </div>
                <div className='history-item'>
                    <div className='icon'>{elementone}</div>
                    <h2>1300</h2>
                    <h3>Reserved Bed</h3>
                </div>
                <div className='history-item'>
                    <div className='icon'>{hospitalUser}</div>
                    <h2>6300k+</h2>
                    <h3>Recused Patients</h3>
                </div>
            </div>
        </div>
    );
};

export default History;