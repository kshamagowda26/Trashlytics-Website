
import React from 'react';
import { HeartPulse, CheckCircle, Globe, Users, Building, ShieldCheck, ArrowRight } from 'lucide-react';

const Impact: React.FC = () => {
  const reports = [
    { id: '1', area: 'Sector 42, Campus A', before: 'https://picsum.photos/seed/before1/400/200', after: 'https://picsum.photos/seed/after1/400/200', date: '2 hours ago', status: 'Cleaned' },
    { id: '2', area: 'Central Market', before: 'https://picsum.photos/seed/before2/400/200', after: 'https://picsum.photos/seed/after2/400/200', date: '5 hours ago', status: 'Cleaned' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Start Making Impact</h1>
          <p className="text-xl text-emerald-50/80 mb-8">
            Your contributions help municipal authorities and NGOs clean our cities faster. 
            Every report is a step toward a cleaner planet.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold">
              <Users className="w-4 h-4" /> 2,400+ Active Citizens
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold">
              <Building className="w-4 h-4" /> 12 Municipal Partners
            </div>
          </div>
        </div>
        <HeartPulse className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 opacity-10" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
          <Globe className="w-7 h-7 text-emerald-500" />
          Cleanliness Transformation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports.map((report) => (
            <div key={report.id} className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={report.before} alt="Before" className="w-full h-48 object-cover" />
                  <span className="absolute top-4 left-4 px-2 py-1 bg-black/50 text-white text-[10px] font-bold rounded uppercase backdrop-blur-sm">Before</span>
                </div>
                <div className="relative">
                  <img src={report.after} alt="After" className="w-full h-48 object-cover" />
                  <span className="absolute top-4 left-4 px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded uppercase shadow-lg">After</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{report.area}</h3>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1 text-sm">
                    <CheckCircle className="w-4 h-4" /> {report.status}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Resolved on {report.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-black mb-4">Official Submission Portal</h2>
          <p className="text-slate-400 mb-6">
            Our platform connects directly with the Municipal Corporation, Campus Admin, and Local NGOs. 
            All reports are automatically forwarded to the relevant department for swift action.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold flex items-center gap-2 mb-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Primary
              </h4>
              <p className="text-xs text-slate-500">Municipal Corp & Campus Admin</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold flex items-center gap-2 mb-1">
                <HeartPulse className="w-4 h-4 text-red-400" />
                Secondary
              </h4>
              <p className="text-xs text-slate-500">Environmental NGOs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
            Connect to Official Website <ExternalLink className="w-4 h-4" />
          </button>
          <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
            Submit Monthly Impact Report <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

import { ExternalLink } from 'lucide-react';
export default Impact;
