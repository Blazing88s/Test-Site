import React from 'react';
import { Boxes } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { COMPANY_NAME } from '../constants/branding';

const navigationItems = ['Home', 'Services', 'Portfolio', 'Blog', 'Contact'];

export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = (item: string) => {
    if (item === 'Home') {
      navigate('/');
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(item.toLowerCase());
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 hover:text-primary transition-colors"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Boxes className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-white">{COMPANY_NAME}</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-gray-300 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}