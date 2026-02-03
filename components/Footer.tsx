import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 pb-32">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="size-6 text-gold">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className="font-serif font-bold text-xl tracking-tight text-text-main">Faccelove</span>
        </div>
        <div className="flex justify-center gap-8 text-slate-400 text-xs uppercase tracking-widest mb-8">
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <p className="text-slate-400 text-[10px]">© 2024 Faccelove Luxury Skincare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;