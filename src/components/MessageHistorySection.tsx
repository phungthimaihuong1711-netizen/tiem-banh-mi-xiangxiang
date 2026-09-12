import React, { useState } from 'react';
import { Character, MessageItem } from '../types';
import { MessageSquare, Send, RotateCcw, Copy, Check, User, Sparkles, BookOpen } from 'lucide-react';

interface MessageHistorySectionProps {
  character: Character;
  onUpdateMessages: (updatedMessages: MessageItem[]) => void;
}

export const MessageHistorySection: React.FC<MessageHistorySectionProps> = ({
  character,
  onUpdateMessages,
}) => {
  const [newInputText, setNewInputText] = useState('');
  const [senderRole, setSenderRole] = useState<'user' | 'character' | 'narrator'>('user');
  const [copied, setCopied] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInputText.trim()) return;

    const newMessage: MessageItem = {
      id: `msg-${Date.now()}`,
      sender: senderRole,
      senderName:
        senderRole === 'character'
          ? character.name
          : senderRole === 'user'
          ? 'Người đối thoại'
          : 'Ghi chép lịch sử',
      text: newInputText.trim(),
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      mood: senderRole === 'character' ? 'Đối thoại trực tiếp' : undefined,
    };

    onUpdateMessages([...character.messageHistory, newMessage]);
    setNewInputText('');
  };

  const handleClearCustomMessages = () => {
    // Keep first message or initial set
    if (confirm('Bạn có muốn xóa các tin nhắn vừa nhập để trở về đoạn hội thoại mẫu ban đầu?')) {
      // Filter out user added messages or reset
      onUpdateMessages(character.messageHistory.slice(0, 3));
    }
  };

  const handleCopyAllMessages = () => {
    const textLog = character.messageHistory
      .map((m) => `[${m.timestamp}] ${m.senderName}: ${m.text}`)
      .join('\n\n');
    navigator.clipboard.writeText(textLog);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Lịch Sử Tin Nhắn & Đối Thoại
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {character.messageHistory.length} tin nhắn
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Ghi lại những câu nói, lời đáp lịch sử và đối thoại tương tác của nhân vật
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyAllMessages}
            title="Sao chép toàn bộ hội thoại"
            className="px-2.5 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>Sao chép nhật ký</span>
          </button>
          <button
            onClick={handleClearCustomMessages}
            title="Rút gọn về mặc định"
            className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Message Feed */}
      <div className="space-y-3.5 max-h-[420px] overflow-y-auto pr-2 custom-scrollbar mb-4">
        {character.messageHistory.length === 0 ? (
          <div className="py-10 text-center text-slate-400 text-sm">
            Chưa có lịch sử tin nhắn. Hãy nhập tin nhắn đối thoại bên dưới!
          </div>
        ) : (
          character.messageHistory.map((msg) => {
            const isCharacter = msg.sender === 'character';
            const isNarrator = msg.sender === 'narrator';

            if (isNarrator) {
              return (
                <div key={msg.id} className="flex justify-center my-2">
                  <div className="max-w-xl text-center px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/40 text-xs text-slate-300 italic flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400/80 flex-shrink-0" />
                    <span>{msg.text}</span>
                    <span className="text-[10px] text-slate-400 not-italic font-mono ml-1">
                      ({msg.timestamp})
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={msg.id}
                className={`flex gap-3 items-start ${isCharacter ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0 border border-slate-700 bg-slate-800 flex items-center justify-center">
                  {isCharacter ? (
                    <img
                      src={character.avatarUrl}
                      alt={character.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-4 h-4 text-slate-300" />
                  )}
                </div>

                {/* Bubble */}
                <div className={`max-w-lg ${isCharacter ? 'items-start' : 'items-end'} flex flex-col`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold ${isCharacter ? 'text-amber-300' : 'text-blue-300'}`}>
                      {msg.senderName}
                    </span>
                    {msg.mood && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {msg.mood}
                      </span>
                    )}
                    <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                  </div>

                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      isCharacter
                        ? 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
                        : 'bg-blue-600/90 text-white rounded-tr-none border border-blue-500/50'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Interactive Message Input */}
      <form onSubmit={handleSendMessage} className="pt-3 border-t border-slate-800/80">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-slate-400 font-medium">Gửi với tư cách:</span>
          <div className="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs">
            <button
              type="button"
              onClick={() => setSenderRole('user')}
              className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                senderRole === 'user' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Người hỏi / Bạn
            </button>
            <button
              type="button"
              onClick={() => setSenderRole('character')}
              className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                senderRole === 'character' ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {character.name.split(' ')[0]} (Nhân vật)
            </button>
            <button
              type="button"
              onClick={() => setSenderRole('narrator')}
              className={`px-2.5 py-0.5 rounded-md font-medium transition-all ${
                senderRole === 'narrator' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sử ký / Dẫn truyện
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newInputText}
            onChange={(e) => setNewInputText(e.target.value)}
            placeholder={
              senderRole === 'user'
                ? `Nhập lời đối thoại gửi đến ${character.name}...`
                : senderRole === 'character'
                ? `Nhập câu đối thoại đáp từ của ${character.name}...`
                : `Nhập lời bình sử lược hoặc tình huống bối cảnh...`
            }
            className="flex-1 px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-100 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Gửi</span>
          </button>
        </div>
      </form>
    </section>
  );
};
