import React from "react";

const TransactionSearch = ({ onSearch }) => {
  return (
    <input
      onChange={(e) => onSearch(e.target.value)}
      className="search-transaction"
      type="search"
      placeholder="Search Transactions"
    />
  );
};

export default TransactionSearch;
