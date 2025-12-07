
import { Product, LocalizedString, Notification, Offer, Member } from './types';

export const PHONE_NUMBER = "+919919747247";
export const ADDRESS = "BESIYA NIKAT SHIV MANDIR RAMNaGRA";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/aYg8SmLHuiZZFgWu5";
export const ADMIN_PASSWORD = "ShivDairy@2025";

export const TRANSLATIONS = {
  header: {
    title: {
      en: "Shiv Milk Dairy & Traders",
      hi: "शिव मिल्क डेयरी एंड ट्रेडर्स"
    },
    greeting: {
      en: "🙏 JAI MATA DI | OM NAMAHA SHIVAY 🙏",
      hi: "🙏 जय माता दी | ओम नमः शिवाय 🙏"
    },
    login: { en: "Member Login", hi: "सदस्य लॉगिन" },
    logout: { en: "Logout", hi: "लॉग आउट" },
    dashboard: { en: "Dashboard", hi: "डैशबोर्ड" }
  },
  hero: {
    welcome: { en: "Welcome to Shiv Milk Dairy", hi: "शिव मिल्क डेयरी में आपका स्वागत है" },
    subtitle: { 
      en: "Pure Milk, Quality Products, Trusted Service", 
      hi: "शुद्ध दूध, गुणवत्तापूर्ण उत्पाद, विश्वसनीय सेवा" 
    }
  },
  stats: {
    bestSeller: { en: "🏆 Best Seller Farmer", hi: "🏆 सर्वश्रेष्ठ विक्रेता किसान" },
    topFarmer: { en: "Top Farmer", hi: "शीर्ष किसान" },
    quantity: { en: "Total Quantity", hi: "कुल मात्रा" },
    liters: { en: "Ltr", hi: "ली." }
  },
  banners: {
    bulkTitle: { en: "📢 Bulk Orders & Pre-Booking", hi: "📢 थोक ऑर्डर और प्री-बुकिंग" },
    bulkDesc: { 
      en: "Special rates for Marriage, Parties, and Bulk Milk/Paneer orders. Pre-book to ensure availability!", 
      hi: "शादी, पार्टियों और थोक दूध/पनीर ऑर्डर के लिए विशेष दरें। उपलब्धता सुनिश्चित करने के लिए पहले से बुक करें!" 
    },
    preOrderBtn: { en: "Pre-Order Milk/Paneer", hi: "दूध/पनीर प्री-ऑर्डर करें" }
  },
  sections: {
    agro: { en: "Animal Nutrition & Agriculture", hi: "पशु पोषण और कृषि" },
    dairy: { en: "Dairy & Daily Essentials", hi: "डेयरी और दैनिक आवश्यकताएं" },
    medical: { en: "Veterinary Medical Center", hi: "पशु चिकित्सा केंद्र" },
    banking: { en: "Banking Services (AEPS)", hi: "बैंकिंग सेवाएं (AEPS)" },
    updates: { en: "Notifications & Updates", hi: "सूचनाएं और अपडेट" },
    offers: { en: "Special Offers", hi: "विशेष ऑफर" }
  },
  products: {
    title: { en: "Our Products", hi: "हमारे उत्पाद" },
    orderNow: { en: "Order Now (WhatsApp)", hi: "अभी ऑर्डर करें (व्हाट्सएप)" },
    price: { en: "Price", hi: "मूल्य" },
    viewDetails: { en: "View Details", hi: "विवरण देखें" },
    close: { en: "Close", hi: "बंद करें" },
    selectOption: { en: "Select Option", hi: "विकल्प चुनें" }
  },
  dashboard: {
    title: { en: "Member Dashboard", hi: "सदस्य डैशबोर्ड" },
    memberId: { en: "Member ID", hi: "सदस्य आईडी" },
    earnings: { en: "Total Earnings", hi: "कुल कमाई" },
    lastCollection: { en: "Last Collection", hi: "अंतिम संग्रह" },
    loading: { en: "Loading...", hi: "लोड हो रहा है..." }
  },
  info: {
    collectionTimes: { en: "Milk Collection Times", hi: "दूध संग्रह का समय" },
    morning: { en: "Morning: 06:00 AM - 07:40 AM", hi: "सुबह: 06:00 AM - 07:40 AM" },
    evening: { en: "Evening: 05:00 PM - 06:30 PM", hi: "शाम: 05:00 PM - 06:30 PM" },
    contact: { en: "Contact Doctor", hi: "डॉक्टर से संपर्क करें" },
    vet: { en: "Veterinary Services", hi: "पशु चिकित्सा सेवाएँ" },
    vetDesc: { 
      en: "Complete veterinary support, FMD/Mastitis treatment, and Artificial Insemination (AI).", 
      hi: "पूर्ण पशु चिकित्सा सहायता, खुरपका/थनेला उपचार, और कृत्रिम गर्भाधान (AI)।" 
    },
    aeps: {
      title: { en: "AEPS Banking Service Available", hi: "AEPS बैंकिंग सेवा उपलब्ध है" },
      desc: { en: "Cash Withdrawal & Balance Enquiry available here.", hi: "नकद निकासी और बैलेंस पूछताछ यहाँ उपलब्ध है।" }
    }
  },
  ai: {
    desc: { 
      en: "High quality semen straws available for better breed improvement (Sahiwal, Gir, HF, Jersey).", 
      hi: "बेहतर नस्ल सुधार (साहीवाल, गिर, एचएफ, जर्सी) के लिए उच्च गुणवत्ता वाले वीर्य उपलब्ध हैं।" 
    }
  },
  footer: {
    links: {
      en: [
        { label: "Animal Nutrition", id: "agro" },
        { label: "Agriculture", id: "agro" },
        { label: "Dairy Products", id: "dairy" },
        { label: "Veterinary Services", id: "medical" },
        { label: "AEPS Banking", id: "banking" }
      ],
      hi: [
        { label: "पशु पोषण", id: "agro" },
        { label: "कृषि", id: "agro" },
        { label: "डेयरी उत्पाद", id: "dairy" },
        { label: "पशु चिकित्सा", id: "medical" },
        { label: "AEPS बैंकिंग", id: "banking" }
      ]
    },
    managed: { en: "Managed by LF DIGITAL", hi: "Managed by LF DIGITAL" },
    proprietor: { en: "Proprietor: Mahesh Kumar Tiwari (Chhote Lal Tiwari)", hi: "प्रोप्राइटर: महेश कुमार तिवारी (छोटे लाल तिवारी)" }
  }
};

