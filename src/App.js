import { useState, useEffect } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';

const App = () => {
  const [expenseArray, setExpenseArray] = useState([]);

  const addExpense = (newExpense) => {
    setExpenseArray([...expenseArray, newExpense]);
  };

  useEffect(() => {
    if (localStorage.getItem('expenseArray'));
    setExpenseArray(JSON.parse(localStorage.getItem('expenseArray')));
  }, []);

  useEffect(() => {
    localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
  }, [expenseArray]);

  const handleDelete = (id) => {
    const newArray = expenseArray.filter((expense) => expense.id !== id);
    setExpenseArray(newArray);
  };

  return (
    <div className='App d-grid gap-5'>
      <div className='text-center'>
        <h1>Expense Tracker</h1>
        <small>created by N. McCraw</small>
      </div>
      <div className='container'>
        <div className='row justify-content-evenly'>
          <Form addExpense={addExpense} />
          <Table expenseArray={expenseArray} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
