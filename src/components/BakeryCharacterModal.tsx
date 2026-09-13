import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Image as ImageIcon, Link as LinkIcon } from 'lucide-react';
import { Character } from '../types';
import { BREAD_CATEGORIES } from '../data/breadCategories';
import { normalizeCategory } from '../data/characters';

interface BakeryCharacterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (character: Character) => void;
  characterToEdit?: Character | null;
  defaultCategoryId?: string;
}

export const BakeryCharacterModal: React.FC<BakeryCharacterModalProps> = ({
  isOpen,
  onClose,
  onSave,
  characterToEdit,
  defaultCategoryId = 'banh-mi-trung',
}) => {
  const [formData, setFormData] = useState<{
    id: string;
    name: string;
    category: string;
    avatar: string;
    shortDescription: string;
    introduction: string;
    plot: string;
    chatLink: string;
  }>({
    id: '',
    name: '',
    category: defaultCategoryId,
    avatar: '',
    shortDescription: '',
    introduction: '',
    plot: '',
    chatLink: '',
  });

  useEffect(() => {
    if (characterToEdit) {
      setFormData({
        id: characterToEdit.id,
        name: characterToEdit.name || '',
        category: normalizeCategory(characterToEdit.category),
        avatar: characterToEdit.avatar || '',
        shortDescription: characterToEdit.shortDescription || '',
        introduction: characterToEdit.introduction || '',
        plot: characterToEdit.plot || '',
        chatLink: characterToEdit.chatLink || '',
      });
    } else {
      setFormData({
        id: `char-${Date.now()}`,
        name: '',
        category: normalizeCategory(defaultCategoryId),
        avatar: '',
        shortDescription: '',
        introduction: '',
        plot: '',
        chatLink: '',
      });
    }
  }, [characterToEdit, defaultCategoryId, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Vui lòng nhập tên nhân vật!');
      return;
    }

    const newChar: Character = {
      ...(characterToEdit || {}),
      id: formData.id || `char-${Date.now()}`,
      name: formData.name.trim(),
      category: formData.category,
      avatar: formData.avatar.trim(),
      shortDescription: formData.shortDescription.trim(),
      introduction: formData.introduction.trim(),
      plot: formData.plot.trim(),
      chatLink: formData.chatLink.trim(),
      updatedAt: new Date().toISOString().split('T')[0],
    };

    onSave(newChar);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-pink-100 relative my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-pink-50 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="mb-5 text-left">
            <span className="text-xs font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100 inline-flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {characterToEdit ? 'Chỉnh Sửa Nhân Vật' : 'Thêm Nhân Vật Mới'}
            </span>
            <h3
              className="text-lg font-black text-stone-800 mt-1"
              style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
            >
              {characterToEdit ? characterToEdit.name : 'Nhân vật mới của tiệm bánh'}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 text-left text-xs">
            {/* Category Select */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Loại Bánh (Danh mục) *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-pink-50/50 border border-pink-200 text-stone-800 font-semibold focus:outline-none focus:border-pink-400"
              >
                {BREAD_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.emoji} {cat.name} ({cat.genre})
                  </option>
                ))}
              </select>
            </div>

            {/* Character Name */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Tên Nhân Vật *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nhập tên nhân vật..."
                className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 font-medium"
              />
            </div>

            {/* Avatar URL */}
            <div>
              <label className="block font-bold text-stone-700 mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5 text-pink-500" />
                  Link Ảnh Avatar
                </span>
                <span className="text-[10px] text-stone-400 font-normal">URL ảnh trực tiếp</span>
              </label>
              <input
                type="url"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                placeholder="https://..."
                className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Mô Tả Ngắn
              </label>
              <textarea
                rows={2}
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Mô tả ngắn gọn về nhân vật..."
                className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 resize-none"
              />
            </div>

            {/* Introduction */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Lời Giới Thiệu (Lời chào mở đầu)
              </label>
              <textarea
                rows={2}
                value={formData.introduction}
                onChange={(e) => setFormData({ ...formData, introduction: e.target.value })}
                placeholder="Lời thoại đầu tiên của nhân vật khi chào đón bạn..."
                className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 resize-none"
              />
            </div>

            {/* Plot / Story */}
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Cốt Truyện / Bối Cảnh
              </label>
              <textarea
                rows={3}
                value={formData.plot}
                onChange={(e) => setFormData({ ...formData, plot: e.target.value })}
                placeholder="Cốt truyện chi tiết, xuất thân, bối cảnh thế giới..."
                className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 resize-none"
              />
            </div>

            {/* Chat Link */}
            <div>
              <label className="block font-bold text-stone-700 mb-1 flex items-center gap-1">
                <LinkIcon className="w-3.5 h-3.5 text-pink-500" />
                Link Trò Chuyện (Character.ai / c.ai / bot link)
              </label>
              <input
                type="url"
                value={formData.chatLink}
                onChange={(e) => setFormData({ ...formData, chatLink: e.target.value })}
                placeholder="https://c.ai/c/..."
                className="w-full px-3.5 py-2 rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 font-mono text-[11px]"
              />
            </div>

            {/* Submit Buttons */}
            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-stone-500 hover:bg-stone-100 font-semibold cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold shadow-xs hover:from-pink-600 hover:to-rose-500 cursor-pointer"
              >
                Lưu Nhân Vật
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
