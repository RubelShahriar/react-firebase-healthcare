import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Resister.css';


const Resister = () => {
    const [name, setName] = useState('');
    const {signInWithGoogle, signInWithGitHub} = useAuth();
    const auth = getAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {displayName: name})
        .then(result => {})
    }

    const resisterUser = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user= result.user;
            console.log(user);
            setUserName();
        })
        .catch(error => {
            setError(error.message);
        })
        console.log(email, password)
        e.preventDefault();
    }

    return ( 
        <div className='signup-form'>
            <h1>Please Resister</h1>
                <form onSubmit={resisterUser}>
                    <input type='text' onBlur={handleNameChange} className='input' placeholder='Name'></input>
                    <input type='email' onBlur={handleEmailChange} className='input' placeholder='Email' required></input>
                    <input type='password' onBlur={handlePasswordChange} className='input' placeholder='Password' required></input>
                    <input type='submit' className='submit' value='Sign Up'></input>
                </form>
                <div className='error'>{error}</div>
                    <p>Already have an account? <Link to='/log-in'> Log In Now</Link></p>
                    <button onClick={signInWithGoogle}>LogIn with Google</button>
                    <button onClick={signInWithGitHub}>LogIn with GitHub</button>
        </div>
    );
};

export default Resister;