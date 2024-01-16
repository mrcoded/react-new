import { useEffect, useRef, useState } from "react";


const SimpleInput = (props) => {
  // const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  let formIsValid = false

  if (enteredNameIsValid) formIsValid = true
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name Input is valid!');
  //   }
  // }, [enteredNameIsValid]);


  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)

    // if (event.target.value.trim() === '') {
    //   setEnteredNameIsValid(true)
    // }
  }

  const nameBlurInputHandler = e => {
    setEnteredNameTouched(true)

    // if (enteredName.trim() === '') {
    //   setEnteredNameIsValid(false)
    //   // return
    // }

  }

  const formSubmissionHandler = e => {
    e.preventDefault()
    console.log(enteredName);

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return
    }

    // setEnteredNameIsValid(true)

    //useref if u want to use the value once
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    //usestate for instant validation of keystrokes and to reset input
    setEnteredName(" ")
    setEnteredNameTouched(false)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef} 
          type='text' id='name' onBlur={nameBlurInputHandler} value={enteredName} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid &&
          <p className="error-text">Name must not be empty.</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
