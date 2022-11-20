import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";

function ExpenseItems(props) {

  const handleDelete = () => {
    console.log(props)
    props.onDelete(props.id)
  }

  return (
    <li onClick={handleDelete}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item-description">
          <h2>{props.title}</h2>
          <div className="expense-item-price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItems;
