import React from 'react';
import { Character } from '../types';
import { Edit3, Maximize2, Share2, Quote, Check, Sparkles } from 'lucide-react';

interface CharacterHeroProps {
  character: Character;
  onEdit: () => void;
  onViewImage: (url: string, title: string) => void;
}

export const CharacterHero: React.FC<CharacterHeroProps> = ({
  character,
  onEdit,
  onViewImage,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'legendary':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Huyền thoại
          </span>
        );
      case 'mystic':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            Huyền tích / Thần thoại
          </span>
        );
      case 'active':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Đang hoạt động
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-700 text-slate-300">
            Lưu trữ
          </span>
        );
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
      {/* Cover Banner */}
      <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950">
        <img
          src={character.coverUrl}
          alt={`Ảnh bìa ${character.name}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-60 hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=1600';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        {/* Top Floating Action buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button
            id="share-character-btn"
            onClick={handleShare}
            className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-all shadow-md"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-slate-300" />}
            <span>{copied ? 'Đã chép link' : 'Chia sẻ'}</span>
          </button>
          <button
            id="edit-character-hero-btn"
            onClick={onEdit}
            className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Chỉnh sửa hồ sơ</span>
          </button>
        </div>
      </div>

      {/* Main Profile Info Section */}
      <div className="relative px-6 pb-6 pt-0">
        <div className="flex flex-col md:flex-row gap-6 items-start -mt-16 sm:-mt-20">
          {/* Avatar with Zoom Button */}
          <div className="relative group/avatar flex-shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-slate-900 bg-slate-800 shadow-2xl relative">
              <img
                src={character.avatarUrl}
                alt={character.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover/avatar:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=500';
                }}
              />
              <button
                id="view-full-avatar-btn"
                onClick={() => onViewImage(character.avatarUrl, `Chân dung ${character.name}`)}
                className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover/avatar:opacity-100 flex flex-col items-center justify-center text-white transition-opacity cursor-pointer text-xs gap-1"
                title="Phóng to ảnh nhân vật"
              >
                <Maximize2 className="w-5 h-5 text-amber-300" />
                <span className="text-[11px] font-medium">Xem ảnh lớn</span>
              </button>
            </div>
          </div>

          {/* Core Title & Metadata */}
          <div className="flex-1 min-w-0 pt-2 sm:pt-4">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              {getStatusBadge(character.status)}
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                {character.category}
              </span>
              {character.info.era && (
                <span className="text-xs text-slate-400">
                  Thời đại: <span className="text-slate-300 font-medium">{character.info.era}</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {character.name}
            </h1>
            <p className="text-sm sm:text-base text-amber-300/90 font-medium mt-1">
              {character.title}
            </p>

            {/* Tag Pills */}
            {character.tags && character.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {character.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Signature Quote Card */}
        {character.quote && (
          <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-slate-200 relative overflow-hidden">
            <Quote className="w-8 h-8 text-amber-500/15 absolute -bottom-1 -right-1 pointer-events-none" />
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 transform -scale-x-100" />
              <div>
                <p className="text-sm sm:text-base font-serif italic text-amber-200/95 leading-relaxed">
                  "{character.quote}"
                </p>
                <p className="text-xs text-amber-400/80 mt-1 font-medium font-sans">
                  — Lời tuyên bố / Châm ngôn của {character.name}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bio Summary */}
        <div className="mt-4 text-sm text-slate-300 leading-relaxed">
          <p>{character.bio}</p>
        </div>
      </div>
    </div>
  );
};
