import React, { useState } from "react";
import "./StartPage.css"; // Import CSS for styling
import Marketplace from "./Marketplace"; // Import the Marketplace component

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

function StartPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedItem(""); // Reset item selection when category changes
  };

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <div className="start-page">
      <div className="menu-bar">
        <h1 className="menu-title">Welcome to the Decentralized Tokenized Asset Marketplace (D-TAM)</h1>
        <div class="selection-container">
                <h2 className="menu-category-title">Select a Category </h2>
                <select value={selectedCategory} onChange={handleCategoryChange} className="item-dropdown">
                    <option value="" disabled>Select a category</option>
                    {Object.keys(categories).map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                    ))}
                </select>
            {selectedCategory && (
                <div className="item-selection"  class="selection-container" >
                    <h3 className="menu-item-title">{selectedCategory}</h3>
                    <select value={selectedItem} onChange={handleItemChange} className="item-dropdown2">
                        <option value="" disabled>Select an Asseet Type</option>
                        {categories[selectedCategory].map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                        ))}
                    </select>
                </div>
            )}
        </div>
            
    </div>
      
      <Marketplace selectedCategory={selectedCategory} selectedItem={selectedItem} />
    </div>
  );
}

export default StartPage;