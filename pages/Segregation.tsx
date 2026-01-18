
import React, { useState, useRef } from 'react';
import { Camera, Upload, Trash2, Info, AlertCircle, RefreshCcw, CheckCircle2, ScanLine, Tag } from 'lucide-react';
import { identifyWaste } from '../services/geminiService';
import { WASTE_TYPES } from '../constants';
import { WasteCategory } from '../types';

const Segregation: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [wasteTypeInput, setWasteTypeInput] = useState('');
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
    setWasteTypeInput('');
  };

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

      {!image && (
        <div className="mb-8 p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
          <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-500" />
            Waste Item Type (Optional)
          </label>
          <input 
            type="text" 
            placeholder="e.g. Plastic bottle, Apple core..."
            value={wasteTypeInput}
            onChange={(e) => setWasteTypeInput(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-900 dark:text-white"
          />
        </div>
      )}

      {!image ? (
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="border-4 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 transition-colors bg-white/50 dark:bg-slate-900/50"
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-4">
            <Camera className="w-10 h-10 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Capture or Upload</h3>
          <p className="text-slate-500 text-center max-w-xs">Take a photo of your waste item or upload an image from your gallery</p>
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-square">
            <img src={image} alt="Waste" className="w-full h-full object-contain" />
            <button 
              onClick={() => setImage(null)}
              className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-lg"
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
                  className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-emerald-500/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      Analyzing with Gemini AI...
                    </>
                  ) : (
                    <>
                      <ScanLine className="w-6 h-6" />
                      Identify Category
                    </>
                  )}
                </button>
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Our AI models can distinguish between plastics, organic waste, e-waste, and more.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border-2 border-emerald-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl text-white ${WASTE_TYPES[result.category]?.color || 'bg-slate-500'}`}>
                      {WASTE_TYPES[result.category]?.icon || <Trash2 className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Identified As</span>
                      <h2 className="text-2xl font-black text-slate-900 dark:text-white">{result.category}</h2>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                      <p className="text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-slate-900 dark:text-white">Instructions: </span>
                        {result.instructions}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                      <p className="text-slate-600 dark:text-slate-400">
                        <span className="font-bold text-slate-900 dark:text-white">Environmental Impact: </span>
                        {result.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={reset}
                    className="w-full py-4 bg-slate-100 dark:bg-slate-800 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-900 dark:text-white"
                  >
                    Scan Another Item
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
