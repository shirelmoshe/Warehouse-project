import React from 'react';
import CategoryManagement from "../components/Page/CategoryManagement/CategoryManagement";
import OrderManagement from "../components/Page/OrderManagement/OrderManagement";
import UserTable from "../components/Page/UserTable/UserTable";
import HomePage from '../components/Page/HomePage/HomePage';
import { InventoryLevelsReport } from '../components/Page/Reports & Analytic/Reports';
import CreateCategory from '../components/Page/CreateCategory/CreateCategory';
import OrderHistory from '../components/Page/OrderDetailsUser/OrderHistory';
import CreateProduct from '../components/Page/CreateProduct/CreateProduct';
import AddingProduct from '../components/Page/AddingProduct/AddingProduct';
import ProductManagement from '../components/Page/ProductManagement/ProductManagement';






export const routes = {
  home: {
    path: '/',
    element: <OrderHistory />,
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
    element: <CreateProduct/>,
  },

  createCategory: {
    path: '/create-category',
    element: <CreateCategory />,
  },
  addProduct: {
    path: '/add-product',
    element: <AddingProduct />,
  },
  salesDashboard: {
    path: '/sales-dashboard',
    element: <HomePage />,
  },
  reports: {
    path: '/reports',
    element: <InventoryLevelsReport/>,
  },

};
