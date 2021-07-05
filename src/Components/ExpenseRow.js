const ExpenseRow = ({ expenseArray, handleDelete }) => {
  const formatDate = (dateInput) => {
    let date = new Date(dateInput);
    const options = {
      dateStyle: 'medium',
      timeZone: 'UTC'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <tbody>
      {expenseArray.map((expense) => (
        <tr key={expense.id} className='border'>
          <td className='text-capitalize'>{expense.item}</td>
          <td className='text-capitalize'>{expense.location}</td>
          <td>{formatDate(expense.date)}</td>
          <td>${expense.cost}</td>
          <td>{expense.method.toUpperCase()}</td>
          <td>
            <button
              onClick={() => handleDelete(expense.id)}
              className='btn border-0'
            >
              <i className='bi bi-trash'></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ExpenseRow;
