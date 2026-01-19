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
  ShieldCheck, 
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
      <header className="mb-12 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white text-center">
          Welcome to Trashlytics
        </h1>
        <div className="bg-emerald-50 dark:bg-emerald-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800 mb-10 max-w-4xl">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed text-center">
            The preservation of our terrestrial ecosystems is a critical imperative that requires the integration of advanced waste-to-resource management frameworks. Effective waste segregation serves as the primary defense against the bio-accumulation of non-recyclable contaminants in urban landfills. By utilizing precision-driven AI classification, we can significantly reduce the ecological footprint of municipal waste, fostering a circular economy where materials are continuously repurposed. Ecological stewardship is not merely a choice, but a fundamental responsibility for ensuring long-term planetary viability and community health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full">
          <div className="group overflow-hidden rounded-3xl relative h-72 shadow-lg border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" 
              alt="Green Forest" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 text-white">
                <Trees className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-lg text-left">Protecting Nature</span>
              </div>
            </div>
          </div>
          <div className="group overflow-hidden rounded-3xl relative h-72 shadow-lg border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
              alt="Recycling Process" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-left">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-lg">Recycle</span>
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
          { label: 'View Analytics', to: '/analytics', icon: <BarChart3 className="w-5 h-5" /> },
          { label: 'Submit Report', to: '/report', icon: <FileWarning className="w-5 h-5" /> }
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