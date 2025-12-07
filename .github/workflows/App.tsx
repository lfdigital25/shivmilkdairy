
import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Stethoscope, LogIn, Clock as ClockIcon, Truck, Syringe, Activity, Settings, CreditCard, Tag, UserPlus, Info } from 'lucide-react';
import { Language, Product, Notification, Offer, Member } from './types';
import { TRANSLATIONS, ADDRESS, PHONE_NUMBER, GOOGLE_MAPS_URL, PRODUCTS as INITIAL_PRODUCTS, NOTIFICATIONS as INITIAL_NOTIFICATIONS, OFFERS as INITIAL_OFFERS, INITIAL_MEMBERS } from './constants';
import { authService, dbService } from './services/firebaseService';
import Clock from './components/Clock';
import ProductModal from './components/ProductModal';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import LoginModal from './components/LoginModal';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('hi');
  const [user, setUser] = useState<{ uid: string; email: string; isAdmin?: boolean; displayName?: string } | null>(null);
  
  // Modals
  const [showDashboard, setShowDashboard] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginTab, setLoginTab] = useState<'login' | 'signup'>('login');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Data State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [offers, setOffers] = useState<Offer[]>(INITIAL_OFFERS);
  
  // Lifted Member State for Global Management
  const [members, setMembers] = useState<Member[]>(INITIAL_MEMBERS);

  const t = TRANSLATIONS;

  useEffect(() => {
    fetchData();
    const unsubscribe = authService.observeUser(setUser);
    return () => unsubscribe();
  }, []);

  const fetchData = async () => {
    try {
      const fetchedProducts = await dbService.getProducts();
      if(fetchedProducts.length > 0) setProducts(fetchedProducts);
    } catch (error) { console.error(error); }
  };

  const agroProducts = products.filter(p => p.category === 'agro' || p.category === 'equipment');
  const dairyProducts = products.filter(p => p.category === 'dairy' || p.category === 'grocery');

  const handleLogout = async () => {
    await authService.logout();
    setUser(null);
    setShowDashboard(false);
    setShowAdminPanel(false);
  };

  const handleLogin = (mockUser: any) => {
    setUser(mockUser);
    setShowLoginModal(false);
  };

  const openLogin = (tab: 'login' | 'signup') => {
    setLoginTab(tab);
    setShowLoginModal(true);
  };

  const handleRegisterMember = (newMember: Member) => {
    setMembers(prev => [...prev, newMember]);
  };

  const handleMemberUpdate = (id: string, updates: Partial<Member>) => {
    setMembers(prev => prev.map(m => m.id === id ? { ...m, ...updates } : m));
  };

  const handleMemberDelete = (id: string) => {
    setMembers(prev => prev.filter(m => m.id !== id));
  };

  const handlePreOrder = () => {
    const message = `Namaste, I am interested in Bulk Order / Pre-booking.`;
    const url = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const isDemoUser = user && (user.uid.startsWith('demo_') || user.uid.includes('admin') || user.uid.length < 20);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* DEMO BANNER */}
      {isDemoUser && !user?.isAdmin && (
        <div className="bg-blue-600 text-white text-xs py-1 px-4 text-center font-medium flex items-center justify-center gap-2">
          <Info size={14} /> <span>You are viewing in <b>Demo Mode</b>. Data shown is simulated.</span>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white shadow-lg border-b border-green-200">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm py-1.5 px-4 text-center font-bold tracking-wider shadow-inner">
          {t.header.greeting[language]}
        </div>
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="https://github.com/lfdigital25/image/blob/main/logo%202nd.png?raw=true" className="h-14 w-14 md:h-16 md:w-16 object-contain rounded-full border-2 border-green-500 shadow-md bg-white p-0.5" alt="Logo"/>
            <div>
              <h1 className="text-lg md:text-2xl font-extrabold text-green-900 leading-tight tracking-tight">{t.header.title[language]}</h1>
              <div className="flex items-center gap-3 mt-1">
                <a href={GOOGLE_MAPS_URL} target="_blank" className="text-xs text-green-700 font-medium hidden md:flex items-center gap-1 hover:underline cursor-pointer"><MapPin size={12} /> {ADDRESS}</a>
                <div className="flex md:hidden gap-3">
                   <a href={GOOGLE_MAPS_URL} target="_blank" className="text-green-600"><MapPin size={18} /></a>
                   <a href={`tel:${PHONE_NUMBER}`} className="text-green-600"><Phone size={18} /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <button onClick={() => setLanguage(prev => prev === 'en' ? 'hi' : 'en')} className="px-3 py-1.5 bg-green-100 text-green-800 text-xs md:text-sm font-bold rounded-full hover:bg-green-200 border border-green-300">{language === 'en' ? 'हिंदी' : 'English'}</button>
            {user ? (
              <div className="flex gap-2">
                {user.isAdmin && <button onClick={() => setShowAdminPanel(true)} className="flex items-center space-x-1 bg-yellow-500 text-black px-3 py-2 rounded-lg font-bold"><Settings size={16} /><span className="hidden sm:inline">Admin</span></button>}
                <button onClick={() => setShowDashboard(true)} className="flex items-center space-x-1 bg-green-700 text-white px-4 py-2 rounded-lg font-medium"><div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div><span className="hidden sm:inline">{t.header.dashboard[language]}</span><span className="sm:hidden">Me</span></button>
              </div>
            ) : (
              <div className="flex gap-2">
                <button onClick={() => openLogin('login')} className="flex items-center space-x-2 bg-white text-slate-800 border border-slate-300 px-4 py-2 rounded-lg hover:bg-slate-50 font-medium shadow-sm transition-all"><LogIn size={16} /><span className="hidden sm:inline">{t.header.login[language]}</span></button>
                <button onClick={() => openLogin('signup')} className="flex items-center space-x-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 font-medium shadow-md transition-all"><UserPlus size={16} /><span className="hidden sm:inline">Register</span></button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 py-12 md:py-16 px-4 text-center border-b border-yellow-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center mb-6">
             <div className="mb-6 relative">
               <div className="absolute inset-0 bg-green-500 blur-lg opacity-20 rounded-full"></div>
               <img src="https://github.com/lfdigital25/image/blob/main/logo%202nd.png?raw=true" className="h-28 w-28 md:h-32 md:w-32 object-contain relative z-10 drop-shadow-2xl" alt="Logo"/>
             </div>
            <Clock />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-green-900 mb-6 drop-shadow-sm tracking-tight">{t.hero.welcome[language]}</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">{t.hero.subtitle[language]}</p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 space-y-16">
        
        {/* --- SPECIAL OFFERS SECTION --- */}
        {offers.length > 0 && (
          <section className="bg-yellow-50 rounded-3xl p-6 shadow-lg border border-yellow-200">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-500 p-2 rounded-full text-white"><Tag size={24} /></div>
                <h3 className="text-2xl font-bold text-yellow-800">{t.sections.offers[language]}</h3>
             </div>
             <div className="grid md:grid-cols-2 gap-4">
                {offers.map(offer => (
                   <div key={offer.id} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-400 flex flex-col justify-between">
                      <div>
                         <h4 className="font-bold text-lg text-slate-800">{offer.title[language]}</h4>
                         <p className="text-slate-600 mt-1">{offer.description[language]}</p>
                      </div>
                      {offer.code && (
                         <div className="mt-3 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded self-start">
                            Code: {offer.code}
                         </div>
                      )}
                   </div>
                ))}
             </div>
          </section>
        )}

        {/* BULK ORDER BANNER */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden group">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-12 transform translate-x-12"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                <div className="bg-yellow-400 p-3 rounded-full text-slate-900"><Truck size={32} strokeWidth={2.5} /></div>
                <h3 className="text-3xl font-bold tracking-tight">{t.banners.bulkTitle[language]}</h3>
              </div>
              <p className="text-slate-300 text-lg max-w-xl leading-relaxed">{t.banners.bulkDesc[language]}</p>
            </div>
            <button onClick={handlePreOrder} className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-1 active:translate-y-0">{t.banners.preOrderBtn[language]}</button>
          </div>
        </section>

        {/* PRODUCTS AGRO */}
        <section id="agro">
          <div className="flex items-center space-x-4 mb-8"><div className="h-10 w-2 bg-green-600 rounded-full"></div><h3 className="text-3xl font-bold text-slate-800">{t.sections.agro[language]}</h3></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">{agroProducts.map(p => <ProductCard key={p.id} product={p} language={language} onClick={() => setSelectedProduct(p)} />)}</div>
        </section>

        {/* PRODUCTS DAIRY */}
        <section id="dairy">
          <div className="flex items-center space-x-4 mb-8"><div className="h-10 w-2 bg-yellow-500 rounded-full"></div><h3 className="text-3xl font-bold text-slate-800">{t.sections.dairy[language]}</h3></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">{dairyProducts.map(p => <ProductCard key={p.id} product={p} language={language} onClick={() => setSelectedProduct(p)} />)}</div>
        </section>

        {/* MEDICAL */}
        <section id="medical" className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-rose-600 p-6 text-white flex items-center gap-3"><Stethoscope size={32} /><h3 className="text-2xl font-bold">{t.sections.medical[language]}</h3></div>
          <div className="p-8 grid md:grid-cols-2 gap-12">
             <div className="space-y-6">
                <div><h4 className="text-lg font-bold text-rose-700 flex items-center gap-2 mb-2"><Activity size={20} /> Disease Control</h4><p className="text-slate-600 leading-relaxed bg-rose-50 p-4 rounded-xl border border-rose-100">{t.info.vetDesc[language]}</p></div>
                <div><h4 className="text-lg font-bold text-rose-700 flex items-center gap-2 mb-2"><Syringe size={20} /> Artificial Insemination (AI)</h4><p className="text-slate-600 leading-relaxed bg-rose-50 p-4 rounded-xl border border-rose-100">{TRANSLATIONS.ai.desc[language]}</p></div>
             </div>
             <div className="flex flex-col justify-center items-center text-center bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="bg-white p-4 rounded-full shadow-md mb-4"><Stethoscope size={48} className="text-rose-500" /></div>
                <h4 className="text-xl font-bold text-slate-800 mb-2">{t.info.contact[language]}</h4>
                <p className="text-slate-500 mb-6 max-w-xs">For emergencies, checkups, and AI services, call our specialist immediately.</p>
                <a href={`tel:${PHONE_NUMBER}`} className="w-full md:w-auto bg-rose-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-700 transition shadow-lg shadow-rose-200 flex items-center justify-center gap-3"><Phone size={20} /> {PHONE_NUMBER}</a>
             </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><ClockIcon size={120} /></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3"><ClockIcon className="text-blue-600" /> {t.info.collectionTimes[language]}</h4>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 flex justify-between items-center"><span className="font-medium text-gray-500">{t.info.morning[language].split(':')[0]}</span><span className="font-bold text-blue-700 text-xl">{t.info.morning[language].split(': ').slice(1).join(': ')}</span></div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 flex justify-between items-center"><span className="font-medium text-gray-500">{t.info.evening[language].split(':')[0]}</span><span className="font-bold text-blue-700 text-xl">{t.info.evening[language].split(': ').slice(1).join(': ')}</span></div>
              </div>
            </div>
          </div>
          <div id="banking" className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 relative overflow-hidden flex flex-col justify-center">
             <div className="absolute -bottom-4 -right-4 bg-emerald-100 rounded-full w-40 h-40 opacity-50"></div>
             <div className="relative z-10">
               <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-emerald-600"><CreditCard size={32} /></div>
               <h4 className="text-2xl font-bold text-emerald-900 mb-3">{t.info.aeps.title[language]}</h4>
               <p className="text-emerald-700 text-lg leading-relaxed">{t.info.aeps.desc[language]}</p>
             </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6"><img src="https://github.com/lfdigital25/image/blob/main/logo%202nd.png?raw=true" className="w-10 h-10 rounded-full bg-white p-0.5" alt="Logo" /><h5 className="text-white font-bold text-xl">{t.header.title[language]}</h5></div>
              <p className="text-slate-400 leading-relaxed mb-6">{t.footer.proprietor[language]}</p>
              <div className="flex gap-4"><a href={`tel:${PHONE_NUMBER}`} className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition"><Phone size={18} /></a><a href={GOOGLE_MAPS_URL} target="_blank" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 transition"><MapPin size={18} /></a></div>
            </div>
            <div>
              <h5 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">Services</h5>
              <ul className="space-y-3">{t.footer.links[language].map((link, i) => (<li key={i} onClick={() => scrollToSection(link.id)} className="hover:text-green-400 cursor-pointer flex items-center gap-2 transition-colors"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> {link.label}</li>))}</ul>
            </div>
            <div>
              <h5 className="text-white font-bold text-lg mb-6 border-b border-slate-700 pb-2 inline-block">{t.info.contact[language]}</h5>
              <div className="space-y-4">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition"><Phone className="text-green-500" size={20} /><span className="font-mono text-lg">{PHONE_NUMBER}</span></a>
                <a href={GOOGLE_MAPS_URL} target="_blank" className="flex items-start gap-3 text-slate-400 hover:text-white transition"><MapPin className="text-green-500 mt-1" size={20} /><span>{ADDRESS}</span></a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center md:flex md:justify-between md:items-center text-sm text-slate-500">
            <p>© {new Date().getFullYear()} Shiv Milk Dairy. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-2 md:gap-6 items-center"><span>{t.header.greeting[language]}</span><span className="bg-slate-800 px-3 py-1 rounded text-slate-400">{t.footer.managed[language]}</span></div>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {showDashboard && user && (
        <Dashboard 
          user={user} 
          language={language} 
          onClose={() => setShowDashboard(false)}
          onLogout={handleLogout}
          notifications={notifications}
        />
      )}

      {selectedProduct && <ProductModal product={selectedProduct} language={language} onClose={() => setSelectedProduct(null)} />}

      {showAdminPanel && user && user.isAdmin && (
        <AdminDashboard 
          language={language}
          onClose={() => setShowAdminPanel(false)}
          products={products}
          onProductUpdate={fetchData}
          notifications={notifications}
          offers={offers}
          onUpdateNotifications={setNotifications}
          onUpdateOffers={setOffers}
          members={members}
          onMemberUpdate={handleMemberUpdate}
          onMemberDelete={handleMemberDelete}
        />
      )}

      {showLoginModal && (
        <LoginModal
          language={language}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          initialTab={loginTab}
          members={members}
          onRegister={handleRegisterMember}
        />
      )}
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; language: Language; onClick: () => void }> = ({ product, language, onClick }) => {
  const name = product.name?.[language] || product.name?.['en'] || 'Unknown Product';
  const desc = product.description?.[language] || product.description?.['en'] || '';
  return (
    <div onClick={onClick} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all cursor-pointer group border border-slate-100 flex flex-col h-full transform hover:-translate-y-1 duration-300">
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
        <img src={product.imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400?text=No+Image')} />
        {product.variants && product.variants.length > 0 && <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">{product.variants.length} Options</div>}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg text-slate-800 line-clamp-2 leading-tight">{name}</h4>
          <span className="bg-green-600 text-white text-sm font-bold px-2.5 py-1 rounded-lg whitespace-nowrap ml-2 shadow-sm">₹{product.price}{product.variants && product.variants.length > 0 ? '+' : ''}</span>
        </div>
        <p className="text-sm text-slate-500 line-clamp-2 mb-5 flex-1 whitespace-pre-line leading-relaxed">{desc}</p>
        <button className="w-full bg-slate-50 text-green-700 font-bold py-3 rounded-xl border border-green-200 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">{TRANSLATIONS.products.viewDetails[language]}</button>
      </div>
    </div>
  );
};

export default App;
