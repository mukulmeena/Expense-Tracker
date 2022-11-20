import React from "react";
import "./ExpenseList.css";
import ExpenseItems from "./ExpenseItems";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="no-expense">Looks like you&apos;ve got no expenses!</div>
    );
  }
  return (
    <ul className="Expense-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            onDelete = {props.onDeleteItem}
          ></ExpenseItems>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
