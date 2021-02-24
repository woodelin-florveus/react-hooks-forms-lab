import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm({ onItemFormsub }) {
  
  const[name, setName] = useState("")

  const [category, setCategory] = useState("Produce")

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    };
      
        onItemFormsub(newItem)

        console.log(newItem)
  
    }
    

  


  function handleChange(event){
    setName(event.target.value)
    // console.log(setName)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" 
        name="name" 
        value={name}
        onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}


export default ItemForm;

// There is a new component called ItemForm that will allow us to 
// add new items to our shopping list. When the form is submitted, 
// a new item should be created and added to our list of items.

// Make all the input fields for this form controlled inputs, so that 
// you can access all the form data via state. When setting the initial state for the <select> tag, 
// use an initial value of "Produce" (since that's the first option in the list).

// Handle the form's submit event, and use the data that 
// you have saved in state to create a new item object with the following properties: