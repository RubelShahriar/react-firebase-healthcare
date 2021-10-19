import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import image from '../images/logo.png';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
            <Navbar className='padding' bg="light" variant="white" collapseOnSelect expand="lg" sticky="top">
    <Container> 
    <Navbar.Brand to="#home">
      <img src={image} alt=''></img>
    </Navbar.Brand>
      <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Link className="item" to="/home">Home</Link>
      <Nav.Link className="item" to="/home#about-us">About us</Nav.Link>
      <Nav.Link className="item" to="/home#about-us">Services</Nav.Link>
      <Link to='/doctors' className='item route'>Doctors</Link>
      <Link to='/pricing' className='item route'>Pricing</Link>
      <Navbar.Text className='route'>
        Signed in as: <a href="#login">{user.displayName}</a>
      </Navbar.Text>
      {!user?.email && <Link className='login' to="/log-in">Log In</Link>}
      {user?.email && <Button onClick={logOut} variant="warning">Log Out</Button>}
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </> 
    );
};

export default Header;