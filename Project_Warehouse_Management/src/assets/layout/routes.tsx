import React from 'react';
import CategoryManagement from "../components/Page/CategoryManagement/CategoryManagement";
import CreateProduct from "../components/Page/CreateProduct/CreateProduct";

import OrderManagement from "../components/Page/OrderManagement/OrderManagement";
import ProductManagement from "../components/Page/ProductManagement/ProductManagement";
import UserTable from "../components/Page/UserTable/UserTable";
import { CreateCategory } from '../components/Page/CreateCategory/CreateCategory';
import { AddingProduct } from '../components/Page/AddingProduct/AddingProduct';

import HomePage from '../components/Page/HomePage/HomePage';

export const routes = {
  home: {
    path: '/',
    element: <HomePage />,
  },
  categoryManagement: {
    path: '/categories',
    element: <CategoryManagement />,
  },
  productManagement: {
    path: '/products',
    element: <ProductManagement />,
  },
  userTable: {
    path: '/users',
    element: <UserTable />,
  },
  orderManagement: {
    path: '/order-management',
    element: <OrderManagement />,
  },
  createProduct: {
    path: '/create-product',
    element: <CreateProduct />,
  },
  createCategory: {
    path: '/create-category',
    element: <CreateCategory />,
  },
  addProduct: {
    path: '/add-product',
    element: <AddingProduct />,
  },
  SalesDashboard: {
    path: '/sales-dashboard',
    element: <HomePage />,
  },
};
