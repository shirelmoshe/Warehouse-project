import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './RootLayout.css';

const NavigationBar = () => {
  return (
    <>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Product Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/categories">Category Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/inventory">Inventory Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/order-management">Orders</Link>
          </li>
          <li className="nav-item">
            <Link to="/users">User Management</Link>
          </li>
          <li className="nav-item">
            <Link to="/reports">Reports & Analytics</Link>
          </li>
          <li className="nav-item">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavigationBar;
