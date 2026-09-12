import React, { useState } from 'react';
import { Character, CharacterLink } from '../types';
import { ExternalLink, Link2, Copy, Check, Plus, Trash2, Globe, Music, Image as ImageIcon, FileText, Share2 } from 'lucide-react';

interface CharacterLinksSectionProps {
  character: Character;
  onUpdateLinks: (updatedLinks: CharacterLink[]) => void;
}

export const CharacterLinksSection: React.FC<CharacterLinksSectionProps> = ({
  character,
  onUpdateLinks,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newType, setNewType] = useState<CharacterLink['type']>('wiki');
  const [newDesc, setNewDesc] = useState('');

  const handleCopyLink = (linkId: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(linkId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDeleteLink = (linkId: string) => {
    onUpdateLinks(character.links.filter((l) => l.id !== linkId));
  };

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    let formattedUrl = newUrl.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const newLink: CharacterLink = {
      id: `link-${Date.now()}`,
      title: newTitle.trim(),
      url: formattedUrl,
      type: newType,
      description: newDesc.trim() || undefined,
    };

    onUpdateLinks([...character.links, newLink]);
    setNewTitle('');
    setNewUrl('');
    setNewDesc('');
    setShowAddForm(false);
  };

  const getLinkIcon = (type: CharacterLink['type']) => {
    switch (type) {
      case 'wiki':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'social':
        return <Share2 className="w-4 h-4 text-pink-400" />;
      case 'gallery':
        return <ImageIcon className="w-4 h-4 text-purple-400" />;
      case 'audio':
        return <Music className="w-4 h-4 text-emerald-400" />;
      case 'document':
        return <FileText className="w-4 h-4 text-amber-400" />;
      default:
        return <Link2 className="w-4 h-4 text-slate-400" />;
    }
  };

  const getLinkTypeBadge = (type: CharacterLink['type']) => {
    const labels: Record<CharacterLink['type'], { text: string; bg: string }> = {
      wiki: { text: 'Bách khoa / Wiki', bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
      social: { text: 'Mạng xã hội', bg: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
      gallery: { text: 'Hình ảnh / Triển lãm', bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
      audio: { text: 'Âm thanh / Nhạc', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
      document: { text: 'Tư liệu lịch sử', bg: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
      other: { text: 'Tham khảo khác', bg: 'bg-slate-500/10 text-slate-400 border-slate-500/20' },
    };
    const current = labels[type] || labels.other;
    return (
      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${current.bg}`}>
        {current.text}
      </span>
    );
  };

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Link2 className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              Liên Kết Nhân Vật (Link Nhân Vật)
              <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {character.links.length} liên kết
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Tài liệu tham khảo, tư liệu bách khoa, nhạc nền và các cổng thông tin liên quan
            </p>
          </div>
        </div>

        <button
          id="add-character-link-btn"
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-3 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-medium flex items-center gap-1.5 transition-all self-start sm:self-auto cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{showAddForm ? 'Đóng form' : 'Thêm liên kết mới'}</span>
        </button>
      </div>

      {/* Add Link Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddLink}
          className="mb-5 p-4 rounded-xl bg-slate-950/60 border border-indigo-500/30 space-y-3"
        >
          <h3 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
            Thêm liên kết mới cho {character.name}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Tiêu đề liên kết *</label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Ví dụ: Wikipedia, Bài nghiên cứu, Fanpage..."
                className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[11px] text-slate-400 mb-1">Phân loại thể loại</label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as CharacterLink['type'])}
                className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="wiki">Bách khoa toàn thư / Wiki</option>
                <option value="document">Tài liệu / Nghiên cứu</option>
                <option value="social">Mạng xã hội / Trang cá nhân</option>
                <option value="gallery">Phòng trưng bày / Tranh ảnh</option>
                <option value="audio">Nhạc nền / Podcast / Âm thanh</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Địa chỉ URL (Link) *</label>
            <input
              type="text"
              required
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">Mô tả ngắn gọn</label>
            <input
              type="text"
              value={newDesc}
              onChange={(e) => setNewDesc(e.target.value)}
              placeholder="Ghi chú nội dung của liên kết này..."
              className="w-full px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-3 py-1.5 text-xs text-slate-400 hover:text-white rounded-lg"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Lưu liên kết
            </button>
          </div>
        </form>
      )}

      {/* Link Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {character.links.length === 0 ? (
          <div className="col-span-full py-8 text-center text-slate-400 text-xs">
            Chưa có liên kết nào cho nhân vật này. Bấm "Thêm liên kết mới" để bổ sung!
          </div>
        ) : (
          character.links.map((link) => (
            <div
              key={link.id}
              className="group p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between gap-2"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="p-1.5 rounded-md bg-slate-800 border border-slate-700">
                      {getLinkIcon(link.type)}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate">
                      {link.title}
                    </span>
                  </div>
                  {getLinkTypeBadge(link.type)}
                </div>

                {link.description && (
                  <p className="text-xs text-slate-400 leading-normal line-clamp-2 mt-1">
                    {link.description}
                  </p>
                )}

                <div className="text-[11px] text-indigo-400/80 truncate font-mono mt-1.5">
                  {link.url}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 mt-1">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Truy cập</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopyLink(link.id, link.url)}
                    title="Sao chép địa chỉ link"
                    className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60 rounded-md transition-colors"
                  >
                    {copiedId === link.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    onClick={() => handleDeleteLink(link.id)}
                    title="Xóa liên kết này"
                    className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-700/60 rounded-md transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
