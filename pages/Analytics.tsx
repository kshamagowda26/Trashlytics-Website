
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { Calendar, Zap } from 'lucide-react';

const Analytics: React.FC = () => {
  const [realTimeValue, setRealTimeValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRealTimeValue(Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const data = [
    { name: 'Mon', wet: 400, dry: 240, e: 100 },
    { name: 'Tue', wet: 300, dry: 139, e: 200 },
    { name: 'Wed', wet: 200, dry: 980, e: 150 },
    { name: 'Thu', wet: 278, dry: 390, e: 300 },
    { name: 'Fri', wet: 189, dry: 480, e: 100 },
    { name: 'Sat', wet: 239, dry: 380, e: 400 },
    { name: 'Sun', wet: 349, dry: 430, e: 250 },
  ];

  const pieData = [
    { name: 'Wet Waste', value: 400, color: '#10b981' },
    { name: 'Dry Waste', value: 300, color: '#3b82f6' },
    { name: 'E-Waste', value: 100, color: '#f59e0b' },
    { name: 'Hazardous', value: 50, color: '#ef4444' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Analytics</h1>
        <p className="text-slate-500 dark:text-slate-400">Real-time environmental performance monitoring.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-5 h-5 text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full uppercase">Live</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Current Collection Rate</p>
          <h3 className="text-3xl font-black mt-1 text-slate-900 dark:text-white">{realTimeValue} kg/hr</h3>
          <div className="mt-4 h-1 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-1000" 
              style={{ width: `${realTimeValue}%` }}
            />
          </div>
        </div>
        {[
          { label: 'Weekly Average', val: '242kg', color: 'text-blue-500' },
          { label: 'Recycling Efficiency', val: '78%', color: 'text-purple-500' },
          { label: 'Municipal Compliance', val: 'High', color: 'text-emerald-500' }
        ].map((stat, idx) => (
          <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            <h3 className={`text-3xl font-black mt-1 ${stat.color}`}>{stat.val}</h3>
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-tighter">
              <Calendar className="w-3 h-3" />
              Last 7 Days
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 min-h-[400px]">
          <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Waste Segregation Trends</h3>
          <div className="h-full max-h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorWet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="wet" stroke="#10b981" fillOpacity={1} fill="url(#colorWet)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 min-h-[400px]">
          <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white">Category Distribution</h3>
          <div className="h-full max-h-72 flex flex-col sm:flex-row items-center justify-center">
            <div className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-row sm:flex-col flex-wrap gap-4 mt-4 sm:mt-0 sm:pr-8 justify-center">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
