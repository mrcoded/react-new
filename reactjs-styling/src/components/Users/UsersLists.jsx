import Card from "../UI/Card/Card";

const UsersLists = (props) => {
  return (
    <Card>
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
