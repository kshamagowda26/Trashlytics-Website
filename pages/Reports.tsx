
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line, AreaChart, Area
} from 'recharts';
import { Download, Filter, Calendar, Zap } from 'lucide-react';

const Reports: React.FC = () => {
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Analytics Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Real-time waste monitoring and category distribution.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20">
            <Download className="w-4 h-4" />
            Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <Zap className="w-5 h-5 text-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full uppercase">Live</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Current Collection Rate</p>
          <h3 className="text-3xl font-black mt-1">{realTimeValue} kg/hr</h3>
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
            <div className="mt-4 flex items-center gap-1 text-xs font-bold text-slate-400">
              <Calendar className="w-3 h-3" />
              LAST 7 DAYS
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6">Weekly Waste Segregation Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorWet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="wet" stroke="#10b981" fillOpacity={1} fill="url(#colorWet)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6">Waste Category Distribution</h3>
          <div className="h-80 flex items-center">
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
            <div className="flex flex-col gap-4 pr-8">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
