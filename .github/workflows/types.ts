
export type Language = 'en' | 'hi';

export interface LocalizedString {
  en: string;
  hi: string;
}

export interface ProductVariant {
  id: string;
  name: LocalizedString;
  price: number;
  img?: string;
}

export type ProductCategory = 'dairy' | 'agro' | 'grocery' | 'equipment';

export interface Product {
  id: string;
  category: ProductCategory;
  name: LocalizedString;
  price: number; // Base price
  description?: LocalizedString; // Optional description
  imageUrl: string;
  variants?: ProductVariant[]; // Optional variants (e.g., 1L vs 5L)
}

export interface Member {
  id: string;
  name: string;
  village: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface DailyRecord {
  date: string;
  morning: number;
  evening: number;
  total: number;
  amount: number;
}

export interface UserStats {
  memberId: string;
  name: string;
  village?: string; 
  phone?: string;   
  lastCollectionDate: string;
  
  // Milk Stats (Cumulative)
  morningQuantity: number; // Latest or Cumulative based on usage, usually strictly daily entry in Admin
  eveningQuantity: number;
  totalQuantity: number; 
  
  // Financials
  totalAmount: number;
  paidAmount: number;
  remainingAmount: number;

  // History
  history?: DailyRecord[];
}

export interface Seller {
  id: string;
  name: string;
  totalQuantity: number;
}

export interface Notification {
  id: string;
  message: LocalizedString;
  timestamp: string; // ISO string
  type: 'info' | 'alert' | 'success';
}

export interface Offer {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  code?: string;
  validUntil?: string;
}
