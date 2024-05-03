import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemCategory, setItemCategory] = useState("All")

  function handleCategory(event) {
    const category = event.target.value; 
    setItemCategory(category)
    
  }

  const filteredItems = itemCategory === "All" ? items : items.filter(item => item.category === itemCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
