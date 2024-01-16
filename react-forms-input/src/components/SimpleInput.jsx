import useInput from "./hooks/use-input";


const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: inputNameError,
    reset: resetNameInput,
    valueChangeHandler: nameInputChangeHandler,
    isValid: enteredNameIsValid,
    blurInputHandler: nameBlurInputHandler
  } = useInput(value => value !== '')

  const {
    value: enteredEmail,
    hasError: inputEmailError,
    reset: resetEmailInput,
    valueChangeHandler: emailInputChangeHandler,
    isValid: enteredEmailIsValid,
    blurInputHandler: emailBlurInputHandler
  } = useInput(value => value.includes('@'))

  // const nameInputRef = useRef()
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
  // const [enteredName, setEnteredName] = useState('')
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== ''
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name Input is valid!');
  //   }
  // }, [enteredNameIsValid]);


  // const nameInputChangeHandler = event => {
  //   setEnteredName(event.target.value)

  // if (event.target.value.trim() === '') {
  //   setEnteredNameIsValid(true)
  // }
  // }

  // const nameBlurInputHandler = e => {
  //   setEnteredNameTouched(true)

  // if (enteredName.trim() === '') {
  //   setEnteredNameIsValid(false)
  //   // return
  // }

  // }

  const formSubmissionHandler = e => {
    e.preventDefault()
    console.log(enteredName);

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }

    resetEmailInput()
    resetNameInput()
    // setEnteredNameIsValid(true)

    //useref if u want to use the value once
    // const enteredValue = nameInputRef.current.value
    // console.log(enteredValue);
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    //usestate for instant validation of keystrokes and to reset input
    // enteredName(" ")
    // setEnteredNameTouched(false)
  }

  const nameInputClasses = inputNameError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = inputEmailError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef} 
          type='text' id='name' onBlur={nameBlurInputHandler} value={enteredName} onChange={nameInputChangeHandler} />
        {inputNameError &&
          <p className="error-text">Name must not be empty.</p>
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          // ref={nameInputRef} 
          type='email' id='email' onBlur={emailBlurInputHandler} value={enteredEmail} onChange={emailInputChangeHandler} />
        {inputEmailError &&
          <p className="error-text">Please provide a valid email.</p>
        }
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
