import React, { useState } from "react";
import Card from "../UI/card";
import ExpenseForm from "./expenseForm";
import "./newExpenses.css";

function NewExpenses(props) {
  const [isEditing, setIsEditing] = useState(false);

  const expenseChangehandler = (expense) => {
    const newExpense = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onChangeExpense(newExpense);
    setIsEditing(false);
  };

  const changeEditingHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <Card className="newExpense">
      {!isEditing && (
        <button onClick={changeEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={changeEditingHandler}
          onChangeExpenses={expenseChangehandler}
        />
      )}
    </Card>
  );
}

export default NewExpenses;
