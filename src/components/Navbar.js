import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            个人网站
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
              首页
            </Link>
            <Link to="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>
              项目
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
              联系我
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 