
import { Link, Outlet } from 'react-router-dom';
import './RootLayout.css';
import { navigationLinks } from './navigationLinks';



export const NavigationBar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {navigationLinks.map((link) => (
          <li key={link.path} className="nav-item">
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <main>
        <Outlet />
      </main>
    </nav>
  );
};


