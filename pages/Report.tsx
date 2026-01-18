
import React, { useState, useRef } from 'react';
import { Camera, Upload, Trash2, MapPin, AlertCircle, FileText, Send, HeartPulse, CheckCircle } from 'lucide-react';
import { identifyWaste } from '../services/geminiService';

const Report: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    wasteType: '',
    severity: 'Medium',
    location: '',
    description: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        autoAnalyze(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const autoAnalyze = async (data: string) => {
    setLoading(true);
    try {
      const result = await identifyWaste(data);
      // We only auto-fill waste type now, not description as requested
      setFormData(prev => ({ ...prev, wasteType: result.category }));
    } catch (e) {
      console.error("Auto analysis failed", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your report has been submitted to local NGOs and the Municipal Authority. Action will be taken shortly.");
    setImage(null);
    setFormData({ wasteType: '', severity: 'Medium', location: '', description: '' });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center shadow-inner">
          <HeartPulse className="w-8 h-8 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">Report Waste</h1>
          <p className="text-slate-500 dark:text-slate-400">Collaborate with NGOs and officials for a cleaner community.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <form onSubmit={handleSubmit} className="p-8">
          {/* Capture Waste Image Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
              <Camera className="w-5 h-5 text-emerald-500" />
              Capture Waste Image
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Upload or take a photo of the waste. Our AI will analyze and classify it automatically.
            </p>
            
            {!image ? (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-emerald-500 bg-slate-50 dark:bg-slate-900/50 transition-all group"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-4">
                  <Upload className="w-8 h-8 text-slate-400 group-hover:text-emerald-500" />
                </div>
                <p className="font-medium text-slate-600 dark:text-slate-300">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</p>
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
              <div className="relative rounded-2xl overflow-hidden h-64 bg-black border border-slate-200 dark:border-slate-700 shadow-inner">
                <img src={image} alt="Reported waste" className="w-full h-full object-contain" />
                <button 
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                {loading && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center flex-col text-white">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
                    <span className="text-sm font-bold">AI Analyzing...</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Report Details Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
              <FileText className="w-5 h-5 text-emerald-500" />
              Report Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Waste Type</label>
                <input 
                  type="text"
                  placeholder="e.g. Plastic, Bio-hazard..."
                  value={formData.wasteType}
                  onChange={(e) => setFormData({...formData, wasteType: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Severity Level</label>
                <select 
                  value={formData.severity}
                  onChange={(e) => setFormData({...formData, severity: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Street name, landmark or campus sector..."
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-slate-900 dark:text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Description</label>
              <textarea 
                rows={4}
                placeholder="Describe the issue in your own words..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none text-slate-900 dark:text-white"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Official Report
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-3xl border border-blue-100 dark:border-blue-800 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Impact Tracking</h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Once submitted, your report is verified and assigned to a local cleanup NGO or a Municipal Ward Officer. 
            You will receive updates in your profile dashboard as the status changes to "Cleaned".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Report;
