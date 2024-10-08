import { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const isEmpty = value => value.trim() === '';
const isMinFive = value => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  })

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isMinFive(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalIsValid
    });

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;


    if (!formIsValid) {
      return
    }
    //submit the cart data
    props.onSubmit({
      name: enteredName,
      street: enteredCity,
      city: enteredCity,
      postalCode: enteredPostal
    })
  }


  const nameControlClasses = `${classes.control} 
      ${formInputValidity.name ? "" : classes.invalid}`;

  const streetControlClasses = `${classes.control} 
      ${formInputValidity.street ? "" : classes.invalid}`;

  const postalCodeClasses = `${classes.control} 
      ${formInputValidity.postalCode ? "" : classes.invalid}`;

  const cityControlClasses = `${classes.control} 
      ${formInputValidity.city ? "" : classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id='name' ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id='street' ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div >
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id='postal' ref={postalCodeInputRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid postal code! (5 characters long)</p>}
      </div >
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id='city' ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form >
  )
}

export default Checkout