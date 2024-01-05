import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "../Users/AddUser.module.css";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (e) => {
    console.log(age, username);
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0 || +age < 0) {
      return;
    }
    props.onAddUser(username, age);
    setAge("");
    setUsername("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" value={age} type="number" onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
