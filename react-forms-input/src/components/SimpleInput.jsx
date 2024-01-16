import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameIisValid, SetEnteredNameIisValid] = useState(true)

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = e => {
    e.preventDefault()
    console.log(enteredName);

    if (enteredName.trim() === '') {
      SetEnteredNameIisValid(false)
      return
    }

    SetEnteredNameIisValid(true)

    //useref if u want to use the value once
    const enteredValue = nameInputRef.current.value
    //usestate for instant validation of keystrokes and to reset input
    setEnteredName(" ")
  }

  const nameInputClasses = enteredNameIisValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
        {!enteredNameIisValid &&
          <p className="error-text">Name must not be empty.</p>
        }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
