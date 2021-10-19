import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    const {signInWithGoogle, signInWithGitHub} = useAuth();
    const auth = getAuth();
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }


    const logInUser = (e) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user= result.user;
            console.log(user);
        })
        .catch(error => {
            setError(error.message);
        })
        console.log(email, password)
        e.preventDefault();
    }


    return (
        <div className='login-form'>
            <h2> Please log In</h2>
                <form onSubmit={logInUser}>
                    <input type='email' onBlur={handleEmailChange} className='input' placeholder='Email' required></input>
                    <input type='password' onBlur={handlePasswordChange} className='input' placeholder='Password' required></input>
                    <input type='submit' className='submit' value='Log In'></input>
                <div className='error'>{error}</div>
                </form>
                    <p>Do not have an account? <Link to='/resister'> Resister Now</Link></p>
                    <button onClick={signInWithGoogle}>LogIn with Google</button>
                    <button onClick={signInWithGitHub}>LogIn with GitHub</button>
        </div> 
    );
};

export default LogIn;