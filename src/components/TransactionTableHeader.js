import React from "react";

const TransactionTableHeader = ({ sortTransanction }) => {
  return (
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">
          <div className="trans-sort">
            Category{" "}
            <i
              className="fa fa-sort"
              aria-hidden="true"
              onClick={() => sortTransanction("category")}
            ></i>
          </div>
        </th>
        <th scope="col">
          <div className="trans-sort">
            Amount (KSH){" "}
            <i
              className="fa fa-sort"
              aria-hidden="true"
              onClick={() => sortTransanction("amount")}
            ></i>
          </div>
        </th>
        <th scope="col">Manage</th>
      </tr>
    </thead>
  );
};

export default TransactionTableHeader;
