import "../Expenses/ExpensesItem.css";
import ExpensesDate from "../Expenses/ExpensesDate";
import Card from "../UI/Card";

function ExpensesItem(props) {
  //stateless component just to output some data
  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpensesItem;
