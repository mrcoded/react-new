import { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "../Users/AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  //using ref to get inputs
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //   const [username, setUsername] = useState("");
  //   const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();

    //useRef to access input values
    //useRef to quickly read values instead of state
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    console.log(enteredAge, enteredName);

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid sge (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    //manipulate DOM without react **BAD
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
    // setAge("");
    // setUsername("");
  };

  //   const usernameChangeHandler = (e) => {
  //     setUsername(e.target.value);
  //   };

  //   const ageChangeHandler = (e) => {
  //     setAge(e.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* the input field are controlled components when the 
          internal states of the input is not controled by REACT using 
          states and we feed it the values and keystrokes onchange event handler */}
          <input
            id="username"
            // value={username}
            type="text"
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          {/* the input field are uncontrolled components because the 
          internal states of the input is not controled by REACT using refs */}
          <input
            id="age"
            // value={age}
            type="number"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
