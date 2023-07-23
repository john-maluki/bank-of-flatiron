import React, { useEffect, useState } from "react";

import "./App.css";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";
import { MAIN_API_URL } from "./components/utils/utils";
import CategoryFilter from "./components/CategoryFilter";
import TransactionSearch from "./components/TransactionSearch";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categoryValue, setCategoryValue] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSavingForm, setIsSavingForm] = useState(false);
  const [isSortedByAmount, setIsSortedByAmount] = useState(false);
  const [isSortedByCategory, setIsSortedByCategory] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    date: "",
    description: "",
    category: "Income",
    amount: 0,
  });

  const resetFormData = () => {
    setFormData({
      id: null,
      date: "",
      description: "",
      category: "Income",
      amount: 0,
    });
  };

  const toggleIsSavingForm = () => {
    setIsSavingForm((isSavingForm) => !isSavingForm);
  };

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    const obj = { ...formData, [name]: value };
    setFormData(obj);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (formData.id === null) {
      addTransaction(formData);
    } else {
      updateTransaction(formData);
    }
  };

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
    toggleIsSavingForm(); //make it true
    fetch(`${MAIN_API_URL}/transactions`, {
      method: "POST",
      body: JSON.stringify(transactionData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((transaction) => {
        setTransactions([transaction, ...transactions]);
        resetFormData();
        toggleIsSavingForm();
      });
  };

  const updateTransaction = (transactionData) => {
    toggleIsSavingForm();
    fetch(`${MAIN_API_URL}/transactions/${transactionData.id}`, {
      method: "PATCH",
      body: JSON.stringify(transactionData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((updatedTransaction) => {
        const newTrans = transactions.map((transaction) =>
          transaction.id === transactionData.id
            ? { ...updatedTransaction }
            : transaction
        );
        setTransactions(newTrans);
        resetFormData();
        toggleIsSavingForm();
      });
  };

  const onTransactionUpdate = (id) => {
    // Initialize formData when edit button is clicked
    const tran = transactions.find((transaction) => transaction.id === id);
    setFormData(tran);
    setIsTransactionFormOpen(true);
  };

  const onTransactionDelete = (id) => {
    fetch(`${MAIN_API_URL}/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    }).then((resp) => {
      if (resp.status === 200) {
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

  const sortTransansactionByAmount = () => {
    const trans = [...transactions].sort((aTran, bTran) => {
      if (!isSortedByAmount) {
        return aTran.amount - bTran.amount;
      } else {
        return bTran.amount - aTran.amount;
      }
    });
    setTransactions(trans);
    setIsSortedByAmount(!isSortedByAmount);
  };

  const sortTransansactionByCategory = () => {
    const trans = [...transactions].sort((aTran, bTran) => {
      const aCategory = aTran.category.toUpperCase(); // ignore upper and lowercase
      const bCategory = bTran.category.toUpperCase(); // ignore upper and lowercase
      if (!isSortedByCategory) {
        if (aCategory < bCategory) {
          return -1;
        }
        if (aCategory > bCategory) {
          return 1;
        }
      } else {
        if (aCategory < bCategory) {
          return 1;
        }
        if (aCategory > bCategory) {
          return -1;
        }
      }

      // category must be equal
      return 0;
    });
    setTransactions(trans);
    setIsSortedByCategory(!isSortedByCategory);
  };

  const sortTransanction = (key) => {
    if (key === "amount") {
      sortTransansactionByAmount();
    } else {
      // sort by category
      sortTransansactionByCategory();
    }
  };

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
            formData={formData}
            isSavingForm={isSavingForm}
            onFormChange={handleFormChange}
            handleFormSubmission={handleFormSubmission}
          />
        ) : null}
        {isLoading ? (
          <LoadingSpinner />
        ) : !hasError ? (
          <TransactionTable
            transactions={filteredTransactions}
            onTransactionUpdate={onTransactionUpdate}
            onTransactionDelete={onTransactionDelete}
            sortTransanction={sortTransanction}
          />
        ) : (
          <p className="center">Check your network connection!!!</p>
        )}
      </main>
    </div>
  );
}

export default App;
