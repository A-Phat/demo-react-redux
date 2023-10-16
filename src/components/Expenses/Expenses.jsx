import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
function Expenses(props) {

  const myList = props.items.map((item) => <ExpenseItem key={item.id} title={item.title}  amount={item.amount} date={item.date}></ExpenseItem>);
  return (
    <Card className="expenses">
      {myList}
    </Card>
  );
}

export default Expenses;
