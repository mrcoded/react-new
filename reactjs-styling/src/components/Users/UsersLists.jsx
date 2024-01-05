import Card from "../UI/Card/Card";
import classes from "./UsersLists.module.css";

const UsersLists = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersLists;
