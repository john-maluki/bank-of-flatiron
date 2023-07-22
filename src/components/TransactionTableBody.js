import React from "react";

const TransactionTableBody = ({ transactions, onTransactionDelete }) => {
  const transformedDate = (date) => {
    return date;
  };
  const transactionList =
    transactions.length === 0 ? (
      <tr>
        <td colSpan="5">No records found!!!</td>
      </tr>
    ) : (
      transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <th scope="row">{transformedDate(transaction.date)}</th>
            <td data-title="Description">{transaction.description}</td>
            <td data-title="Category">{transaction.category}</td>
            <td data-title="amount" data-type="currency">
              {transaction.amount}
            </td>
            <td data-title="Manage Transaction">
              <div>
                <button type="button" className="btn btn-secondary btn-sm mr-2">
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => onTransactionDelete(transaction.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        );
      })
    );
  return <tbody>{transactionList}</tbody>;
};

export default TransactionTableBody;
