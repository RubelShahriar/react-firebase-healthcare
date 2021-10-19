import { useEffect, useState } from "react"
import {getAuth, signInWithPopup, GithubAuthProvider, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

import initializeAuth from './../Firebase/Firebase.init';

initializeAuth();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
    }
    const signInWithGitHub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        });
    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                console.log(user);
                setUser(user);
            }
        })
    },[]);

    return{
        user,
        logOut,
        signInWithGitHub,
        signInWithGoogle
    }
}
export default useFirebase;