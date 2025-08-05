import React, { useState } from 'react';
import { BookOpen, Users, Calendar, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import headerLogo from '../assets/Screenshot 2025-08-01 142128.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const navItems = [
    { id: 'about', label: 'About', icon: BookOpen },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-blue-50 shadow-2xl transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 md:space-x-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-300 overflow-hidden">
              <img 
                src={headerLogo} 
                alt="Portraits of Perception Logo" 
                className="w-full h-full object-cover rounded-full"
                style={{
                  imageRendering: 'crisp-edges',
                  transform: 'scale(1.1)',
                  filter: 'contrast(1.1) brightness(1.05)'
                }}
              />
            </div>
            <div>
              <h1 className="text-sm md:text-lg lg:text-2xl font-bold font-serif tracking-wide drop-shadow-lg">
                PORTRAITS OF PERCEPTION
              </h1>
              <p className="text-blue-200 text-xs md:text-sm">
                LET YOUR EYES THINK
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'hover:bg-blue-800 hover:text-blue-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all duration-300 bg-blue-800 hover:bg-blue-700 text-blue-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-blue-800 text-blue-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;