import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // Så man kan toggla button Add New Expense, useState!
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData); // hämtar från App.js å matar in expenseData
    setIsEditing(false); // We wanna close the form if it is submitted!
  };
  // Start editing
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // Stop editing (cancel)
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
// shows that a function triggers when something happens with  ExpenseForm (onSaveExpenseData)
// we point on the onSaveEDH func
export default NewExpense;
