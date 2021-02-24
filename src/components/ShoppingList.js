import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormsub }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [food, setFood] = useState(items)

  // console.log(name)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

    const itemsToDisplay = food.filter((item) =>{
      if(selectedCategory === "All" || item.category === selectedCategory){
        return item.name.toLowerCase().includes(search.toLowerCase());
      } else {
        return false
      } 
    })

    function onItemFormsub(newFood){
      const upDatedFood = [...food, newFood]
      setFood(upDatedFood);
    }

    console.log(food)
  
      // console.log(item)
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormsub={onItemFormsub} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
