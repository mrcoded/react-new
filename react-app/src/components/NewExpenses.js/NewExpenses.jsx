import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = () => {
  const saveExpenseDataHandler = (enteredData) => {
    const enteredExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(enteredExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
