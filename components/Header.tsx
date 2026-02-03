import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  variant?: 'article' | 'sales';
}

const Header: React.FC<HeaderProps> = ({ variant = 'article' }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#f3e7ed] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <div className="mx-auto flex max-w-[960px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">spa</span>
          <h2 className="text-xl font-black tracking-tighter text-text-main uppercase font-serif">Faccelove</h2>
        </Link>
        
        {variant === 'article' ? (
          <div className="hidden md:flex items-center gap-6">
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Sponsored Content</span>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Beauty</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Anti-Aging</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Science</a>
          </div>
        ) : (
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/offer" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
            <a href="#science" className="text-sm font-medium hover:text-primary transition-colors">Our Science</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
        )}

        <div className="flex gap-3">
          <Link to="/offer" className="flex items-center gap-2 bg-primary hover:bg-primary/90 transition text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">
            Shop Now
          </Link>
          {variant === 'sales' && (
             <button className="hidden sm:flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-text-main hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined">shopping_bag</span>
             </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;