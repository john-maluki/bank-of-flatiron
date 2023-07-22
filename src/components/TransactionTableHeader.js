import React from "react";

const TransactionTableHeader = () => {
  return (
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
  );
};

export default TransactionTableHeader;
