import React from 'react';
import { Character } from '../types';
import { Shield, Sparkles, Compass, Cpu, Bookmark, Trash2, Plus } from 'lucide-react';

interface CharacterSidebarProps {
  characters: Character[];
  selectedCharacterId: string;
  onSelectCharacter: (id: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onDeleteCharacter: (id: string, e: React.MouseEvent) => void;
  onOpenNewModal: () => void;
}

const CATEGORIES = ['Tất cả', 'Lịch sử', 'Thần thoại', 'Khoa học viễn tưởng', 'Kỳ ảo / Cổ trang', 'Đương đại'];

export const CharacterSidebar: React.FC<CharacterSidebarProps> = ({
  characters,
  selectedCharacterId,
  onSelectCharacter,
  selectedCategory,
  onSelectCategory,
  onDeleteCharacter,
  onOpenNewModal,
}) => {
  const filteredCharacters = characters.filter((c) => {
    if (selectedCategory === 'Tất cả') return true;
    return c.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Lịch sử':
        return <Shield className="w-3.5 h-3.5 text-amber-400" />;
      case 'Thần thoại':
        return <Sparkles className="w-3.5 h-3.5 text-emerald-400" />;
      case 'Khoa học viễn tưởng':
        return <Cpu className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 shadow-xl">
      {/* Category Pills */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            Danh mục thể loại
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {filteredCharacters.length}/{characters.length}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              id={`filter-category-${category}`}
              onClick={() => onSelectCategory(category)}
              className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Character List */}
      <div className="flex-1 overflow-y-auto max-h-[calc(100vh-280px)] space-y-2 pr-1 custom-scrollbar">
        {filteredCharacters.length === 0 ? (
          <div className="py-8 text-center text-slate-400 text-sm">
            <p>Không có nhân vật trong thể loại này.</p>
            <button
              onClick={onOpenNewModal}
              className="mt-3 text-xs text-amber-400 hover:text-amber-300 underline font-medium"
            >
              Tạo nhân vật mới ngay
            </button>
          </div>
        ) : (
          filteredCharacters.map((char) => {
            const isSelected = char.id === selectedCharacterId;
            return (
              <div
                key={char.id}
                id={`character-item-${char.id}`}
                onClick={() => onSelectCharacter(char.id)}
                className={`group relative flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-800/90 border-amber-500/60 shadow-md shadow-amber-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                {/* Avatar with status indicator */}
                <div className="relative w-12 h-12 flex-shrink-0">
                  <img
                    src={char.avatarUrl}
                    alt={char.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-lg object-cover border border-slate-700 group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      // Fallback image
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300';
                    }}
                  />
                  <span
                    className={`absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-slate-900 ${
                      char.status === 'legendary'
                        ? 'bg-amber-400'
                        : char.status === 'mystic'
                        ? 'bg-purple-400'
                        : char.status === 'active'
                        ? 'bg-emerald-400'
                        : 'bg-slate-400'
                    }`}
                    title={`Trạng thái: ${char.status}`}
                  />
                </div>

                {/* Info summary */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h3 className={`text-sm font-semibold truncate ${isSelected ? 'text-amber-300' : 'text-slate-100'}`}>
                      {char.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">{char.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                      {getCategoryIcon(char.category)}
                      <span>{char.category}</span>
                    </span>
                    <span className="text-[11px] text-slate-400">• {char.links.length} liên kết</span>
                  </div>
                </div>

                {/* Quick Delete button (if more than 1 character) */}
                {characters.length > 1 && (
                  <button
                    id={`delete-character-btn-${char.id}`}
                    onClick={(e) => onDeleteCharacter(char.id, e)}
                    title="Xóa nhân vật này"
                    className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-700/80 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Add Character button in sidebar footer */}
      <button
        id="sidebar-add-character-btn"
        onClick={onOpenNewModal}
        className="w-full py-2 px-3 border border-dashed border-slate-700 hover:border-amber-500/60 rounded-xl text-xs font-medium text-slate-300 hover:text-amber-300 flex items-center justify-center gap-2 hover:bg-amber-500/5 transition-all cursor-pointer"
      >
        <Plus className="w-4 h-4 text-amber-400" />
        <span>Thêm nhân vật mới vào không gian</span>
      </button>
    </aside>
  );
};
