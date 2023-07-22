import React from "react";

const TransactionTable = ({ transactions }) => {
  const transactionList =
    transactions.length === 0 ? (
      <tr>
        <td colSpan="5">No records found!!!</td>
      </tr>
    ) : (
      transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <th scope="row">{transaction.date}</th>
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
                <button type="button" className="btn btn-danger btn-sm">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        );
      })
    );
  return (
    <div className="container transaction-table">
      <table className="responsive-table">
        <caption>Displays a list of your recent bank transactions</caption>
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">
              <div>
                Category <i className="fa fa-sort" aria-hidden="true"></i>
              </div>
            </th>
            <th scope="col">
              <div>
                Amount (KSH) <i className="fa fa-sort" aria-hidden="true"></i>
              </div>
            </th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>{transactionList}</tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
