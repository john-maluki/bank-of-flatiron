import React from "react";

const TransactionTable = () => {
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
        <tbody>
          <tr>
            <th scope="row">2019-12-01</th>
            <td data-title="Description">Paycheck from Bob's Burgers</td>
            <td data-title="Category">Income</td>
            <td data-title="amount" data-type="currency">
              1000
            </td>
            <td data-title="Manage Transaction">
              <div>
                <button type="button" className="btn btn-primary btn-sm">
                  Small button
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                  Small button
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2019-12-01</th>
            <td data-title="Description">Paycheck from Bob's Burgers</td>
            <td data-title="Category">Income</td>
            <td data-title="amount" data-type="currency">
              1000
            </td>
            <td data-title="Manage Transaction">
              <div>
                <button type="button" className="btn btn-primary btn-sm">
                  Small button
                </button>
                <button type="button" className="btn btn-secondary btn-sm">
                  Small button
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2019-12-01</th>
            <td data-title="Description">Paycheck from Bob's Burgers</td>
            <td data-title="Category">Income</td>
            <td data-title="amount" data-type="currency">
              1000
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
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
