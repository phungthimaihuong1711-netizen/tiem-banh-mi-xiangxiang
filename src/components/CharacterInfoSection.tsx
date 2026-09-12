import React, { useState } from 'react';
import { Character } from '../types';
import { User, Shield, Brain, Heart, Zap, Award, Sparkles, ChevronDown, ChevronUp, Swords, Book } from 'lucide-react';

interface CharacterInfoSectionProps {
  character: Character;
}

export const CharacterInfoSection: React.FC<CharacterInfoSectionProps> = ({ character }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'backstory' | 'abilities'>('overview');
  const [showFullBackstory, setShowFullBackstory] = useState(false);

  const { info } = character;

  const statLabels: { [key: string]: { label: string; icon: React.ReactNode; color: string } } = {
    leadership: { label: 'Lãnh đạo / Chỉ huy', icon: <Award className="w-3.5 h-3.5" />, color: 'from-amber-500 to-amber-600' },
    intelligence: { label: 'Trí tuệ / Chiến lược', icon: <Brain className="w-3.5 h-3.5" />, color: 'from-blue-500 to-blue-600' },
    strength: { label: 'Sức mạnh / Thể chất', icon: <Swords className="w-3.5 h-3.5" />, color: 'from-rose-500 to-rose-600' },
    agility: { label: 'Tốc độ / Linh hoạt', icon: <Zap className="w-3.5 h-3.5" />, color: 'from-emerald-500 to-emerald-600' },
    charisma: { label: 'Uy tín / Khí chất', icon: <Heart className="w-3.5 h-3.5" />, color: 'from-purple-500 to-purple-600' },
    resolve: { label: 'Ý chí / Kiên định', icon: <Shield className="w-3.5 h-3.5" />, color: 'from-cyan-500 to-cyan-600' },
  };

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      {/* Title & Navigation Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Thông Tin Chi Tiết Nhân Vật
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Profile & Lore
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Lý lịch, ngoại hình, tính cách, kỹ năng và tiểu sử hành trạng
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex p-0.5 rounded-xl bg-slate-800 border border-slate-700 text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Hồ sơ & Chỉ số
          </button>
          <button
            onClick={() => setActiveTab('backstory')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'backstory'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Tiểu sử
          </button>
          <button
            onClick={() => setActiveTab('abilities')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'abilities'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Kỹ năng ({info.abilities?.length || 0})
          </button>
        </div>
      </div>

      {/* Tab 1: Overview & Stats */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {info.role && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Vai trò / Chức vụ
                </span>
                <p className="text-sm font-medium text-slate-100 mt-1">{info.role}</p>
              </div>
            )}
            {info.faction && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Phe phái / Tổ chức
                </span>
                <p className="text-sm font-medium text-slate-100 mt-1">{info.faction}</p>
              </div>
            )}
            {info.era && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Thời đại / Bối cảnh
                </span>
                <p className="text-sm font-medium text-slate-100 mt-1">{info.era}</p>
              </div>
            )}
            {info.gender && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Giới tính
                </span>
                <p className="text-sm font-medium text-slate-100 mt-1">{info.gender}</p>
              </div>
            )}
            {info.age && (
              <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                  Tuổi / Niên đại
                </span>
                <p className="text-sm font-medium text-slate-100 mt-1">{info.age}</p>
              </div>
            )}
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">
                Trạng thái hiển thị
              </span>
              <p className="text-sm font-medium text-amber-300 mt-1 capitalize">
                {character.status}
              </p>
            </div>
          </div>

          {/* Personality & Appearance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {info.appearance && (
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ngoại hình & Diện mạo
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {info.appearance}
                </p>
              </div>
            )}

            {info.personality && (
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
                <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" />
                  Tính cách & Khí chất
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {info.personality}
                </p>
              </div>
            )}
          </div>

          {/* Attribute Stats Bars */}
          {info.stats && Object.keys(info.stats).length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Chỉ Số Năng Lực & Thuộc Tính
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {Object.entries(info.stats).map(([statKey, rawValue]) => {
                  const numValue = typeof rawValue === 'number' ? rawValue : Number(rawValue) || 0;
                  const statConfig = statLabels[statKey] || {
                    label: statKey,
                    icon: <Award className="w-3.5 h-3.5" />,
                    color: 'from-amber-500 to-amber-600',
                  };
                  return (
                    <div key={statKey} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                          {statConfig.icon}
                          {statConfig.label}
                        </span>
                        <span className="font-mono font-bold text-amber-400">{numValue}/100</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${statConfig.color} transition-all duration-700`}
                          style={{ width: `${Math.min(numValue, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Backstory */}
      {activeTab === 'backstory' && (
        <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider">
            <Book className="w-4 h-4" />
            Tiểu Sử & Hành Trình Cuộc Đời
          </div>

          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif whitespace-pre-line">
            {info.backstory ? (
              showFullBackstory || info.backstory.length < 400 ? (
                info.backstory
              ) : (
                `${info.backstory.slice(0, 400)}...`
              )
            ) : (
              'Chưa cập nhật tiểu sử chi tiết cho nhân vật này.'
            )}
          </div>

          {info.backstory && info.backstory.length >= 400 && (
            <button
              onClick={() => setShowFullBackstory(!showFullBackstory)}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 pt-1 transition-colors cursor-pointer"
            >
              {showFullBackstory ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5" /> Thu gọn
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5" /> Đọc toàn bộ tiểu sử
                </>
              )}
            </button>
          )}
        </div>
      )}

      {/* Tab 3: Abilities */}
      {activeTab === 'abilities' && (
        <div className="space-y-3">
          <div className="text-xs text-slate-400 mb-2">
            Những kỹ năng, tuyệt kỹ hoặc năng lực phi thường gắn liền với danh xưng nhân vật
          </div>
          {info.abilities && info.abilities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {info.abilities.map((ability, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-2.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200">{ability}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-6 text-center text-xs text-slate-400">
              Chưa có danh sách kỹ năng được thêm.
            </div>
          )}
        </div>
      )}
    </section>
  );
};
