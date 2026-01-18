
import React, { useState, useEffect } from 'react';
import { Zap, Wifi, Battery, MapPin, AlertTriangle, Lightbulb, ArrowRight } from 'lucide-react';
import { getSmartBinUpdate } from '../services/geminiService';

const SmartBin: React.FC = () => {
  const [aiInsight, setAiInsight] = useState("Analyzing hardware efficiency data...");

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const insight = await getSmartBinUpdate("85% capacity, battery at 92%, location Campus Central");
        setAiInsight(insight);
      } catch (error) {
        setAiInsight("Smart bins reduce collection costs by 30% through predictive routing.");
      }
    };
    fetchInsight();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-4 bg-yellow-500 rounded-2xl shadow-lg shadow-yellow-500/20 text-white">
          <Zap className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">Upcoming Project</span>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white">Smart Bin Integration</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            We are revolutionizing waste management with our upcoming IoT-enabled Smart Bins. 
            These aren't just containers—they are intelligent data points in your city's infrastructure.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: <Wifi />, title: "Real-time Monitoring", desc: "Know exactly when a bin is full to optimize collection routes." },
              { icon: <Battery />, title: "Energy Efficient", desc: "Solar-powered sensors with 5-year battery lifecycle." },
              { icon: <MapPin />, title: "Precision Location", desc: "GPS tracking for municipal fleet management and asset security." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 rounded-xl h-fit">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border-4 border-yellow-500/20">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-black">Prototype-S1</h3>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase">System Active</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div className="w-3/4">
                  <p className="text-sm font-bold text-slate-400 mb-2">FILL LEVEL</p>
                  <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <span className="font-black text-2xl text-yellow-500">85%</span>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 mb-4 text-yellow-600">
                  <Lightbulb className="w-5 h-5" />
                  <span className="font-bold">AI Predictive Insight</span>
                </div>
                <p className="text-sm italic text-slate-600 dark:text-slate-300">
                  "{aiInsight}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white dark:bg-slate-700 rounded-xl text-center shadow-sm">
                  <p className="text-xs text-slate-400 font-bold mb-1">TEMP</p>
                  <p className="font-bold">24°C</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-700 rounded-xl text-center shadow-sm">
                  <p className="text-xs text-slate-400 font-bold mb-1">METHANE</p>
                  <p className="font-bold text-emerald-500">LOW</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 p-6 bg-slate-900 text-white rounded-3xl shadow-xl max-w-[200px] border border-slate-800">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mb-2" />
            <p className="text-xs font-bold leading-tight uppercase">Smart Pin Feature: Coming in Q4 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-600 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-black mb-4">Why Smart Bins?</h2>
        <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
          Cities waste millions of dollars on inefficient collection schedules. 
          Smart pins allow for "As-Needed" collection, reducing carbon emissions from trucks by 40%.
        </p>
        <button className="px-8 py-3 bg-white text-emerald-600 font-bold rounded-xl inline-flex items-center gap-2 hover:scale-105 transition-transform">
          Register Interest for Pilot Program <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SmartBin;
