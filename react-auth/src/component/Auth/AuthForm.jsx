import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './AuthForm.module.css';
import AuthContext from "../../store/auth-context";
import { useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA020MFBPZU7kU6LSSQgjFgFjmF02tHByg",
  authDomain: "react-auth-33ca1.firebaseapp.com",
  projectId: "react-auth-33ca1",
  storageBucket: "react-auth-33ca1.appspot.com",
  messagingSenderId: "546455570923",
  appId: "1:546455570923:web:ed5d2bca75c4c12e2571ae"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log(auth);


const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  console.log(isLoggedIn);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };


  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      console.log('User created:', user);
      // Handle successful sign-up (e.g., redirect to another page, show success message)
    } catch (error) {
      let errorMessage = 'Authentication failed!';
      if (error && error.message) {
        errorMessage = error.message
      }
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.error('Sign-up error:', error);
      // Handle errors (e.g., display error message to the user)
      alert(errorMessage);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log('User LoggedIn:', user);
      // const token = await user.getIdToken()
      // console.log(token);
      // authCtx.login(user.uid)
      navigate("/")
    } catch (error) {
      let errorMessage = 'Authentication failed!';
      if (error && error.message) {
        errorMessage = error.message
      }
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.error('Sign-up error:', error);
      // Handle errors (e.g., display error message to the user)
      alert(errorMessage);
    }
  };


  const submitHandler = (e) => {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // setIsLoading(true);
    //validation
    if (isLogin) {
      //validation
      // authCtx.login(getIdToken())
      handleSignIn(enteredEmail, enteredPassword)
    } else {
      // setIsLoading(false);
      handleSignUp(enteredEmail, enteredPassword, setIsLoading(false))
    }
  }


  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
