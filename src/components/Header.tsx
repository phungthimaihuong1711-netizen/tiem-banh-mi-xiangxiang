import React from 'react';
import { Sparkles, Plus, Search, RotateCcw, UserCheck } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenNewModal: () => void;
  onResetDefaults: () => void;
  totalCharacters: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onOpenNewModal,
  onResetDefaults,
  totalCharacters,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-600 flex items-center justify-center shadow-md shadow-amber-500/20 text-white flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white truncate">
                Không Gian Nhân Vật
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Showcase & Lore
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Hồ sơ • Lịch sử tin nhắn • Thông tin & Liên kết
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            id="character-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm kiếm nhân vật, danh xưng, thẻ..."
            className="w-full pl-9 pr-4 py-1.5 text-sm bg-slate-800/80 hover:bg-slate-800 focus:bg-slate-800 border border-slate-700/80 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            id="reset-characters-btn"
            onClick={onResetDefaults}
            title="Khôi phục danh sách mẫu gốc"
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg border border-transparent hover:border-slate-700 text-xs flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden lg:inline">Đặt lại mẫu</span>
          </button>

          <button
            id="create-new-character-btn"
            onClick={onOpenNewModal}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium shadow-sm shadow-amber-900/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          >
            <Plus className="w-4 h-4" />
            <span>Thêm nhân vật</span>
          </button>

          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-300 font-mono">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{totalCharacters}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
