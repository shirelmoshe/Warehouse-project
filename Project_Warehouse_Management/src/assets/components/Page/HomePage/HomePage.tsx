import React from 'react';
import { Layout, Card, Carousel } from 'antd';
import PopularProductCard from '../PopularProductCard/PopularProductCard';
import { popularProducts } from '../../../server/popularProducts';
import "./HomePage.css";

const { Content } = Layout;

const HomePage: React.FC = () => {
  return (
    <Content style={{ padding: '50px' }}>
      <div className="site-layout-content">
        <Carousel className="carousel" autoplay>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwY07w1jPbNNwHAca9-aQ07e9ZlLqopBp5WX9OggsP11TU9xAAf43j3VxoeOGfPnf0XA&usqp=CAU" alt="באנר 1" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://i.pinimg.com/1200x/cb/2f/4f/cb2f4ff09878e9e7c552a6d6da0de3dd.jpg" alt="באנר 2" style={{ width: '100%' }} />
          </div>
          <div>
            <img src="https://image.shutterstock.com/image-vector/banner-announcing-mega-discount-half-260nw-1962489325.jpg" alt="באנר 3" style={{ width: '100%' }} />
          </div>
        </Carousel>
        <Card className="card">
          <h2>המוצרים הפופולריים</h2>
          <PopularProductCard products={popularProducts} />
        </Card>
        <Card className="card">
          <h2>מוצרים חדשים</h2>
          <PopularProductCard products={popularProducts} />
        </Card>
      </div>
    </Content>
  );
};

export default HomePage;