export const NOTIFICATIONS: Notification[] = [
  // Initial notifications will be empty, managed dynamically
];

export const OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: { en: "Super Saver on Pashuahar", hi: "पशु आहार पर भारी छूट" },
    description: { en: "Get ₹50 off on 50kg bag purchase this week!", hi: "इस सप्ताह 50 किलो बोरी की खरीद पर ₹50 की छूट पाएं!" },
    code: "SAVE50",
    validUntil: "2024-12-31"
  },
  {
    id: 'offer-2',
    title: { en: "Bulk Calcium Deal", hi: "कैल्शियम बल्क डील" },
    description: { en: "Buy 5 Litre Can at special price ₹750.", hi: "5 लीटर कैन विशेष मूल्य ₹750 में खरीदें।" },
    validUntil: "2024-12-31"
  }
];

export const INITIAL_MEMBERS: Member[] = [
  { id: 'JAS25SK001', name: 'Sita Kumari', village: 'Jaswantpura', phone: '9919123456', status: 'active' },
  { id: 'JAS25RK002', name: 'Ram Kumar', village: 'Jaswantpura', phone: '9876543210', status: 'active' },
  { id: 'RAM25MK001', name: 'Mohan Kumar', village: 'Ramnagra', phone: '8765432109', status: 'active' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'calcium-gold', category: 'agro',
    name: { en: "Shwetdhara Gold Calcium", hi: "श्वेतधारा गोल्ड कैल्शियम" },
    price: 150,
    variants: [
      { id: '1l', name: { en: "1 Litre (Packet)", hi: "1 लीटर (पैकेट)" }, price: 150, img: "https://github.com/lfdigital25/image/blob/main/calcium%20packet.jpg?raw=true" },
      { id: '5l', name: { en: "5 Litre (Can)", hi: "5 लीटर (केन)" }, price: 800, img: "https://github.com/lfdigital25/image/blob/main/calcium%20cane.jpg?raw=true" }
    ],
    description: { 
      en: "Scientifically formulated supplement for strong bones and increased milk yield. Contains Calcium, Magnesium, Zinc, and Vitamins.", 
      hi: "मजबूत हड्डियों और दूध बढ़ाने के लिए वैज्ञानिक रूप से तैयार किया गया सप्लीमेंट। इसमें कैल्शियम, मैग्नीशियम, जिंक और विटामिन शामिल हैं।" 
    },
    imageUrl: "https://github.com/lfdigital25/image/blob/main/calcium%20packet.jpg?raw=true"
  },
  {
    id: 'feed-50kg', category: 'agro',
    name: { en: "Shwetdhara Animal Feed", hi: "श्वेतधारा पशु आहार" },
    price: 1250,
    variants: [
      { id: '50kg', name: { en: "50 Kg Bag", hi: "50 किलो बोरी" }, price: 1250, img: "https://github.com/lfdigital25/image/blob/main/pashuahar.jpg?raw=true" },
      { id: '25kg', name: { en: "25 Kg Bag", hi: "25 किलो बोरी" }, price: 640, img: "https://github.com/lfdigital25/image/blob/main/pashuahar.jpg?raw=true" }
    ],
    description: { 
      en: "BIS Certified feed rich in energy and protein. Ensures healthy calves and high-quality milk.", 
      hi: "BIS प्रमाणित आहार जो ऊर्जा और प्रोटीन से भरपूर है। स्वस्थ बछड़े और उच्च गुणवत्ता वाला दूध सुनिश्चित करता है।" 
    },
    imageUrl: "https://github.com/lfdigital25/image/blob/main/pashuahar.jpg?raw=true"
  },
  {
    id: 'min-mix', category: 'agro',
    name: { en: "Chelated Mineral Mixture", hi: "चिलेटेड मिनरल मिक्सचर" },
    price: 100,
    description: { 
      en: "Region special mixture for better reproduction and overall health.", 
      hi: "बेहतर प्रजनन और समग्र स्वास्थ्य के लिए क्षेत्र विशेष मिश्रण।" 
    },
    imageUrl: "https://github.com/lfdigital25/image/blob/main/chileted%20micture.jpg?raw=true"
  },
  {
    id: 'maize-seed', category: 'agro',
    name: { en: "Maize Seeds (Makka)", hi: "मक्का बीज" },
    price: 500,
    variants: [
      { id: 'dkc-9135', name: { en: "DKC 9135", hi: "DKC 9135" }, price: 500, img: "https://github.com/lfdigital25/image/blob/main/maize%209135.jpg?raw=true" },
      { id: 'dkc-9081', name: { en: "DKC 9081", hi: "DKC 9081" }, price: 700, img: "https://github.com/lfdigital25/image/blob/main/maize9081.jpg?raw=true" }
    ],
    description: { 
      en: "Premium quality maize seeds for high yield fodder.", 
      hi: "अधिक उपज वाले चारे के लिए सर्वोत्तम गुणवत्ता वाले मक्का बीज।" 
    },
    imageUrl: "https://github.com/lfdigital25/image/blob/main/maize%209135.jpg?raw=true"
  },
  {
    id: 'ghee', category: 'dairy',
    name: { en: "Pure Desi Ghee", hi: "शुद्ध देसी घी" },
    price: 650,
    description: { en: "Homemade pure ghee. Rich aroma.", hi: "घर का बना शुद्ध घी। भरपूर सुगंध।" },
    imageUrl: "https://github.com/lfdigital25/image/blob/main/ghee.jpg?raw=true"
  },
  {
    id: 'paneer', category: 'dairy',
    name: { en: "Fresh Paneer", hi: "ताज़ा पनीर" },
    price: 400,
    description: { en: "Soft, fresh, and hygienic paneer. Perfect for Matar Paneer.", hi: "नरम, ताजा और स्वच्छ पनीर। मटर पनीर के लिए उत्तम।" },
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 'dahi', category: 'dairy',
    name: { en: "Fresh Dahi (Curd)", hi: "ताज़ा दही" },
    price: 100,
    description: { en: "Thick and creamy curd. 1 Kg Pack.", hi: "गाढ़ा और मलाईदार दही। 1 किलो पैक।" },
    imageUrl: "https://images.unsplash.com/photo-1626139576127-450a6e7b4156?q=80&w=600&auto=format&fit=crop"
  }
];
