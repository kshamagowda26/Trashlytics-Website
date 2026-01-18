
import React from 'react';
import { User, Theme } from '../types';
import { 
  Bell, 
  Moon, 
  Sun, 
  LogOut, 
  Shield, 
  Mail, 
  Settings, 
  ChevronRight,
  User as UserIcon,
  Trash2,
  Award,
  Calendar
} from 'lucide-react';

interface ProfileProps {
  user: User;
  theme: Theme;
  toggleTheme: () => void;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, theme, toggleTheme, onLogout }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12 flex flex-col items-center">
        <div className="relative mb-6">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-32 h-32 rounded-full border-4 border-white dark:border-slate-800 shadow-xl object-cover"
          />
          <div className="absolute bottom-0 right-0 p-2 bg-emerald-500 text-white rounded-full border-4 border-white dark:border-slate-900">
            <Award className="w-5 h-5" />
          </div>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">{user.name}</h1>
        <p className="text-slate-500 dark:text-slate-400">{user.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <Trash2 className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
          <h4 className="text-2xl font-black">128</h4>
          <p className="text-xs text-slate-500 font-bold uppercase">Items Scanned</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <Shield className="w-8 h-8 mx-auto mb-2 text-blue-500" />
          <h4 className="text-2xl font-black">Top 1%</h4>
          <p className="text-xs text-slate-500 font-bold uppercase">Impact Rank</p>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
          <Calendar className="w-8 h-8 mx-auto mb-2 text-purple-500" />
          <h4 className="text-2xl font-black">42 Days</h4>
          <p className="text-xs text-slate-500 font-bold uppercase">Streak</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Website Settings
        </h2>
        
        <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl">
                  {theme === Theme.LIGHT ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6 text-yellow-400" />}
                </div>
                <div>
                  <h4 className="font-bold">Display Theme</h4>
                  <p className="text-sm text-slate-500">Switch between light and dark mode</p>
                </div>
              </div>
              <button 
                onClick={toggleTheme}
                className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${theme === Theme.DARK ? 'bg-emerald-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${theme === Theme.DARK ? 'translate-x-6' : ''}`} />
              </button>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl">
                  <Bell className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Notifications</h4>
                  <p className="text-sm text-slate-500">Weekly impact reports and collection alerts</p>
                </div>
              </div>
              <button className="relative w-14 h-8 bg-emerald-600 rounded-full">
                <div className="absolute top-1 left-7 w-6 h-6 bg-white rounded-full" />
              </button>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Official Alerts</h4>
                  <p className="text-sm text-slate-500">Direct notifications from Municipal Corp</p>
                </div>
              </div>
              <button className="relative w-14 h-8 bg-slate-300 rounded-full">
                <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full" />
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="w-full mt-8 py-4 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log Out of Trashlytics
        </button>
      </div>
    </div>
  );
};

export default Profile;
