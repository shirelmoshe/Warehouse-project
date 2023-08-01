import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sampleProducts } from "../../../server/sampleProducts";
import { Card } from "antd";

import "./ProductManagement.css";

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = sampleProducts;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    
      <div className={`search-container`}>
        <input
          type="search"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}
          required
          className="search-input" 
        />
        <button type="submit" className="search-button">Search</button>
      </div>

      <div className="cards">
        {filteredProducts.map((product) => (
          <div className="cards_item" key={product.id}> {/* Add key attribute here */}
            <Card
              cover={<img src={product.image} alt={product.product_name} className="img" />}
              className="card small-card"
            >
              <Card.Meta
                title={product.product_name}
                description={product.description}
              />
              <p className="card_price">${product.price.toFixed(2)}</p>
              <Link to="/create-product" className="create-product-link">
        Add Product
      </Link>
            </Card>
          </div>
        ))}
      </div>

      <Link to="/add-product" className="create-product-link">
        Add New Product
      </Link>
    </div>
  );
};

export default ProductManagement;
