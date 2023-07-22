import React, { useEffect, useState } from "react";

import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import {
  MAIN_API_URL,
  sortTransanctionsByDate,
} from "./components/utils/utils";
import CategoryFilter from "./components/CategoryFilter";
import TransactionSearch from "./components/TransactionSearch";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categoryValue, setCategoryValue] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleTransactionFormToggling = () => {
    setIsTransactionFormOpen(!isTransactionFormOpen);
  };

  const transactionBtnClass = isTransactionFormOpen
    ? "btn btn-danger"
    : "create-search__add-btn";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${MAIN_API_URL}/transactions`)
      .then((resp) => resp.json())
      .then((trans) => {
        setTransactions(trans);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  const getDistinctCategories = () => {
    const allCategories = [
      ...new Set(transactions.map((transaction) => transaction.category)),
    ];
    return allCategories;
  };

  const distinctCategories = getDistinctCategories();

  const onCategoryValueChange = (category) => {
    setCategoryValue(category);
  };

  const onSearch = (str) => {
    setSearchValue(str);
  };
  const addTransaction = (transactionData) => {
    fetch(`${MAIN_API_URL}/transactions`, {
      method: "POST",
      body: JSON.stringify(transactionData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((transaction) => setTransactions([transaction, ...transactions]));
  };

  const onTransactionDelete = (id) => {
    fetch(`${MAIN_API_URL}/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((resp) => {
      if (resp.status === 200) {
        // const newTrans = transactions.filter((tran) => tran.id !== id);
        setTransactions((transactions) =>
          transactions.filter((tran) => tran.id !== id)
        );
      }
    });
  };

  const filteredTransactions = transactions
    .filter((transaction) => {
      if (categoryValue === "All") {
        return true;
      } else {
        return transaction.category === categoryValue;
      }
    })
    .filter((transaction) =>
      transaction.description.toLowerCase().includes(searchValue.toLowerCase())
    );

  const sortedTransactionByDate = sortTransanctionsByDate(filteredTransactions);

  return (
    <div className="app-container">
      <main className="main">
        <section className="filter-area">
          <div className="create-search">
            <button
              type="button"
              className={transactionBtnClass}
              onClick={handleTransactionFormToggling}
            >
              {isTransactionFormOpen ? "Close" : "Add Transaction"}
            </button>
            <TransactionSearch onSearch={onSearch} />
          </div>
          <CategoryFilter
            categories={distinctCategories}
            onCategoryValueChange={onCategoryValueChange}
          />
        </section>
        {isTransactionFormOpen ? (
          <TransactionForm
            categories={distinctCategories}
            addTransaction={addTransaction}
          />
        ) : null}
        {isLoading ? (
          <LoadingSpinner />
        ) : !hasError ? (
          <TransactionTable
            transactions={sortedTransactionByDate}
            onTransactionDelete={onTransactionDelete}
          />
        ) : (
          <p className="center">Check your network connection!!!</p>
        )}
      </main>
    </div>
  );
}

export default App;
