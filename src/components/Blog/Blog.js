import React from 'react';
import './Blog.css';
import doctor from '../images/blog-01.jpeg';
import doctorOne from '../images/department-tab-1.jpeg';
import doctorTwo from '../images/blog-1-1-1-1.jpeg';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='blog'>
            <h2> News & Blogs</h2>
            <div className='blog-flex'>
                <div className='blog-item'>
                    <div><img src={doctor} alt=''></img></div>
                    <div className='inner-flex'>
                        <div><p> Post By: Rt Shuvro</p></div>
                        <div><p> Hospital</p></div>
                    </div>
                    <div><h4>Why our services are the best overall ever?</h4></div>
                </div>
                <div className='blog-item'>
                    <div><img src={doctorOne} alt=''></img></div>
                    <div className='inner-flex'>
                        <div><p> Post By: Rt Shuvro</p></div>
                        <div><p> Hospital</p></div>
                    </div>
                    <div><h4>Why we are the best in the world hospital ever?</h4></div>
                </div>
                <div className='blog-item'>
                    <div><img src={doctorTwo} alt=''></img></div>
                    <div className='inner-flex'>
                        <div><p> Post By: Rt Shuvro</p></div>
                        <div><p> Hospital</p></div>
                    </div>
                    <div><h4>Why people choose us as popular hospital ever?</h4></div>
                </div>
            </div>
        </div> 
        </Container>
    );
};

export default Blog;