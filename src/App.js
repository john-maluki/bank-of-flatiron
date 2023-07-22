import { useEffect, useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import { MAIN_API_URL } from "./components/utils/utils";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categoryValue, setCategoryValue] = useState("All");

  const handleTransactionFormToggling = () => {
    setIsTransactionFormOpen(!isTransactionFormOpen);
  };

  const transactionBtnClass = isTransactionFormOpen
    ? "btn btn-danger"
    : "create-search__add-btn";

  useEffect(() => {
    fetch(`${MAIN_API_URL}/transactions`)
      .then((resp) => resp.json())
      .then((trans) => {
        setTransactions(trans);
      });
  }, []);

  const getDistinctCategories = () => {
    const allCategories = [
      ...new Set(transactions.map((transaction) => transaction.category)),
    ];
    return allCategories;
  };

  const onCategoryValueChange = (category) => {
    setCategoryValue(category);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (categoryValue === "All") {
      return true;
    } else {
      return transaction.category === categoryValue;
    }
  });

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
            <input
              className="search-transaction"
              type="search"
              placeholder="Search Transactions"
            />
          </div>
          <CategoryFilter
            categories={getDistinctCategories()}
            onCategoryValueChange={onCategoryValueChange}
          />
        </section>
        {isTransactionFormOpen ? <TransactionForm /> : null}
        <TransactionTable transactions={filteredTransactions} />
      </main>
    </div>
  );
}

export default App;
