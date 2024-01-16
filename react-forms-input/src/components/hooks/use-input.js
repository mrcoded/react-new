import { useReducer } from "react";
import { useState } from "react";

const initialState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched
    }
  }

  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true
    }
  }

  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false
    }
  }

  return initialState
}

const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initialState)

  // const [enteredValue, setEnteredValue] = useState('')
  // const [isInputTouched, setIsInputTouched] = useState(false);

  // const inputIsValid = validateValue(enteredValue)
  const inputIsValid = validateValue(inputState.value)
  const hasError = !inputIsValid && inputState.isTouched;
  // const hasError = !inputIsValid && isInputTouched;

  const valueChangeHandler = event => {
    dispatchInput({ type: 'INPUT' })
    // setEnteredValue(event.target.value)
  }

  const blurInputHandler = e => {
    dispatchInput({ type: 'BLUR', value: e.target.value })
    // setIsInputTouched(true)
  }

  const reset = () => {
    dispatchInput({ type: 'RESET' })
    // setEnteredValue("")
    // setIsInputTouched(false)
  }

  return {
    // value: enteredValue, hasError, reset, isValid: inputIsValid, valueChangeHandler, blurInputHandler
    value: inputState.value, hasError, reset, isValid: inputIsValid, valueChangeHandler, blurInputHandler
  }
}

export default useInput