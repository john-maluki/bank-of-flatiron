import React from "react";

const TransactionForm = () => {
  return (
    <section className="transaction-form">
      <form className="transaction-form__form">
        <div className="transaction-form__wraper">
          <label className="transaction-form__label" htmlFor="date">
            Date:{" "}
          </label>
          <input
            className="transaction-form__input"
            type="date"
            id="date"
            name="date"
          />
        </div>
        <div className="transaction-form__wraper">
          <label className="transaction-form__label" htmlFor="description">
            Description:{" "}
          </label>
          <input
            className="transaction-form__input"
            type="text"
            id="description"
            name="description"
          />
        </div>
        <div className="transaction-form__wraper">
          <label htmlFor="category">Category</label>
          <select
            className="transaction-form_select-filter"
            id="category"
            name="category"
          >
            <option value="Foog">Food</option>
            <option value="Foog">Food</option>
            <option value="Foog">Food</option>
          </select>
        </div>
        <div className="transaction-form__wraper">
          <label className="transaction-form__label" htmlFor="amount">
            Amount:{" "}
          </label>
          <input
            className="transaction-form__input"
            type="number"
            id="amount"
            name="amount"
          />
        </div>
        <div className="transaction-form__wraper">
          <input
            className="transaction-form__submit"
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </section>
  );
};

export default TransactionForm;
