import { useState } from "react";
import "../Expenses/ExpensesItem.css";
import ExpensesDate from "../Expenses/ExpensesDate";
import Card from "../UI/Card";

function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title);

  function handleClick() {
    setTitle("Updated!");
    console.log("Button clicked");
  }

  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change</button>
    </Card>
  );
}

export default ExpensesItem;
