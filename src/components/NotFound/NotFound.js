import React from 'react';
import './NotFound.css';
import image from '../images/404-error-page-templates.jpeg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div>
                <img src={image} alt=''></img>
            <h3><Link className='link' to='/home'>Go to Home page</Link></h3></div>
        </div>
    );
};

export default NotFound;