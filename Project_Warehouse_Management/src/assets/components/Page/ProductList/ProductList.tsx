
import React, { useState, useEffect } from 'react';
import { Tabs, Spin, Card, Input } from 'antd';
import { mockProducts } from '../mockProducts/mockProducts';
import './ProductList.css'; 

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  expirationDate: string;
  supplier: string;
  tags: string[];
  images: string[];
}

const { TabPane } = Tabs;
const { Search } = Input;
const ProductList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
  
    fetchCategories();
  }, []);

  const fetchCategories = async () => {

    const data = ['קטגוריה 1', 'קטגוריה 2', 'קטגוריה 3', 'קטגוריה 4'];
    setCategories(data);
    setLoading(false);
  };

  const handleTabChange = (category: string) => {
    setSelectedCategory(category);
    setLoading(true);
    
    fetchProductsByCategory(category);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setLoading(true);
    
    fetchProductsBySearch(value);
  };

  const fetchProductsByCategory = async (category: string) => {
    try {
      
      const filteredProducts = mockProducts.filter((product) => product.category === category);
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  const fetchProductsBySearch = async (searchTerm: string) => {
    try {
    
      const filteredProducts = mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="search-container">
        <Search
          placeholder="חיפוש מוצרים"
          onSearch={handleSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          enterButton
          style={{ width: 500, height: 40 }}
        />
      </div>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Tabs activeKey={selectedCategory} onChange={handleTabChange}>
          {categories.map((category) => (
            <TabPane tab={category} key={category}>
              <div className="cards">
                {products.map((product) => (
                  <div className="cards_item" key={product.id}>
                    <Card
                      cover={<img src={product.images[0]} alt={product.name} className="img" />}
                      className="card small-card"
                    >
                      <Card.Meta title={product.name} description={product.description} />
                      <p className="card_price">₪{product.price.toFixed(2)}</p>
                      <button className="create-product-link">add to cart</button>
                    </Card>
                  </div>
                ))}
              </div>
            </TabPane>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default ProductList;
