import ExpenseFilter from "./expenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart"
import Card from "../UI/card";

import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const filterChangehandler = (selectedYear) => {
    setEnteredFilter(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={enteredFilter}
        onChangeFilter={filterChangehandler}
      />
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList items={filteredExpense} onDeleteItem={props.onDelete}/>
    </Card>
  );
}

export default Expenses;
