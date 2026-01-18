
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { User, Theme } from './types';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Segregation from './pages/Segregation';
import Analytics from './pages/Analytics';
import Profile from './pages/Profile';
import SmartBin from './pages/SmartBin';
import Report from './pages/Report';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('trashlytics_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('trashlytics_theme');
    return (saved as Theme) || Theme.LIGHT;
  });

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('trashlytics_theme', theme);
  }, [theme]);

  const handleLogin = (userData: User, rememberMe: boolean) => {
    setUser(userData);
    if (rememberMe) {
      localStorage.setItem('trashlytics_user', JSON.stringify(userData));
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('trashlytics_user');
  };

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${theme === Theme.DARK ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
        {user && <Navbar onLogout={handleLogout} theme={theme} toggleTheme={toggleTheme} />}
        <main className={`${user ? 'pt-20' : ''}`}>
          <Routes>
            <Route path="/" element={!user ? <Landing /> : <Navigate to="/home" />} />
            <Route path="/auth" element={!user ? <Auth onLogin={handleLogin} /> : <Navigate to="/home" />} />
            <Route path="/home" element={user ? <Home /> : <Navigate to="/auth" />} />
            <Route path="/segregation" element={user ? <Segregation /> : <Navigate to="/auth" />} />
            <Route path="/analytics" element={user ? <Analytics /> : <Navigate to="/auth" />} />
            <Route path="/profile" element={user ? <Profile user={user} theme={theme} toggleTheme={toggleTheme} onLogout={handleLogout} /> : <Navigate to="/auth" />} />
            <Route path="/smart-bin" element={user ? <SmartBin /> : <Navigate to="/auth" />} />
            <Route path="/report" element={user ? <Report /> : <Navigate to="/auth" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
