
import React from 'react';
import { 
  Trash2, 
  Wind, 
  Zap, 
  Skull, 
  Stethoscope, 
  Box, 
  Building2, 
  Droplets 
} from 'lucide-react';
import { WasteCategory } from './types';

export const WASTE_TYPES: Record<WasteCategory, { label: string; icon: React.ReactNode; color: string }> = {
  'Wet Waste': { label: 'Wet Waste', icon: <Wind className="w-5 h-5" />, color: 'bg-green-500' },
  'Dry Waste': { label: 'Dry Waste', icon: <Trash2 className="w-5 h-5" />, color: 'bg-blue-500' },
  'E-Waste': { label: 'E-Waste', icon: <Zap className="w-5 h-5" />, color: 'bg-yellow-500' },
  'Hazardous': { label: 'Hazardous', icon: <Skull className="w-5 h-5" />, color: 'bg-red-500' },
  'Biomedical': { label: 'Biomedical', icon: <Stethoscope className="w-5 h-5" />, color: 'bg-pink-500' },
  'Plastic': { label: 'Plastic', icon: <Box className="w-5 h-5" />, color: 'bg-purple-500' },
  'C&D': { label: 'C&D Waste', icon: <Building2 className="w-5 h-5" />, color: 'bg-orange-500' },
  'Sewage': { label: 'Sewage', icon: <Droplets className="w-5 h-5" />, color: 'bg-cyan-500' },
};
