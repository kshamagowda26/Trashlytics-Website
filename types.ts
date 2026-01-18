
export type WasteCategory = 'Wet Waste' | 'Dry Waste' | 'E-Waste' | 'Hazardous' | 'Biomedical' | 'Plastic' | 'C&D' | 'Sewage';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  notificationsEnabled: boolean;
}

export interface WasteReport {
  id: string;
  timestamp: Date;
  category: WasteCategory;
  weight: number;
  status: 'Reported' | 'Collected' | 'Processed';
  imageUrl?: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
