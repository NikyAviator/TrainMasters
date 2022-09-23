import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022'); // getter and setter å default

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // filters a new array that we keep or not depending on what we return is true or not!
  // in this case we cheching if the year stored in the date is the same year as the selected in the filter, return false otherwise.
  // original array is not lost!
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // Render One ExpenseItem per element in the array! 1. Single curly bracer. Med map! POG AF
  // We made another array from one array
  // VIKTIGT MED key={expense.id}!
  // filteredExpenses om den är noll så får vi en text, annars själva listan av expenses
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
