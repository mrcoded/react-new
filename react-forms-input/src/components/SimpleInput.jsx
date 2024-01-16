import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmissionHandler = e => {
    e.preventDefault()
    console.log(enteredName);

    if (enteredName.trim() === '') return

    //useref if u want to use the value once
    const enteredValue = nameInputRef.current.value
    //usestate for instant validation of keystrokes and to reset input
    setEnteredName(" ")
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
