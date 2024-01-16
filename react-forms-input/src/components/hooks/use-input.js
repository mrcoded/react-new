import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isInputTouched, setIsInputTouched] = useState(false);

  const inputIsValid = validateValue(enteredValue)
  const hasError = !inputIsValid && isInputTouched;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value)
  }

  const blurInputHandler = e => {
    setIsInputTouched(true)
  }

  const reset = () => {
    setEnteredValue("")
    setIsInputTouched(false)
  }

  return {
    value: enteredValue, hasError, reset, isValid: inputIsValid, valueChangeHandler, blurInputHandler
  }
}

export default useInput