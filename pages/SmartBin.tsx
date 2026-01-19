
import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Activity, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Radio, 
  Cpu, 
  MapPin, 
  Trash2, 
  Zap,
  TrendingDown,
  Layers,
  BellRing,
  Target,
  Sun,
  Leaf,
  Users,
  Construction,
  Globe,
  Mail,
  ArrowRight
} from 'lucide-react';

const SmartBin: React.FC = () => {
  const [fillLevel, setFillLevel] = useState(42);
  const [isOnline, setIsOnline] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Simulate live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
      if (Math.random() > 0.98) setIsOnline(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusConfig = () => {
    if (fillLevel < 35) return { color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', label: 'OPTIMAL', icon: <CheckCircle2 className="w-4 h-4" /> };
    if (fillLevel < 75) return { color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20', label: 'MEDIUM', icon: <Activity className="w-4 h-4" /> };
    return { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', label: 'CRITICAL', icon: <AlertTriangle className="w-4 h-4" /> };
  };

  const status = getStatusConfig();

  const techFeatures = [
    { title: 'Fill Level Monitoring', tech: 'Ultrasonic Sensors', desc: 'Detect waste levels with 99% accuracy', icon: <Layers className="w-6 h-6" /> },
    { title: 'IoT Connectivity', tech: 'LoRaWAN & GSM', desc: 'Reliable, long-range data transmission to central platform', icon: <Wifi className="w-6 h-6" /> },
    { title: 'AI Classification', tech: 'Edge AI Camera', desc: 'Automatically identifies and categorizes waste types at the bin', icon: <Cpu className="w-6 h-6" /> },
    { title: 'Smart Alerts', tech: 'Real-time Notifications', desc: 'Instant alerts to collection teams when bins need servicing', icon: <BellRing className="w-6 h-6" /> },
    { title: 'Route Optimization', tech: 'Dynamic Routing Algorithm', desc: 'Reduces fuel costs by 40% with intelligent path planning', icon: <Target className="w-6 h-6" /> },
    { title: 'Solar Powered', tech: 'Solar Panel + Battery', desc: 'Self-sustaining energy with backup for 24/7 operation', icon: <Sun className="w-6 h-6" /> },
  ];

  const benefits = [
    { title: 'Reduce Collection Costs', desc: 'Cut operational expenses by 30-50% with optimized routes', icon: <TrendingDown className="w-8 h-8 text-emerald-500" /> },
    { title: 'Lower Carbon Footprint', desc: 'Fewer unnecessary trips = reduced emissions', icon: <Leaf className="w-8 h-8 text-blue-500" /> },
    { title: 'Community Engagement', desc: 'Real-time updates keep citizens informed', icon: <Users className="w-8 h-8 text-purple-500" /> },
    { title: 'Prevent Overflow', desc: 'Proactive collection prevents littering and overflow', icon: <AlertTriangle className="w-8 h-8 text-amber-500" /> },
  ];

  const roadmap = [
    { phase: 'Phase 1', title: 'Research & Design', status: 'Completed', icon: <CheckCircle2 className="text-emerald-500" />, desc: 'Sensor selection and prototype design' },
    { phase: 'Phase 2', title: 'Prototype Development', status: 'In Progress', icon: <Activity className="text-blue-500 animate-pulse" />, desc: 'Building and testing first smart bin units' },
    { phase: 'Phase 3', title: 'Pilot Program', status: 'Upcoming', icon: <Construction className="text-slate-500" />, desc: 'Deploy 50 bins in partner locations' },
    { phase: 'Phase 4', title: 'City-wide Rollout', status: 'Upcoming', icon: <Globe className="text-slate-500" />, desc: 'Full integration with Trashlytics platform' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`}></div>
                {isOnline ? 'System Live' : 'System Offline'}
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                Sync: {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-white mb-2">
              Smart Bin <span className="text-emerald-500">Node_01</span>
            </h1>
            <p className="text-slate-500 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Future of Urban Infrastructure • District Alpha
            </p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2 text-emerald-400 font-black text-xl">
              <Zap className="w-5 h-5" /> 94% Health
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">AI Diagnostics Nominal</span>
          </div>
        </header>

        {/* 3D Visualization & Quick Stats */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Radio className="w-64 h-64 rotate-12" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-6">3D Node Visualizer</h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Experience the precision of our <strong>Ultrasonic Fill Level Monitoring</strong>. This smart bin integrates seamlessly with the Trashlytics web platform for comprehensive waste analytics, citizen reporting, and municipal management.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                    <p className="text-[10px] text-slate-500 font-black uppercase mb-1">Battery</p>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-emerald-500" />
                      <span className="font-bold text-xl">88%</span>
                    </div>
                  </div>
                  <div className={`p-4 border rounded-2xl ${status.bg} ${status.border}`}>
                    <p className={`text-[10px] font-black uppercase mb-1 ${status.color}`}>Status</p>
                    <div className="flex items-center gap-2">
                      <div className={status.color}>{status.icon}</div>
                      <span className={`font-bold text-xl ${status.color}`}>{status.label}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* The "3D" Bin Representation */}
              <div className="flex flex-col items-center justify-center gap-8 perspective-1000">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700"></div>
                  
                  {/* Bin Shape */}
                  <div className="w-44 h-72 bg-slate-900 border-x-8 border-b-8 border-slate-800 rounded-b-[3rem] rounded-t-xl relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transform hover:rotate-y-12 transition-transform duration-500">
                    {/* Liquid Fill */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out flex items-center justify-center overflow-hidden"
                      style={{ 
                        height: `${fillLevel}%`,
                        background: fillLevel > 75 
                          ? 'linear-gradient(to top, #ef4444, #dc2626)' 
                          : fillLevel > 35 
                            ? 'linear-gradient(to top, #f59e0b, #d97706)' 
                            : 'linear-gradient(to top, #10b981, #059669)'
                      }}
                    >
                      <div className="absolute top-0 left-[-50%] w-[200%] h-10 bg-white/10 rounded-[45%] animate-[spin_5s_linear_infinite]"></div>
                      <span className="text-white font-black text-4xl drop-shadow-xl z-10">{fillLevel}%</span>
                    </div>
                    {/* Reflections */}
                    <div className="absolute top-0 right-0 w-1/4 h-full bg-white/5 skew-x-12 translate-x-10"></div>
                  </div>

                  {/* Sensor Cap */}
                  <div className="absolute top-[-25px] left-1/2 -translate-x-1/2 w-52 h-10 bg-slate-800 border-b-2 border-white/10 rounded-full shadow-2xl flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]"></div>
                  </div>
                </div>

                {/* Right Alignment Slider */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-full border border-white/5">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Fill Controller</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={fillLevel}
                    onChange={(e) => setFillLevel(parseInt(e.target.value))}
                    className="w-48 accent-emerald-500 cursor-pointer h-1 bg-white/10 rounded-full appearance-none"
                  />
                  <div className="w-10 text-center font-black text-emerald-400">{fillLevel}%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-emerald-600 p-8 rounded-[3rem] shadow-xl shadow-emerald-950/20 relative overflow-hidden group h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Cpu className="w-40 h-40" />
              </div>
              <h3 className="text-2xl font-black mb-6 text-white">Smart Bin v2.0</h3>
              <ul className="space-y-4 text-emerald-100 font-bold text-sm">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Mesh Sync Active</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Ultrasonic Precision</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Zero Emission Power</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Dynamic Edge AI</li>
              </ul>
              <div className="mt-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white border border-white/30 backdrop-blur-sm">
                  <Radio className="w-4 h-4 animate-pulse" /> Infrastructure Grade
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Technology Features */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black text-white">Core Technology Features</h2>
            <div className="h-px flex-grow bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techFeatures.map((f, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-emerald-500/5 hover:border-emerald-500/30 transition-all duration-500 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-500 group-hover:text-emerald-400 transition-colors mb-6 border border-white/10">
                  {f.icon}
                </div>
                <h4 className="text-xl font-black mb-1">{f.title}</h4>
                <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4">{f.tech}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black text-white">Key Benefits</h2>
            <div className="h-px flex-grow bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center hover:bg-white/10 transition-all duration-500 flex flex-col items-center">
                <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                  {b.icon}
                </div>
                <h4 className="font-black text-lg mb-3">{b.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Roadmap */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl font-black text-white">Development Roadmap</h2>
            <div className="h-px flex-grow bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="relative p-8 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col h-full group">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{item.phase}</span>
                  <div className="p-2 bg-white/5 rounded-lg">{item.icon}</div>
                </div>
                <h4 className="text-xl font-black mb-2">{item.title}</h4>
                <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${item.status === 'Completed' ? 'text-emerald-500' : item.status === 'In Progress' ? 'text-blue-500' : 'text-slate-600'}`}>
                  {item.status}
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">{item.desc}</p>
                {i < roadmap.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 right-[-12px] -translate-y-1/2 z-10 text-white/20">
                     <ArrowRight className="w-6 h-6" />
                   </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-2xl font-black text-white">Expected Launch: <span className="text-emerald-500">Q3 2026</span></p>
          </div>
        </section>

        {/* Launch Notification Signup */}
        <section className="relative">
          <div className="absolute inset-0 bg-emerald-500/10 blur-[150px] rounded-full opacity-50"></div>
          <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 text-center shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 p-12 opacity-5">
              <Mail className="w-32 h-32" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">Stay Notified</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join our exclusive pilot program rollout. Be the first to receive technical updates and city-wide deployment schedules for the Smart Bin v2.0 ecosystem.
            </p>
            
            {subscribed ? (
              <div className="max-w-md mx-auto p-12 bg-emerald-500/10 border border-emerald-500/20 rounded-[3rem] animate-in zoom-in-95 duration-500">
                <CheckCircle2 className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
                <h3 className="text-3xl font-black mb-2 text-white">You're in the Loop</h3>
                <p className="text-slate-400 font-medium">We'll contact you at 2026-Q3 for the pilot launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-600" />
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-16 pr-6 py-6 bg-slate-900/50 border border-white/10 rounded-[2rem] focus:border-emerald-500 outline-none text-white placeholder:text-slate-600 transition-all font-bold"
                  />
                </div>
                <button 
                  type="submit"
                  className="px-10 py-6 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-[2rem] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/30"
                >
                  Join Waiting List <ArrowRight className="w-6 h-6" />
                </button>
              </form>
            )}
            
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.5em] mt-12">
              Municipal Grade • Enterprise Ready • Q3 2026
            </p>
          </div>
        </section>

        {/* Footer Branding */}
        <footer className="mt-32 pb-12 flex flex-col items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-3">
            <Trash2 className="w-8 h-8 text-emerald-500" />
            <span className="text-2xl font-black tracking-tighter">TRASHLYTICS IoT CORE</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Global Infrastructure Standard • © 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default SmartBin;
