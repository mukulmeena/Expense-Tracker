import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div className="expense-calender">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
        <div className="day">{day}</div>
      </div>
    </div>
  );
}

export default ExpenseDate;
