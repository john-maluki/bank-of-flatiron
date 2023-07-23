import React from "react";
import CategoryOptions from "./CategoryOptions";

const TransactionForm = ({
  categories,
  formData,
  onFormChange,
  handleFormSubmission,
}) => {
  return (
    <section className="transaction-form">
      <form className="transaction-form__form" onSubmit={handleFormSubmission}>
        <div className="transaction-form__wraper">
          <label className="transaction-form__label" htmlFor="date">
            Date:{" "}
          </label>
          <input
            className="transaction-form__input"
            type="date"
            id="date"
            name="date"
            required
            pattern="\d{4}-\d{2}-\d{2}"
            value={formData.date}
            onChange={onFormChange}
          />
        </div>
        <div className="transaction-form__wraper">
          <label className="transaction-form__label" htmlFor="description">
            Description:
          </label>
          <input
            className="transaction-form__input"
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={onFormChange}
          />
        </div>
        <div className="transaction-form__wraper">
          <label htmlFor="category">Category</label>
          <select
            className="transaction-form_select-filter"
            id="category"
            name="category"
            value={formData.category}
            onChange={onFormChange}
          >
            <CategoryOptions categories={categories} />
          </select>
        </div>
        <div className="transaction-form__wraper">
          <label className="transaction-form__label" htmlFor="amount">
            Amount:
          </label>
          <input
            className="transaction-form__input"
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={onFormChange}
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
