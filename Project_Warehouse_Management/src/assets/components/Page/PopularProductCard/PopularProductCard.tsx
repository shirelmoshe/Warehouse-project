import React from 'react';
import { Card } from 'antd';
import './PopularProductCard.css';

interface Props {
  products: Product[];
}

const PopularProductCard: React.FC<Props> = ({ products }) => {
  return (
    <div className="popular-products-container">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <img src={product.image} alt={product.product_name} className="product-image" />
          <h3>{product.product_name}</h3>
          <p className="description">{product.description}</p>
          <p className="price">מחיר: ₪{product.price}</p>
          <div className="product-button-container">
            <button className="product-button">קנה עכשיו</button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PopularProductCard;
