import React from "react";

const CategoryOptions = ({ categories }) => {
  const optionList = categories.map((category, index) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });
  return <>{optionList}</>;
};

export default CategoryOptions;
