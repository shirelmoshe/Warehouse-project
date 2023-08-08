import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { useQuery } from "react-query";
import axios from "axios";

import "./CategoryManagement.css";


export const useFetchCategories = () => {
  return useQuery("categories", async () => {
    const response = await axios.get("http://localhost:5000/categories"); 
    return response.data;
  });
};

const CategoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const { data: categories, isLoading, isError } = useFetchCategories();

  const filteredCategories = categories ? categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div>
      <h2>Category Management</h2>

      <div className={`search-container`}>
        <input
          type="search"
          placeholder="Search here..."
          value={searchTerm}
          onChange={handleSearchChange}
          required
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
      <div className="cards">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error loading categories</div>
        ) : (
          filteredCategories.map((category) => (
            <div className="cards_item" key={category.id}>
              <Card
                cover={<img src={category.image} alt={category.categoryName} className="img" />}
                className="card small-card" 
              >
                <Card.Meta
                  title={category.categoryName}
                  description={category.description}
                />
                <Link to="/create-product" className="create-product-link">
                  create Product
                </Link>
              </Card>
            </div>
          ))
        )}
      </div>

      <Link to="/create-category" className="create-product-link">
        Add New category
      </Link>
    </div>
  );
};

export default CategoryManagement;
