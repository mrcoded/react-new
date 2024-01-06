import { forwardRef, useImperativeHandle, useRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
    //forwardref returns a component that is capable 
    //of being bound to a ref
    const inputRef = useRef()

    const activate = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            //returns fn to be exposed 
            focus: activate
        }
    })

    return (
        <div
            className={`${classes.control} ${props.isValid === false ? classes.invalid : ''
                } `}
        >
            <label htmlFor={props.label}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                // value={enteredEmail}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    )
})

export default Input