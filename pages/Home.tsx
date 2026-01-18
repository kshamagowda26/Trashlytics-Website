
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ScanLine, 
  Leaf, 
  ExternalLink, 
  AlertCircle, 
  ArrowRight,
  TrendingUp,
  Droplets,
  HardHat,
  Zap,
  Globe,
  Trees,
  BarChart3,
  FileWarning
} from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Total Scanned', value: '1,248', trend: '+12%', icon: <ScanLine className="w-5 h-5" /> },
    { label: 'Recycled Today', value: '42kg', trend: '+5%', icon: <Leaf className="w-5 h-5" /> },
    { label: 'Pending Reports', value: '3', trend: 'Critical', icon: <AlertCircle className="w-5 h-5" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Welcome to Trashlytics</h1>
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 mb-10 max-w-4xl mx-auto">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-justify md:text-center">
            The preservation of our terrestrial ecosystems hinges upon the systematic implementation of advanced waste management protocols. By fostering ecological stewardship through intelligent segregation, we mitigate the proliferation of non-biodegradable pollutants and enhance the efficiency of resource recovery cycles. Trashlytics leverages sophisticated machine learning to empower citizens with precise, real-time data, ensuring that every disposal action contributes to a sustainable, carbon-neutral future. Our collective responsibility today dictates the environmental integrity of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="group overflow-hidden rounded-3xl relative h-64 shadow-lg border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Green Forest" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 text-white">
                <Trees className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-lg">Protecting Nature</span>
              </div>
            </div>
          </div>
          <div className="group overflow-hidden rounded-3xl relative h-64 shadow-lg border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
              alt="Public Dustbins" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-left">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-lg">Our Shared Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between transition-all hover:shadow-md">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
              <p className={`text-xs mt-1 ${stat.trend === 'Critical' ? 'text-red-500' : 'text-emerald-500'}`}>
                {stat.trend} from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <TrendingUp className="w-6 h-6 text-emerald-500" />
            Why Segregation Matters
          </h2>
          <div className="grid gap-4">
            {[
              { title: "Reduce Landfill Stress", desc: "80% of household waste is recoverable through proper segregation.", icon: <HardHat className="w-5 h-5" /> },
              { title: "Prevent Water Pollution", desc: "Hazardous waste leaks into ground water if mixed with organic waste.", icon: <Droplets className="w-5 h-5" /> },
              { title: "Circular Economy", desc: "Turn waste into wealth by enabling efficient recycling pathways.", icon: <Leaf className="w-5 h-5" /> }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 flex items-start gap-4 transition-colors">
                <div className="mt-1 text-emerald-600">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center shadow-xl">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ScanLine className="w-48 h-48 rotate-12" />
          </div>
          <h2 className="text-3xl font-black mb-4">Start Segregating Now</h2>
          <p className="text-emerald-100 mb-8 max-w-sm">
            Use our AI Vision tool to instantly identify and categorize any waste item for proper disposal.
          </p>
          <Link
            to="/segregation"
            className="self-start px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl flex items-center gap-2 transition-transform hover:scale-105"
          >
            Open Scanner <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: 'Submit Report', to: '/report', icon: <FileWarning className="w-5 h-5" /> },
          { label: 'View Analytics', to: '/analytics', icon: <BarChart3 className="w-5 h-5" /> }
        ].map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="p-4 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-all border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
              {link.icon}
              {link.label}
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
