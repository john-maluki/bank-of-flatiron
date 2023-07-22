import { useEffect, useState } from "react";
import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import { MAIN_API_URL } from "./components/utils/utils";

function App() {
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);

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
          <select className="category-filter">
            <option value="Foog">Food</option>
            <option value="Foog">Food</option>
            <option value="Foog">Food</option>
          </select>
        </section>
        {isTransactionFormOpen ? <TransactionForm /> : null}
        <TransactionTable transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
