import React, { useState, useRef } from 'react';
import { Camera, Trash2, Info, AlertCircle, RefreshCcw, ScanLine, FileText, CheckCircle2 } from 'lucide-react';
import { identifyWaste } from '../services/geminiService';
import { WASTE_TYPES } from '../constants';
import { WasteCategory } from '../types';

const Segregation: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ category: WasteCategory; instructions: string; impact: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentify = async () => {
    if (!image) return;
    setLoading(true);
    try {
      const data = await identifyWaste(image);
      setResult(data);
    } catch (error) {
      console.error("Identification failed", error);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
  };

  const categories = ['Wet Waste', 'Dry Waste', 'E-Waste', 'Hazardous', 'Plastic', 'Biomedical'];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">AI Segregator</h1>
          <p className="text-slate-500 dark:text-slate-400">Identify waste items instantly with AI vision.</p>
        </div>
        <button onClick={reset} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
          <RefreshCcw className="w-6 h-6" />
        </button>
      </div>

      {!image ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-16 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition-all bg-white/50 dark:bg-slate-900/50 group"
        >
          <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Camera className="w-12 h-12 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white">Capture or Upload</h3>
          <p className="text-slate-500 text-center max-w-xs mb-8">Take a photo of your waste item or upload an image from your gallery for instant classification.</p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(c => (
              <span key={c} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 rounded-full border border-slate-200 dark:border-white/5">
                {c}
              </span>
            ))}
          </div>
          
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-square group">
            <img src={image} alt="Waste" className="w-full h-full object-contain" />
            <button 
              onClick={() => setImage(null)}
              className="absolute top-4 right-4 p-3 bg-red-500 text-white rounded-2xl hover:bg-red-600 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {!result ? (
              <div className="h-full flex flex-col justify-center">
                <button
                  onClick={handleIdentify}
                  disabled={loading}
                  className="w-full py-5 bg-emerald-600 text-white rounded-[1.5rem] font-black text-xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all flex flex-col items-center justify-center gap-2 disabled:opacity-80"
                >
                  {loading ? (
                    <>
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mb-1"></div>
                      <span className="tracking-tight">Identifying Waste Type...</span>
                    </>
                  ) : (
                    <>
                      <ScanLine className="w-7 h-7" />
                      Identify Type of Waste
                    </>
                  )}
                </button>
                
                <div className="mt-8 space-y-4">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] text-center">AI SEARCHING FOR:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Wet Waste', 'Dry Waste', 'E-Waste', 'Hazardous'].map(t => (
                      <div key={t} className={`p-3 rounded-xl border flex items-center gap-2 transition-opacity ${loading ? 'animate-pulse' : 'opacity-40'} bg-white/5 border-white/10`}>
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-start gap-4 border border-blue-100 dark:border-blue-800">
                  <Info className="w-6 h-6 text-blue-500 shrink-0" />
                  <p className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
                    Our vision engine uses advanced multi-modal models to distinguish complex waste streams including chemical hazards and electronic components.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                <div className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/10">
                  <div className="flex items-center gap-5 mb-8">
                    <div className={`p-5 rounded-[1.5rem] text-white shadow-lg ${WASTE_TYPES[result.category]?.color || 'bg-slate-500'}`}>
                      {WASTE_TYPES[result.category]?.icon || <Trash2 className="w-10 h-10" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">AI Classification Verified</span>
                      </div>
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Detected Waste Type:</h4>
                      <h2 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">{result.category}</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pt-6 border-t border-slate-100 dark:border-white/5">
                    <div className="flex items-start gap-4">
                      <FileText className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Disposal Instructions</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {result.instructions}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-wider mb-1">Environmental Impact</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium italic opacity-80">
                          {result.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={reset}
                    className="w-full py-5 bg-white dark:bg-slate-800 font-black rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-slate-900 dark:text-white flex items-center justify-center gap-3 border border-slate-200 dark:border-white/10 shadow-sm"
                  >
                    <RefreshCcw className="w-5 h-5 text-emerald-500" />
                    New Scan
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Segregation;