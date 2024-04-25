import React, { useState } from "react";
import Filter from "./Filter";
import itemData from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [...new Set(itemData.map((item) => item.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="ShoppingList">
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      {/* Render the list of items based on the selectedCategory */}
    </div>
  );
}

export default ShoppingList;

