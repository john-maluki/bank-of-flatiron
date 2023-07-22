import React, { useState } from "react";
import CategoryOptions from "./CategoryOptions";

const CategoryFilter = ({ categories, onCategoryValueChange }) => {
  const [selectValue, setSelectValue] = useState("All");

  const handleSelectValueChange = (e) => {
    const value = e.target.value;
    setSelectValue(value);
    onCategoryValueChange(value);
  };
  return (
    <select
      value={selectValue}
      onChange={handleSelectValueChange}
      className="category-filter"
    >
      <option value="All">All</option>
      <CategoryOptions categories={categories} />
    </select>
  );
};

export default CategoryFilter;
