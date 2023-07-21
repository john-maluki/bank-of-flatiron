import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

function App() {
  return (
    <div className="app-container">
      <main className="main">
        <section className="filter-area">
          <div className="create-search">
            <button type="button" className="create-search__add-btn">
              Add Transaction
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
        <TransactionForm />
        <TransactionTable />
      </main>
    </div>
  );
}

export default App;
