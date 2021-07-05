import ExpenseRow from './ExpenseRow';

const Table = ({ expenseArray, handleDelete }) => {
  return (
    <div className='col-8 text-center'>
      {/* <h2>Expenses</h2> */}
      <table className='table table-hover table-light table-striped text-center bg-gradient'>
        <thead className='table-dark border rounded-top'>
          <tr>
            <th>Item</th>
            <th>Location</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <ExpenseRow expenseArray={expenseArray} handleDelete={handleDelete} />
      </table>
    </div>
  );
};
export default Table;
