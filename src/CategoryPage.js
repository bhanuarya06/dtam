import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import "./CategoryPage.css";
import Marketplace from "./Marketplace";

const categories = {
  "Valuable Assets": ["Car", "Gold", "Silver", "Diamond Jewelry", "Luxury Watch"],
  "Real Estate": ["House", "Apartment/Flat", "Land", "Commercial Property", "Vacation Property"],
  "Fine Art and Collectibles": ["Painting", "Sculpture", "Drawing", "Rare Toy", "Antique Furniture"],
  "Consumer Goods": ["Laptop", "Smartphone", "Bicycle", "Appliances", "Camera Equipment"],
  "Agricultural Assets": ["Farm Land", "Livestock", "Produce", "Timber/Wood", "Vineyard"],
  "Intellectual Property": ["Music Album", "E-Book/Publication Rights", "Trademark/Brand Logo", "Patent License", "Software License"],
  "Event Tickets": ["Concert Ticket", "Sporting Event Ticket", "Festival Pass", "Conference Ticket", "Museum/Exhibit Entry"],
  "Everyday Items": ["Pen", "Pencil", "Ball", "Bat", "Eraser"]
};

function CategoryPage() {
  const { category } = useParams();
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="category-page">
      <h2>{category} - Select an Item</h2>

      <select value={selectedItem} onChange={handleItemChange} className="item-dropdown">
        <option value="" disabled>Select an item</option>
        {categories[category]?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      {selectedItem && (
        <div className="selected-item">
          <h4>Selected Item:</h4>
          <p>{selectedItem}</p>
        </div>
      )}


        <Marketplace selectedItem = {selectedItem}/>
    </div>

  );
}

export default CategoryPage;