import React from "react";
import Button from "./Button";

const TransactionTableBody = ({
  transactions,
  onTransactionUpdate,
  onTransactionDelete,
}) => {
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
                <Button
                  textContent={"Edit"}
                  type={"button"}
                  className={"btn btn-secondary btn-sm mr-2"}
                  onAction={() => onTransactionUpdate(transaction.id)}
                />
                <Button
                  textContent={"Delete"}
                  type={"button"}
                  className={"btn btn-danger btn-sm"}
                  onAction={() => onTransactionDelete(transaction.id)}
                />
              </div>
            </td>
          </tr>
        );
      })
    );
  return <tbody>{transactionList}</tbody>;
};

export default TransactionTableBody;
