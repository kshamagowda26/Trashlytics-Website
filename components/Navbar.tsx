
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ScanLine, BarChart3, User, LogOut, Sun, Moon, Leaf, HelpCircle, FileWarning } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  onLogout: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout, theme, toggleTheme }) => {
  const navItems = [
    { to: '/home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { to: '/segregation', icon: <ScanLine className="w-5 h-5" />, label: 'Segregate' },
    { to: '/report', icon: <FileWarning className="w-5 h-5" />, label: 'Report' },
    { to: '/analytics', icon: <BarChart3 className="w-5 h-5" />, label: 'Analytics' },
    { to: '/smart-bin', icon: <HelpCircle className="w-5 h-5" />, label: 'Smart Bin' },
    { to: '/profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/home" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Trashlytics
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => 
                  `flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === Theme.LIGHT ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>
            <button
              onClick={onLogout}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
