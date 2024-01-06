import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {

  function emailReducer(state, action) {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.includes('@') }
    }

    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') }
    }
    return {
      value: "", isValid: false
    }
  }

  function passwordReducer(state, action) {
    if (action.type === 'USER_INPUT') {
      return { value: action.val, isValid: action.val.trim().length > 6 }
    }

    if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length > 6 }
    }
    return {
      value: "", isValid: false
    }
  }

  //useReducer - first function params can be defined outside
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "", isValid: null
  }
  )
  const [pwdState, dispatchPwd] = useReducer(passwordReducer, {
    value: "", isValid: null
  }
  )

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //obj destructuring with alias assignment 
  // we used object destructuring to add object 
  // properties as dependencies to useEffect().
  const { isValid: emailIsValid } = emailState
  const { isValid: pwdIsValid } = pwdState

  // useeffect runs once after state updates
  useEffect(() => {
    //use debouncing to to only get the final input
    const identifier = setTimeout(() => {
      console.log('check for validity');
      setFormIsValid(
        // emailState.isValid && pwdState.isValid
        emailIsValid && pwdIsValid
      );
    }, 500);


    //cleanup function runs before new side effect executes
    return () => {
      console.log('cleanup');
      clearTimeout(identifier)
    }

  }, [emailIsValid, pwdIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value })//pass in 'action'

    setFormIsValid(
      event.target.value.includes('@') && pwdState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPwd({ type: 'USER_INPUT', val: event.target.value })

    setFormIsValid(
      // event.target.value.trim().length > 6 && enteredEmail.includes('@')
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPwd({ type: 'INPUT_BLUR' })
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    props.onLogin(emailState.value, pwdState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // value={enteredEmail}
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${pwdState === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={pwdState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

