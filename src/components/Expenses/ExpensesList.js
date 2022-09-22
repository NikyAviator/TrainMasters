import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  // hela expensesContent logiken som sedan returnerar vad som skall renderas med bara {expensesContent}, elegant kodning!
  // Den va i Expenses.js innan,men flytades till ExpensesFilter.js!

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
