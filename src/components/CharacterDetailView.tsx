import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  MessageCircleHeart,
  BookOpen,
  Sparkles,
  Info,
  Maximize2,
  ExternalLink,
  Heart,
  Send,
  User,
  Sparkle
} from 'lucide-react';
import { Character, BreadCategory } from '../types';
import { ScrapbookPageBackground } from './ScrapbookPageBackground';

interface CharacterDetailViewProps {
  character: Character;
  category: BreadCategory;
  onBackToList: () => void;
  onViewImage: (url: string, title: string) => void;
  onSendMessage?: (text: string) => void;
}

export const CharacterDetailView: React.FC<CharacterDetailViewProps> = ({
  character,
  category,
  onBackToList,
  onViewImage,
  onSendMessage,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'chat'>('profile');
  const [inputMsg, setInputMsg] = useState('');

  // Handle open chat link
  const handleOpenChat = () => {
    if (character.chatLink && character.chatLink.startsWith('http')) {
      window.open(character.chatLink, '_blank', 'noopener,noreferrer');
    } else {
      // Switch to in-app simulated chat tab
      setActiveTab('chat');
    }
  };

  const handleSendLocalMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    if (onSendMessage) {
      onSendMessage(inputMsg);
    }
    setInputMsg('');
  };

  return (
    <ScrapbookPageBackground categoryId={category.id}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="w-full max-w-lg mx-auto px-4 py-4 sm:py-6 space-y-4"
      >
        {/* Top Bar with Navigation & Actions */}
        <div className="flex items-center justify-between gap-2">
          <button
            id="btn-back-to-char-list"
            onClick={onBackToList}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-stone-700 font-bold text-xs sm:text-sm shadow-xs border border-pink-200 hover:border-pink-300 hover:text-pink-600 backdrop-blur-xs transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Quay lại</span>
          </button>

          <div className="flex items-center gap-2">
            <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${category.badgeBg} ${category.badgeText} border border-pink-200/60 shadow-xs`}>
              {category.emoji} {category.name}
            </span>
          </div>
        </div>

        {/* 1. Ảnh Nhân Vật Lớn & Hero Card - Scrapbook Panel */}
        <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-pink-200/90 shadow-[0_6px_24px_-4px_rgba(244,114,182,0.2)] relative overflow-hidden">
          {/* Decorative corner sparkle */}
          <span className="absolute -top-1.5 -right-1 text-pink-300 opacity-70 text-xs pointer-events-none">
            ✦
          </span>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-10">
            {/* Large Avatar Container - Giữ NGUYÊN VẸN file ảnh nhân vật */}
            <div className="relative group shrink-0">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-pink-200 shadow-md bg-pink-50 relative">
                {character.avatar ? (
                  <img
                    src={character.avatar}
                    alt={character.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-pink-300">
                    <User className="w-12 h-12" />
                  </div>
                )}
              </div>

              {/* Click to zoom badge */}
              {character.avatar && (
                <button
                  onClick={() => onViewImage(character.avatar, character.name)}
                  className="absolute bottom-1 right-1 p-1.5 bg-white/95 backdrop-blur-xs text-stone-700 rounded-lg shadow-xs hover:text-pink-600 transition-colors cursor-pointer"
                  title="Phóng to ảnh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Core Info Header */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-pink-100/80 border border-pink-200/60 px-2.5 py-0.5 rounded-full mb-1.5 shadow-xs">
                <Sparkles className="w-3 h-3 text-pink-500" />
                <span>{category.genre}</span>
              </div>

              <h1
                className="text-xl sm:text-2xl font-black text-stone-800 tracking-tight leading-tight"
                style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
              >
                {character.name}
              </h1>

              {character.title && (
                <p className="text-xs font-bold text-rose-500 mt-0.5">
                  {character.title}
                </p>
              )}

              {/* Mô tả ngắn */}
              <div className="mt-2.5 p-2.5 rounded-2xl bg-pink-50/80 border border-pink-200/70 text-xs text-stone-700 leading-relaxed font-medium">
                <span className="font-bold text-[#8D2548]">Mô tả ngắn: </span>
                {character.shortDescription}
              </div>
            </div>
          </div>

          {/* Primary CTA: 💌 Bắt đầu trò chuyện */}
          <div className="mt-4 pt-3 border-t border-pink-100 flex flex-col sm:flex-row gap-2 relative z-10">
            <button
              id="btn-start-chat"
              onClick={handleOpenChat}
              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-bold text-sm sm:text-base shadow-md shadow-pink-200 hover:shadow-pink-300 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 select-none"
            >
              <MessageCircleHeart className="w-5 h-5" />
              <span>💌 Bắt đầu trò chuyện</span>
              {character.chatLink && character.chatLink.startsWith('http') && (
                <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
              )}
            </button>

            {/* Quick tab toggle between Profile & Simulated Chat */}
            <button
              onClick={() => setActiveTab(activeTab === 'profile' ? 'chat' : 'profile')}
              className="py-3 px-4 rounded-2xl bg-white/90 hover:bg-white text-pink-700 font-bold text-xs sm:text-sm border border-pink-200 flex items-center justify-center gap-1.5 cursor-pointer transition-colors select-none"
            >
              <span>{activeTab === 'profile' ? '💬 Xem hội thoại' : '📖 Xem hồ sơ'}</span>
            </button>
          </div>
        </div>

        {activeTab === 'profile' ? (
          <>
            {/* 2. Giới Thiệu (Introduction) */}
            <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-pink-200/80 shadow-[0_4px_16px_-2px_rgba(244,114,182,0.12)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8D2548] uppercase tracking-wider">
                <Sparkle className="w-3.5 h-3.5 text-pink-500" />
                <span>Giới Thiệu</span>
              </div>
              <div className="relative pl-3 border-l-2 border-pink-400 py-1">
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic font-serif">
                  "{character.introduction || character.shortDescription}"
                </p>
              </div>
            </div>

            {/* 3. Cốt Truyện (Plot) */}
            <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-pink-200/80 shadow-[0_4px_16px_-2px_rgba(244,114,182,0.12)] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8D2548] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-rose-500" />
                <span>Cốt Truyện</span>
              </div>
              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-2 font-normal">
                {character.plot ? (
                  <p className="whitespace-pre-line">{character.plot}</p>
                ) : (
                  <p className="text-stone-400 italic">Chưa có cốt truyện chi tiết.</p>
                )}
              </div>
            </div>

            {/* 4. Thông Tin Nhân Vật (Character Info) */}
            <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-pink-200/80 shadow-[0_4px_16px_-2px_rgba(244,114,182,0.12)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider">
                <Info className="w-3.5 h-3.5 text-pink-500" />
                <span>Thông Tin Nhân Vật</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Danh Mục Bánh</span>
                  <span className="font-bold text-stone-800 flex items-center gap-1 mt-0.5">
                    {category.emoji} {category.name}
                  </span>
                </div>

                <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Thể Loại</span>
                  <span className="font-bold text-stone-800 block mt-0.5">
                    {category.genre}
                  </span>
                </div>

                {character.info?.role && (
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">Vai Trò / Thân Phận</span>
                    <span className="font-bold text-stone-800 block mt-0.5">{character.info.role}</span>
                  </div>
                )}

                {character.info?.gender && (
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">Giới Tính</span>
                    <span className="font-bold text-stone-800 block mt-0.5">{character.info.gender}</span>
                  </div>
                )}

                {character.info?.era && (
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">Thời Đại / Niên Đại</span>
                    <span className="font-bold text-stone-800 block mt-0.5">{character.info.era}</span>
                  </div>
                )}

                {character.info?.faction && (
                  <div className="p-2.5 rounded-2xl bg-pink-50/70 border border-pink-100">
                    <span className="text-stone-500 block text-[10px] uppercase font-bold">Phe Phái / Tổ Chức</span>
                    <span className="font-bold text-stone-800 block mt-0.5">{character.info.faction}</span>
                  </div>
                )}
              </div>

              {/* Tính cách & Diện mạo */}
              {character.info?.personality && (
                <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/70 text-xs">
                  <span className="font-bold text-amber-900 block mb-1">Nét Tính Cách:</span>
                  <p className="text-stone-700 leading-relaxed font-medium">{character.info.personality}</p>
                </div>
              )}

              {character.info?.appearance && (
                <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-200/70 text-xs">
                  <span className="font-bold text-rose-900 block mb-1">Diện Mạo & Phong Thái:</span>
                  <p className="text-stone-700 leading-relaxed font-medium">{character.info.appearance}</p>
                </div>
              )}

              {/* Kỹ năng */}
              {character.info?.abilities && character.info.abilities.length > 0 && (
                <div className="pt-1">
                  <span className="text-[11px] font-bold text-stone-700 block mb-1.5">Kỹ Năng & Sở Trường:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {character.info.abilities.map((ability, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-xl bg-pink-100/90 text-pink-800 text-[11px] font-bold border border-pink-200/60"
                      >
                        ✦ {ability}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {character.tags && character.tags.length > 0 && (
                <div className="pt-1 flex flex-wrap gap-1.5">
                  {character.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-lg bg-stone-100 text-stone-600 text-[10px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          /* In-App Interactive Chat & Message History Tab */
          <div className="bg-white/92 backdrop-blur-md rounded-3xl p-4 sm:p-5 border border-pink-200/80 shadow-[0_4px_16px_-2px_rgba(244,114,182,0.12)] space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-pink-100">
              <div className="flex items-center gap-2">
                <MessageCircleHeart className="w-4 h-4 text-pink-500" />
                <h3 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                  Hội Thoại Cùng {character.name}
                </h3>
              </div>
              {character.chatLink && (
                <a
                  href={character.chatLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-pink-600 font-bold hover:underline flex items-center gap-1"
                >
                  Mở link chat gốc <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* Message List */}
            <div className="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              {/* Initial Greeting Message */}
              <div className="flex items-start gap-2.5">
                <img
                  src={character.avatar}
                  alt={character.name}
                  className="w-8 h-8 rounded-full object-cover shrink-0 border border-pink-200 mt-1 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 bg-pink-50/90 rounded-2xl rounded-tl-xs p-3 text-xs text-stone-800 border border-pink-100 shadow-xs">
                  <div className="font-bold text-[#8D2548] text-[11px] mb-1">
                    {character.name} (Lời chào)
                  </div>
                  <p className="leading-relaxed font-medium">{character.introduction}</p>
                </div>
              </div>

              {/* Additional History Messages */}
              {character.messageHistory &&
                character.messageHistory.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.sender !== 'user' && (
                      <img
                        src={character.avatar}
                        alt={character.name}
                        className="w-7 h-7 rounded-full object-cover shrink-0 border border-pink-200 mt-1 shadow-xs"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div
                      className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed shadow-xs ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-tr-xs font-medium'
                          : 'bg-white text-stone-800 border border-pink-100 rounded-tl-xs font-medium'
                      }`}
                    >
                      <div
                        className={`text-[10px] font-bold mb-0.5 ${
                          msg.sender === 'user' ? 'text-pink-100' : 'text-stone-500'
                        }`}
                      >
                        {msg.senderName}
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Interactive Chat Input */}
            <form onSubmit={handleSendLocalMessage} className="flex gap-2 pt-2 border-t border-pink-100">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                placeholder={`Gửi lời nhắn tới ${character.name}...`}
                className="flex-1 px-3.5 py-2.5 rounded-2xl bg-white text-stone-800 placeholder-stone-400 text-xs border border-pink-200 focus:outline-none focus:border-pink-400 shadow-xs"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white rounded-2xl text-xs font-bold hover:from-pink-600 hover:to-rose-500 transition-all shadow-xs flex items-center gap-1 cursor-pointer select-none"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi</span>
              </button>
            </form>
          </div>
        )}

        {/* Bottom Back Button for Easy Mobile Thumb Access */}
        <div className="pt-2 text-center pb-6">
          <button
            id="btn-back-to-list-bottom"
            onClick={onBackToList}
            className="w-full py-3 rounded-2xl bg-white/90 hover:bg-white text-stone-700 font-bold text-xs sm:text-sm border border-pink-200 shadow-xs hover:border-pink-300 hover:text-pink-600 transition-all flex items-center justify-center gap-2 cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>← Quay lại danh sách nhân vật {category.name}</span>
          </button>
        </div>
      </motion.div>
    </ScrapbookPageBackground>
  );
};
