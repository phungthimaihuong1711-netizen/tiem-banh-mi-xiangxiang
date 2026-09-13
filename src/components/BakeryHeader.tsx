import React from 'react';
import { AppView } from '../types';
import { Sparkles, Heart } from 'lucide-react';

interface BakeryHeaderProps {
  currentView: AppView;
  onNavigateHome: () => void;
}

export const BakeryHeader: React.FC<BakeryHeaderProps> = ({
  currentView: _currentView,
  onNavigateHome,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-pink-100 shadow-xs">
      <div className="max-w-xl mx-auto px-4 py-2.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-400 to-amber-300 flex items-center justify-center text-lg shadow-xs group-hover:rotate-6 transition-transform">
            🥖
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-stone-800 flex items-center gap-1 group-hover:text-pink-600 transition-colors">
              <span>Tiệm bánh mì của Xiangxiang</span>
              <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 inline" />
            </h1>
            <p className="text-[10px] text-pink-500 font-medium">
              Kawaii Bakery • Góc nhỏ ấm cúng
            </p>
          </div>
        </button>

        {/* Action badge */}
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-600 text-[10px] font-bold border border-pink-100">
            <Sparkles className="w-2.5 h-2.5 text-pink-500" />
            <span>Mở cửa</span>
          </span>
        </div>
      </div>
    </header>
  );
};
