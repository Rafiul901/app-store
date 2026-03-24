import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer.jsx';

const Layout = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/apps', label: 'Apps' },
    { path: '/installation', label: 'My Apps' },  // Changed to "My Apps" for better clarity
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
              AppStore
            </Link>

            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-blue-600 transition font-medium ${
                      isActive ? 'text-blue-600 border-b-2 border-blue-600' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;