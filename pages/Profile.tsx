
import React from 'react';
import { User, Theme } from '../types';
import { 
  Bell, 
  Moon, 
  Sun, 
  LogOut, 
  Mail, 
  Settings, 
  User as UserIcon,
  Trash2,
  Award,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  Activity
} from 'lucide-react';

interface ProfileProps {
  user: User;
  theme: Theme;
  toggleTheme: () => void;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, theme, toggleTheme, onLogout }) => {
  const activityHistory = [
    { id: 1, type: 'Waste Scanned', detail: 'Identified Plastic Bottle', time: '2 hours ago', status: 'Completed', icon: <Trash2 className="w-4 h-4" /> },
    { id: 2, type: 'Official Report', detail: 'Illegal dumping reported in Sector 7', time: 'Yesterday', status: 'In Review', icon: <Activity className="w-4 h-4 text-amber-500" /> },
    { id: 3, type: 'Smart Bin Use', detail: 'Disposal at Node_01', time: '2 days ago', status: 'Completed', icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
    { id: 4, type: 'Achievement', detail: 'Sustainable Citizen Badge Earned', time: '3 days ago', status: 'Verified', icon: <Award className="w-4 h-4 text-purple-500" /> },
  ];

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
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{user.name}</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium">{user.email}</p>
      </div>

      {/* History Dashboard Section */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black flex items-center gap-2">
            <Clock className="w-6 h-6 text-emerald-500" />
            Recent Activity History
          </h2>
          <button className="text-xs font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400">View Full Logs</button>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {activityHistory.map((item) => (
              <div key={item.id} className="p-5 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl group-hover:bg-white dark:group-hover:bg-slate-700 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{item.type}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.detail}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter mb-1">{item.time}</p>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                    item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                    item.status === 'In Review' ? 'bg-amber-500/10 text-amber-500' :
                    'bg-purple-500/10 text-purple-500'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-black mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-slate-400" />
          Settings & Preferences
        </h2>
        
        <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 dark:border-white/10">
          <div className="divide-y divide-slate-100 dark:divide-white/5">
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
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
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
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
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
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
          className="w-full mt-8 py-4 bg-red-500/10 text-red-500 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all active:scale-[0.98]"
        >
          <LogOut className="w-5 h-5" />
          Log Out of Trashlytics
        </button>
      </div>
    </div>
  );
};

export default Profile;
