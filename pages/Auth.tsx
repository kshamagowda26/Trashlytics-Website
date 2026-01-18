
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LogIn, UserPlus, Mail, Lock, ShieldCheck, Globe } from 'lucide-react';
import { User } from '../types';

interface AuthProps {
  onLogin: (user: User, rememberMe: boolean) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get('mode') === 'signup' ? 'signup' : 'login';
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated Firebase Auth
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: email || 'user@example.com',
      name: email.split('@')[0] || 'Demo User',
      avatar: `https://picsum.photos/seed/${email}/200`,
      notificationsEnabled: true,
    };
    onLogin(mockUser, rememberMe);
  };

  const handleGoogleLogin = () => {
    const mockUser: User = {
      id: 'google-user-123',
      email: 'google.user@gmail.com',
      name: 'Google Explorer',
      avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL_W...', // Placeholder Google Avatar
      notificationsEnabled: true,
    };
    // Always trigger sign in for Google
    onLogin(mockUser, true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-900 dark:text-white">
            {mode === 'login' ? 'Welcome Back' : 'Join Trashlytics'}
          </h2>
          <p className="text-slate-500 text-center mb-8">
            {mode === 'login' ? 'Manage your waste footprints efficiently' : 'Start your journey towards zero waste'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
              </label>
              <button type="button" className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
            >
              {mode === 'login' ? <LogIn className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="my-8 flex items-center before:flex-1 before:border-t before:border-slate-200 dark:before:border-slate-700 after:flex-1 after:border-t after:border-slate-200 dark:after:border-slate-700">
            <span className="px-4 text-xs font-semibold text-slate-500 uppercase">Or continue with</span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-slate-700 dark:text-slate-300 font-medium"
          >
            <Globe className="w-5 h-5 text-blue-500" />
            Continue with Google
          </button>

          <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="font-bold text-emerald-600 hover:text-emerald-500"
            >
              {mode === 'login' ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
