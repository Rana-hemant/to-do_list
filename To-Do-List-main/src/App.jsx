import React, { useState } from "react";
import "./styles.css";
function App() {
  const [currentValue, newValue] = useState("");
  const [items, setItems] = useState([]);
  function updateValue(event) {
    newValue(event.target.value);
  }
  function Add() {
    setItems([...items, currentValue]);
    newValue("");
  }
  function Delete(event) {
    const index = items.indexOf(event.target.textContent);
    items.splice(index, 1);
    setItems([...items]);
  }
  return (
    <div class="container">
      <div class="heading">
        <h2>To-Do List</h2>
      </div>
      <div class="form">
        <input
          onChange={updateValue}
          type="text"
          placeholder="Enter Text"
          value={currentValue}
        />
      </div>
      <button onClick={Add} class="btn" type="text">
        Add
      </button>
      <div>
        <ul onClick={Delete}>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
