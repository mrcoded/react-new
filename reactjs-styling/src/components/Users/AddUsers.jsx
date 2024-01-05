import Card from "../UI/Card/Card";

const AddUsers = (props) => {
  const addUserHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUsers;
