import React from "react";
import "./expenseFilter.css";

const ExpenseFilter = (props) => {

  const filterChangehandler = (event) => {
    props.onChangeFilter(event.target.value)
  };

  return (
    <div className="expense-filter">
      <div className="expenseFilter-controls">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangehandler} className="year-select">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
