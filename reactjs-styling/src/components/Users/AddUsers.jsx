import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "../Users/AddUser.module.css";

const AddUsers = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(age, username);
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
        <input id="username" type="text" onChange={usernameChangeHandler} />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
