import React, { useState } from "react";

const CategoryFilter = ({ categories, onCategoryValueChange }) => {
  const [selectValue, setSelectValue] = useState("All");
  const optionList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

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
      {optionList}
    </select>
  );
};

export default CategoryFilter;
