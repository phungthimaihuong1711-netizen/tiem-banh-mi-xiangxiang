import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, ChevronRight, User, Sparkles, Heart } from 'lucide-react';
import { Character, BreadCategory } from '../types';
import { ScrapbookPageBackground } from './ScrapbookPageBackground';

interface CharacterListViewProps {
  category: BreadCategory;
  characters: Character[];
  onSelectCharacter: (charId: string) => void;
  onBackToCategories: () => void;
}

export const CharacterListView: React.FC<CharacterListViewProps> = ({
  category,
  characters,
  onSelectCharacter,
  onBackToCategories,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter within this category
  const filteredChars = characters.filter((c) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      c.name.toLowerCase().includes(term) ||
      c.shortDescription.toLowerCase().includes(term) ||
      (c.title && c.title.toLowerCase().includes(term))
    );
  });

  return (
    <ScrapbookPageBackground categoryId={category.id}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="w-full max-w-lg mx-auto px-4 py-4 sm:py-6"
      >
        {/* Top Header & Navigation */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <button
            id="btn-back-to-categories"
            onClick={onBackToCategories}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-stone-700 font-bold text-xs sm:text-sm shadow-xs border border-pink-200 hover:border-pink-300 hover:text-pink-600 backdrop-blur-xs transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Menu các loại bánh</span>
          </button>
        </div>

        {/* Selected Bread Category Banner - Phong cách Scrapbook đài các */}
        <div className={`p-4 rounded-3xl bg-white/85 backdrop-blur-md border-2 border-pink-200/90 shadow-[0_4px_20px_-2px_rgba(244,114,182,0.2)] mb-4 flex items-center gap-3.5 sm:gap-4 relative overflow-hidden`}>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${category.themeColor} opacity-30 pointer-events-none`}
          />
          <span className="absolute -top-1.5 -right-1 text-pink-300 opacity-60 text-xs pointer-events-none">
            ✦
          </span>

          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-pink-200 shadow-inner bg-amber-50 relative z-10">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1 left-1 bg-white/95 rounded-md px-1 py-0.2 shadow-xs text-[10px]">
              {category.emoji}
            </div>
          </div>

          <div className="flex-1 min-w-0 relative z-10">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h2
                className="text-lg sm:text-xl font-black text-stone-800"
                style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
              >
                {category.name}
              </h2>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${category.badgeBg} ${category.badgeText} border border-pink-200/50 shadow-xs`}>
                {category.genre}
              </span>
            </div>
            <p className="text-xs text-stone-600 font-medium">
              {category.description}
            </p>
            <div className="mt-1 flex items-center gap-1 text-[11px] text-pink-600 font-bold">
              <Sparkles className="w-3 h-3 text-pink-500" />
              <span>{characters.length} nhân vật trong thế giới này</span>
            </div>
          </div>
        </div>

        {/* Quick Search (chỉ hiển thị khi có nhân vật để tìm kiếm) */}
        {characters.length > 0 && (
          <div className="relative mb-4">
            <Search className="w-4 h-4 text-pink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={`Tìm kiếm trong ${category.name}...`}
              className="w-full pl-9.5 pr-8 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xs text-stone-800 placeholder-stone-400 text-xs sm:text-sm border border-pink-200 focus:outline-none focus:border-pink-400 shadow-xs transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* Character Cards List hoặc Trạng thái trống Kawaii Bakery */}
        <div className="space-y-3.5">
          {characters.length === 0 ? (
            /* Trạng thái trống khi chưa có nhân vật nào trong danh mục */
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 text-center border-2 border-dashed border-pink-200/90 shadow-[0_6px_24px_-4px_rgba(244,114,182,0.18)] relative overflow-hidden"
            >
              {/* Trang trí nền góc */}
              <div className="absolute top-2 left-3 text-pink-300/60 text-xs select-none">🎀</div>
              <div className="absolute top-2 right-3 text-pink-300/60 text-xs select-none">✦</div>
              <div className="absolute bottom-2 right-3 text-pink-300/60 text-xs select-none">♡</div>
              <div className="absolute bottom-2 left-3 text-pink-300/60 text-xs select-none">✨</div>

              {/* Icon / Sticker bánh dễ thương */}
              <div className="relative inline-block mb-3.5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-pink-100 to-rose-50 border-2 border-pink-200 flex items-center justify-center text-3xl sm:text-4xl shadow-inner mx-auto">
                  {category.emoji}
                </div>
                <span className="absolute -bottom-1 -right-1 text-base">🌸</span>
              </div>

              {/* Dòng chữ trạng thái trống theo đúng yêu cầu */}
              <h3
                className="text-lg sm:text-xl font-black text-[#8D2548] flex items-center justify-center gap-1.5 mb-1.5"
                style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
              >
                <span>Chưa có nhân vật</span>
                <span className="text-pink-400 text-base">♡</span>
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 font-medium max-w-sm mx-auto leading-relaxed">
                Những câu chuyện mới sẽ sớm được thêm vào đây.
              </p>
            </motion.div>
          ) : filteredChars.length > 0 ? (
            filteredChars.map((char, index) => (
              <motion.div
                key={char.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.22 }}
                whileHover={{ scale: 1.012 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  id={`card-char-${char.id}`}
                  onClick={() => onSelectCharacter(char.id)}
                  className="w-full text-left bg-white/92 hover:bg-white active:bg-white rounded-3xl p-3.5 sm:p-4 border border-pink-200/90 shadow-[0_4px_16px_-2px_rgba(244,114,182,0.15)] hover:shadow-[0_8px_24px_-4px_rgba(244,114,182,0.25)] hover:border-pink-400 backdrop-blur-md transition-all flex items-center gap-3.5 sm:gap-4 cursor-pointer group relative overflow-hidden select-none"
                >
                  {/* Subtle card corner decorative sparkle */}
                  <span className="absolute -top-1 -right-1 text-pink-300 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all text-xs pointer-events-none">
                    ♡
                  </span>

                  {/* Character Avatar */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-pink-200 bg-pink-50 shadow-inner">
                    {char.avatar ? (
                      <img
                        src={char.avatar}
                        alt={char.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-pink-100 text-pink-400">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                    <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white shadow-xs"></span>
                  </div>

                  {/* Character Details (Name & Short Description) */}
                  <div className="flex-1 min-w-0 pr-1">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h3
                        className="text-sm sm:text-base font-bold text-stone-800 group-hover:text-pink-600 transition-colors line-clamp-1"
                        style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
                      >
                        {char.name}
                      </h3>
                    </div>

                    {char.title && (
                      <p className="text-[11px] font-bold text-rose-500 line-clamp-1 mb-1">
                        {char.title}
                      </p>
                    )}

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                      {char.shortDescription}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-pink-100 text-[11px]">
                      <span className="text-pink-600 font-semibold flex items-center gap-1">
                        <Heart className="w-3 h-3 fill-pink-400 text-pink-500" />
                        <span>Xem câu chuyện</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </motion.div>
            ))
          ) : (
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 text-center border border-pink-200 shadow-xs">
              <p className="text-xs sm:text-sm text-stone-600 font-medium">
                Không tìm thấy nhân vật nào phù hợp với từ khóa "{searchTerm}".
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </ScrapbookPageBackground>
  );
};
