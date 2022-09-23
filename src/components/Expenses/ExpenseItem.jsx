import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  // function clickHandler(){}
  // för en annan knapp om vi vill ha här

  // stateless component / presentationall/ dumb component
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}$</div>
        </div>
      </Card>
    </li>
  );
}
export default ExpenseItem;
