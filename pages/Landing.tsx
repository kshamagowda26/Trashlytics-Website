
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, BarChart2, Zap } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 flex flex-col items-center text-center relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-8 animate-bounce">
          <Leaf className="w-12 h-12 text-emerald-500" />
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">Trashlytics</h1>
        </div>
        
        <p className="text-xl md:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6 max-w-2xl">
          AI-Powered Smart Waste Segregation & Disposal
        </p>

        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mb-12 text-lg">
          The global waste crisis demands modern solutions. Trashlytics uses computer vision and 
          generative AI to categorize municipal, hazardous, and electronic waste, providing 
          instant disposal guidelines and data-driven insights for authorities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link
            to="/auth"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/auth?mode=signup"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-600 dark:border-emerald-500 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
          >
            Create Account
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[
            { icon: <ShieldCheck className="w-10 h-10" />, title: "Safety First", desc: "Guidelines for hazardous materials management." },
            { icon: <Zap className="w-10 h-10" />, title: "Real-time AI", desc: "Instant classification using Gemini 3 Flash." },
            { icon: <BarChart2 className="w-10 h-10" />, title: "Actionable Data", desc: "Detailed reports for municipal stakeholders." }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
              <div className="mb-4 text-emerald-500 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
