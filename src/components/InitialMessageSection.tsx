import React from 'react';
import { Character } from '../types';
import { MessageSquareQuote, Volume2, Copy, Check, Sparkles } from 'lucide-react';

interface InitialMessageSectionProps {
  character: Character;
  onEditMessage?: () => void;
}

export const InitialMessageSection: React.FC<InitialMessageSectionProps> = ({
  character,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [isSpeaking, setIsSpeaking] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(character.initialMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(character.initialMessage);
      utterance.lang = 'vi-VN';
      utterance.rate = 0.95;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <MessageSquareQuote className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Tin Nhắn Đầu Tiên (Lời Chào Mở Đầu)
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Opening Dialogue
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Thông điệp đầu tiên nhân vật cất lời khi đối thoại hoặc ra mắt người tiếp xúc
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {'speechSynthesis' in window && (
            <button
              id="speech-initial-message-btn"
              onClick={handleSpeak}
              title={isSpeaking ? 'Dừng đọc' : 'Đọc thử lời chào này'}
              className={`p-2 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                isSpeaking
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}

          <button
            id="copy-initial-message-btn"
            onClick={handleCopy}
            title="Sao chép tin nhắn đầu"
            className="p-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Dialogue Box */}
      <div className="flex flex-col sm:flex-row gap-4 items-start bg-slate-950/60 p-4 rounded-xl border border-slate-800">
        <div className="relative w-12 h-12 flex-shrink-0">
          <img
            src={character.avatarUrl}
            alt={character.name}
            referrerPolicy="no-referrer"
            className="w-full h-full rounded-xl object-cover border border-amber-500/40"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=200';
            }}
          />
          <Sparkles className="w-3.5 h-3.5 text-amber-400 absolute -top-1 -right-1" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-bold text-amber-300">{character.name}</span>
            <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              {character.title}
            </span>
          </div>
          <div className="relative bg-slate-900/90 border border-slate-700/60 rounded-2xl rounded-tl-sm p-3.5 shadow-inner">
            <p className="text-sm sm:text-base text-slate-100 font-sans leading-relaxed">
              "{character.initialMessage}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
