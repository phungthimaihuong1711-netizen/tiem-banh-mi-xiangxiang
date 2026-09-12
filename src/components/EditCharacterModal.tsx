import React, { useState, useEffect } from 'react';
import { Character, MessageItem, CharacterLink } from '../types';
import { X, Save, Plus, Trash2, Image as ImageIcon, Sparkles, MessageSquare, Info, Link2 } from 'lucide-react';

interface EditCharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (character: Character) => void;
  characterToEdit: Character | null; // null if creating new
}

export const EditCharacterModal: React.FC<EditCharacterModalProps> = ({
  isOpen,
  onClose,
  onSave,
  characterToEdit,
}) => {
  const [activeTab, setActiveTab] = useState<'basic' | 'initial_message' | 'message_history' | 'info' | 'links'>('basic');

  // Form State
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Character['category']>('Lịch sử');
  const [status, setStatus] = useState<Character['status']>('legendary');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [quote, setQuote] = useState('');
  const [bio, setBio] = useState('');
  const [initialMessage, setInitialMessage] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  // Info state
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [era, setEra] = useState('');
  const [faction, setFaction] = useState('');
  const [role, setRole] = useState('');
  const [appearance, setAppearance] = useState('');
  const [personality, setPersonality] = useState('');
  const [backstory, setBackstory] = useState('');
  const [abilitiesInput, setAbilitiesInput] = useState('');

  // Stats
  const [statLeadership, setStatLeadership] = useState(90);
  const [statIntelligence, setStatIntelligence] = useState(90);
  const [statStrength, setStatStrength] = useState(85);
  const [statAgility, setStatAgility] = useState(85);
  const [statCharisma, setStatCharisma] = useState(90);
  const [statResolve, setStatResolve] = useState(95);

  // Message History State
  const [messages, setMessages] = useState<MessageItem[]>([]);

  // Links State
  const [links, setLinks] = useState<CharacterLink[]>([]);

  useEffect(() => {
    if (characterToEdit) {
      setName(characterToEdit.name);
      setTitle(characterToEdit.title);
      setCategory(characterToEdit.category);
      setStatus(characterToEdit.status);
      setAvatarUrl(characterToEdit.avatarUrl);
      setCoverUrl(characterToEdit.coverUrl);
      setQuote(characterToEdit.quote);
      setBio(characterToEdit.bio);
      setInitialMessage(characterToEdit.initialMessage);
      setTagsInput(characterToEdit.tags?.join(', ') || '');

      const inf = characterToEdit.info || {};
      setGender(inf.gender || '');
      setAge(inf.age || '');
      setEra(inf.era || '');
      setFaction(inf.faction || '');
      setRole(inf.role || '');
      setAppearance(inf.appearance || '');
      setPersonality(inf.personality || '');
      setBackstory(inf.backstory || '');
      setAbilitiesInput(inf.abilities?.join('\n') || '');

      const st = inf.stats || {};
      setStatLeadership(st.leadership ?? 90);
      setStatIntelligence(st.intelligence ?? 90);
      setStatStrength(st.strength ?? 85);
      setStatAgility(st.agility ?? 85);
      setStatCharisma(st.charisma ?? 90);
      setStatResolve(st.resolve ?? 95);

      setMessages(characterToEdit.messageHistory || []);
      setLinks(characterToEdit.links || []);
    } else {
      // New default template
      setName('');
      setTitle('');
      setCategory('Lịch sử');
      setStatus('active');
      setAvatarUrl('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800');
      setCoverUrl('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600');
      setQuote('');
      setBio('');
      setInitialMessage('Xin chào! Rất hân hạnh được gặp gỡ.');
      setTagsInput('Mới tạo, Nhân vật');
      setGender('');
      setAge('');
      setEra('');
      setFaction('');
      setRole('');
      setAppearance('');
      setPersonality('');
      setBackstory('');
      setAbilitiesInput('');
      setStatLeadership(85);
      setStatIntelligence(85);
      setStatStrength(80);
      setStatAgility(80);
      setStatCharisma(85);
      setStatResolve(90);
      setMessages([
        {
          id: `msg-${Date.now()}-1`,
          sender: 'character',
          senderName: 'Nhân vật',
          text: 'Xin chào! Rất hân hạnh được gặp gỡ.',
          timestamp: 'Bắt đầu',
          mood: 'Thân thiện',
        },
      ]);
      setLinks([]);
    }
  }, [characterToEdit, isOpen]);

  if (!isOpen) return null;

  const handleAddMessageItem = () => {
    const newMsg: MessageItem = {
      id: `msg-${Date.now()}`,
      sender: 'character',
      senderName: name.trim() || 'Nhân vật',
      text: '',
      timestamp: 'Thời điểm',
      mood: 'Bình thường',
    };
    setMessages([...messages, newMsg]);
  };

  const handleUpdateMessage = (index: number, field: keyof MessageItem, val: string) => {
    const next = [...messages];
    next[index] = { ...next[index], [field]: val };
    setMessages(next);
  };

  const handleRemoveMessage = (index: number) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const handleAddLinkItem = () => {
    const newL: CharacterLink = {
      id: `link-${Date.now()}`,
      title: 'Tên liên kết mới',
      url: 'https://',
      type: 'wiki',
      description: '',
    };
    setLinks([...links, newL]);
  };

  const handleUpdateLink = (index: number, field: keyof CharacterLink, val: string) => {
    const next = [...links];
    next[index] = { ...next[index], [field]: val };
    setLinks(next);
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Vui lòng nhập tên nhân vật');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const abilities = abilitiesInput
      .split('\n')
      .map((a) => a.trim())
      .filter((a) => a.length > 0);

    const updatedChar: Character = {
      id: characterToEdit ? characterToEdit.id : `char-${Date.now()}`,
      name: name.trim(),
      title: title.trim() || 'Nhân vật huyền bí',
      category,
      status,
      avatarUrl: avatarUrl.trim() || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
      coverUrl: coverUrl.trim() || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600',
      quote: quote.trim(),
      bio: bio.trim() || 'Chưa có thông tin tóm tắt.',
      initialMessage: initialMessage.trim() || 'Xin chào!',
      messageHistory: messages,
      info: {
        gender: gender.trim(),
        age: age.trim(),
        era: era.trim(),
        faction: faction.trim(),
        role: role.trim(),
        appearance: appearance.trim(),
        personality: personality.trim(),
        backstory: backstory.trim(),
        abilities,
        stats: {
          leadership: Number(statLeadership),
          intelligence: Number(statIntelligence),
          strength: Number(statStrength),
          agility: Number(statAgility),
          charisma: Number(statCharisma),
          resolve: Number(statResolve),
        },
      },
      links,
      tags,
      updatedAt: new Date().toISOString().split('T')[0],
    };

    onSave(updatedChar);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {characterToEdit ? `Chỉnh sửa: ${characterToEdit.name}` : 'Thêm nhân vật mới vào không gian'}
              </h2>
              <p className="text-xs text-slate-400">
                Tùy chỉnh ảnh, tin nhắn đầu, lịch sử trò chuyện, hồ sơ và các liên kết
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs Navigation */}
        <div className="flex overflow-x-auto border-b border-slate-800 px-6 bg-slate-900/90 text-xs font-medium gap-2 py-2.5 custom-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('basic')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'basic' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Ảnh & Thông tin cơ bản
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('initial_message')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'initial_message' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Tin nhắn đầu
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('message_history')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'message_history' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Lịch sử tin nhắn ({messages.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('info')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'info' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            Hồ sơ chi tiết & Chỉ số
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('links')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'links' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            Link nhân vật ({links.length})
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar">
          {/* TAB 1: BASIC INFO & IMAGES */}
          {activeTab === 'basic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tên nhân vật *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ví dụ: Nguyễn Huệ, Trần Hưng Đạo..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Danh xưng / Biệt hiệu *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ví dụ: Quang Trung Hoàng Đế..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Thể loại</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Lịch sử">Lịch sử</option>
                    <option value="Thần thoại">Thần thoại</option>
                    <option value="Khoa học viễn tưởng">Khoa học viễn tưởng</option>
                    <option value="Kỳ ảo / Cổ trang">Kỳ ảo / Cổ trang</option>
                    <option value="Đương đại">Đương đại</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Trạng thái huy hiệu</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as Character['status'])}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="legendary">Huyền thoại</option>
                    <option value="mystic">Huyền tích / Thần thoại</option>
                    <option value="active">Đang hoạt động</option>
                    <option value="archived">Lưu trữ</option>
                  </select>
                </div>
              </div>

              {/* Image URLs & Live Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ảnh đại diện (Avatar URL) *</label>
                  <input
                    type="text"
                    required
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-amber-500"
                  />
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={avatarUrl}
                      alt="Xem trước ảnh đại diện"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-lg object-cover border border-slate-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300';
                      }}
                    />
                    <span className="text-[11px] text-slate-400">Xem trước ảnh đại diện</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Ảnh bìa nền (Cover Banner URL) *</label>
                  <input
                    type="text"
                    required
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs font-mono focus:outline-none focus:border-amber-500"
                  />
                  <div className="mt-2 flex items-center gap-3">
                    <img
                      src={coverUrl}
                      alt="Xem trước ảnh bìa"
                      referrerPolicy="no-referrer"
                      className="w-20 h-12 rounded-lg object-cover border border-slate-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=400';
                      }}
                    />
                    <span className="text-[11px] text-slate-400">Xem trước ảnh bìa</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Câu nói kinh điển / Châm ngôn</label>
                <textarea
                  rows={2}
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  placeholder="Câu danh ngôn, khẩu hiệu đại diện..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Mô tả khái quát / Tóm tắt ngắn</label>
                <textarea
                  rows={3}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="Tóm tắt về vị trí, xuất thân và nét đặc trưng nhất..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Thẻ từ khóa (Tags, phân cách bằng dấu phẩy)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Lịch sử, Anh hùng, Chiến lược gia, Thế kỷ 18"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          )}

          {/* TAB 2: INITIAL MESSAGE ("TIN NHẮN ĐẦU") */}
          {activeTab === 'initial_message' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <h3 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Tin Nhắn Đầu Tiên (Opening Dialogue)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Đây là thông điệp mở đầu quan trọng nhất của nhân vật. Khi ai đó bước vào không gian của nhân vật này, lời chào hoặc câu tuyên thệ này sẽ hiển thị trang trọng ở vị trí danh dự.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Nội dung tin nhắn đầu *
                </label>
                <textarea
                  rows={5}
                  required
                  value={initialMessage}
                  onChange={(e) => setInitialMessage(e.target.value)}
                  placeholder="Nhập lời mở đầu khi đối thoại..."
                  className="w-full px-3.5 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm leading-relaxed focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 uppercase font-semibold">Xem trước hiển thị:</span>
                <p className="mt-1 text-sm text-amber-200 italic font-serif">"{initialMessage || '...'}"</p>
              </div>
            </div>
          )}

          {/* TAB 3: MESSAGE HISTORY ("LỊCH SỬ TIN NHẮN") */}
          {activeTab === 'message_history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Các dòng tin nhắn trong lịch sử đối thoại
                  </h3>
                  <p className="text-xs text-slate-400">
                    Thêm, xóa hoặc chỉnh sửa nội dung các đoạn hội thoại mẫu
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddMessageItem}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm tin nhắn
                </button>
              </div>

              <div className="space-y-3">
                {messages.map((item, idx) => (
                  <div key={item.id || idx} className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-300">#{idx + 1}</span>
                        <select
                          value={item.sender}
                          onChange={(e) => handleUpdateMessage(idx, 'sender', e.target.value)}
                          className="px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-white"
                        >
                          <option value="character">Nhân vật</option>
                          <option value="user">Người dùng</option>
                          <option value="narrator">Dẫn chuyện / Sử ký</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={item.senderName}
                          onChange={(e) => handleUpdateMessage(idx, 'senderName', e.target.value)}
                          placeholder="Tên người nói"
                          className="px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-white w-28"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveMessage(idx)}
                          className="p-1 text-slate-400 hover:text-rose-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <textarea
                      rows={2}
                      value={item.text}
                      onChange={(e) => handleUpdateMessage(idx, 'text', e.target.value)}
                      placeholder="Nội dung tin nhắn..."
                      className="w-full px-2.5 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded text-white focus:outline-none focus:border-amber-500"
                    />

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item.timestamp}
                        onChange={(e) => handleUpdateMessage(idx, 'timestamp', e.target.value)}
                        placeholder="Thời gian / Bối cảnh"
                        className="px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-300 flex-1"
                      />
                      <input
                        type="text"
                        value={item.mood || ''}
                        onChange={(e) => handleUpdateMessage(idx, 'mood', e.target.value)}
                        placeholder="Cảm xúc / Sắc thái"
                        className="px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-300 w-36"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CHARACTER INFO & STATS */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Giới tính</label>
                  <input
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    placeholder="Nam / Nữ / Thần linh..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Tuổi / Niên đại</label>
                  <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="1753 - 1792 / 24 tuổi..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Thời đại / Bối cảnh</label>
                  <input
                    type="text"
                    value={era}
                    onChange={(e) => setEra(e.target.value)}
                    placeholder="Thế kỷ 18, Kỷ nguyên mạng..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Phe phái / Tổ chức</label>
                  <input
                    type="text"
                    value={faction}
                    onChange={(e) => setFaction(e.target.value)}
                    placeholder="Nhà Tây Sơn, Mạng lưới Neo-Eden..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Vai trò / Chức vụ</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Hoàng đế, Thủ lĩnh, Điệp viên..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Diện mạo & Ngoại hình</label>
                  <textarea
                    rows={3}
                    value={appearance}
                    onChange={(e) => setAppearance(e.target.value)}
                    placeholder="Mô tả dáng vẻ, y phục, ánh mắt..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Tính cách & Khí chất</label>
                  <textarea
                    rows={3}
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    placeholder="Mô tả tính cách, phong thái cư xử..."
                    className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Tiểu sử & Cốt truyện chi tiết</label>
                <textarea
                  rows={4}
                  value={backstory}
                  onChange={(e) => setBackstory(e.target.value)}
                  placeholder="Lược sử cuộc đời, hành trạng và những dấu mốc quan trọng..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Kỹ năng / Khả năng nổi bật (Mỗi dòng 1 kỹ năng)</label>
                <textarea
                  rows={3}
                  value={abilitiesInput}
                  onChange={(e) => setAbilitiesInput(e.target.value)}
                  placeholder="Hành quân thần tốc&#10;Tác chiến hiệp đồng binh chủng&#10;Cải cách chữ Nôm"
                  className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs"
                />
              </div>

              {/* Stats sliders */}
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Chỉ số năng lực (Thang điểm 100)</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Lãnh đạo:</span>
                      <span className="font-mono text-amber-400">{statLeadership}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={statLeadership}
                      onChange={(e) => setStatLeadership(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Trí tuệ / Chiến lược:</span>
                      <span className="font-mono text-amber-400">{statIntelligence}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={statIntelligence}
                      onChange={(e) => setStatIntelligence(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Sức mạnh / Thể chất:</span>
                      <span className="font-mono text-amber-400">{statStrength}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={statStrength}
                      onChange={(e) => setStatStrength(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Tốc độ / Linh hoạt:</span>
                      <span className="font-mono text-amber-400">{statAgility}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={statAgility}
                      onChange={(e) => setStatAgility(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Uy tín / Khí chất:</span>
                      <span className="font-mono text-amber-400">{statCharisma}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={statCharisma}
                      onChange={(e) => setStatCharisma(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Ý chí / Kiên định:</span>
                      <span className="font-mono text-amber-400">{statResolve}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={100}
                      value={statResolve}
                      onChange={(e) => setStatResolve(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CHARACTER LINKS ("LINK NHÂN VẬT") */}
          {activeTab === 'links' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Danh sách liên kết tham khảo của nhân vật
                  </h3>
                  <p className="text-xs text-slate-400">
                    Wiki, mạng xã hội, tư liệu, âm nhạc, triển lãm...
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddLinkItem}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Thêm link mới
                </button>
              </div>

              <div className="space-y-3">
                {links.map((link, idx) => (
                  <div key={link.id || idx} className="p-3 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <input
                        type="text"
                        value={link.title}
                        onChange={(e) => handleUpdateLink(idx, 'title', e.target.value)}
                        placeholder="Tiêu đề link (Ví dụ: Wikipedia)"
                        className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-white font-semibold flex-1"
                      />
                      <select
                        value={link.type}
                        onChange={(e) => handleUpdateLink(idx, 'type', e.target.value)}
                        className="px-2 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-white"
                      >
                        <option value="wiki">Wiki</option>
                        <option value="document">Tài liệu</option>
                        <option value="social">Mạng xã hội</option>
                        <option value="gallery">Ảnh</option>
                        <option value="audio">Nhạc</option>
                        <option value="other">Khác</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => handleRemoveLink(idx)}
                        className="p-1 text-slate-400 hover:text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => handleUpdateLink(idx, 'url', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-indigo-300 font-mono"
                    />

                    <input
                      type="text"
                      value={link.description || ''}
                      onChange={(e) => handleUpdateLink(idx, 'description', e.target.value)}
                      placeholder="Mô tả nội dung link (tùy chọn)..."
                      className="w-full px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs font-bold rounded-xl shadow-lg flex items-center gap-2 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{characterToEdit ? 'Lưu cập nhật' : 'Tạo nhân vật mới'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
