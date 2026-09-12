/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Character, MessageItem, CharacterLink } from './types';
import { INITIAL_CHARACTERS } from './data/initialCharacters';
import { Header } from './components/Header';
import { CharacterSidebar } from './components/CharacterSidebar';
import { CharacterHero } from './components/CharacterHero';
import { InitialMessageSection } from './components/InitialMessageSection';
import { MessageHistorySection } from './components/MessageHistorySection';
import { CharacterInfoSection } from './components/CharacterInfoSection';
import { CharacterLinksSection } from './components/CharacterLinksSection';
import { EditCharacterModal } from './components/EditCharacterModal';
import { ImageViewerModal } from './components/ImageViewerModal';

const STORAGE_KEY = 'character_showcase_space_v1';

export default function App() {
  // Characters state with localStorage persistence
  const [characters, setCharacters] = useState<Character[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_CHARACTERS;
  });

  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(() => {
    return characters[0]?.id || 'quang-trung';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [characterToEdit, setCharacterToEdit] = useState<Character | null>(null);

  // Lightbox Image Viewer
  const [imageViewerData, setImageViewerData] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
    } catch (err) {
      console.error('Failed to save characters to localStorage', err);
    }
  }, [characters]);

  // Active character
  const currentCharacter =
    characters.find((c) => c.id === selectedCharacterId) || characters[0] || INITIAL_CHARACTERS[0];

  // Handlers
  const handleSelectCharacter = (id: string) => {
    setSelectedCharacterId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenNewCharacterModal = () => {
    setCharacterToEdit(null);
    setIsEditModalOpen(true);
  };

  const handleOpenEditCharacterModal = () => {
    setCharacterToEdit(currentCharacter);
    setIsEditModalOpen(true);
  };

  const handleSaveCharacter = (savedChar: Character) => {
    const exists = characters.some((c) => c.id === savedChar.id);
    if (exists) {
      setCharacters(characters.map((c) => (c.id === savedChar.id ? savedChar : c)));
    } else {
      setCharacters([savedChar, ...characters]);
      setSelectedCharacterId(savedChar.id);
    }
  };

  const handleDeleteCharacter = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (characters.length <= 1) {
      alert('Cần giữ lại ít nhất một nhân vật trong không gian.');
      return;
    }
    const target = characters.find((c) => c.id === id);
    if (confirm(`Bạn có chắc chắn muốn xóa nhân vật "${target?.name || ''}" không?`)) {
      const updated = characters.filter((c) => c.id !== id);
      setCharacters(updated);
      if (selectedCharacterId === id) {
        setSelectedCharacterId(updated[0].id);
      }
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Khôi phục danh sách nhân vật mẫu ban đầu? Những thay đổi tùy chỉnh sẽ được đặt lại.')) {
      setCharacters(INITIAL_CHARACTERS);
      setSelectedCharacterId(INITIAL_CHARACTERS[0].id);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleUpdateMessages = (updatedMessages: MessageItem[]) => {
    if (!currentCharacter) return;
    const updatedChar = {
      ...currentCharacter,
      messageHistory: updatedMessages,
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setCharacters(characters.map((c) => (c.id === currentCharacter.id ? updatedChar : c)));
  };

  const handleUpdateLinks = (updatedLinks: CharacterLink[]) => {
    if (!currentCharacter) return;
    const updatedChar = {
      ...currentCharacter,
      links: updatedLinks,
      updatedAt: new Date().toISOString().split('T')[0],
    };
    setCharacters(characters.map((c) => (c.id === currentCharacter.id ? updatedChar : c)));
  };

  const handleViewImage = (url: string, title: string) => {
    setImageViewerData({
      isOpen: true,
      url,
      title,
    });
  };

  // Filter characters by search query
  const displayedCharacters = characters.filter((c) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      c.name.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.tags?.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col">
      {/* Top Navigation Bar */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenNewModal={handleOpenNewCharacterModal}
        onResetDefaults={handleResetDefaults}
        totalCharacters={characters.length}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Sidebar: Character Selector & Filters */}
          <CharacterSidebar
            characters={displayedCharacters}
            selectedCharacterId={selectedCharacterId}
            onSelectCharacter={handleSelectCharacter}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onDeleteCharacter={handleDeleteCharacter}
            onOpenNewModal={handleOpenNewCharacterModal}
          />

          {/* Right Main Showcase Content */}
          <div className="flex-1 min-w-0 w-full space-y-6">
            {currentCharacter ? (
              <>
                {/* 1. Ảnh nhân vật & Hero Identity */}
                <CharacterHero
                  character={currentCharacter}
                  onEdit={handleOpenEditCharacterModal}
                  onViewImage={handleViewImage}
                />

                {/* 2. Tin nhắn đầu (Opening Message) */}
                <InitialMessageSection
                  character={currentCharacter}
                />

                {/* 3. Lịch sử tin nhắn (Message History & Simulated Chat) */}
                <MessageHistorySection
                  character={currentCharacter}
                  onUpdateMessages={handleUpdateMessages}
                />

                {/* 4. Thông tin nhân vật (Comprehensive Bio, Traits, Backstory, Stats) */}
                <CharacterInfoSection
                  character={currentCharacter}
                />

                {/* 5. Link nhân vật (Related References, Wiki, Social, Media) */}
                <CharacterLinksSection
                  character={currentCharacter}
                  onUpdateLinks={handleUpdateLinks}
                />
              </>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center text-slate-400">
                <p className="text-base font-semibold text-slate-200">Không tìm thấy nhân vật phù hợp</p>
                <button
                  onClick={handleOpenNewCharacterModal}
                  className="mt-4 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
                >
                  Tạo nhân vật mới ngay
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Không Gian Giới Thiệu Nhân Vật • Character Lore & Profile Space</span>
          <span>Bảo toàn dữ liệu cục bộ (Local Storage) • Hình ảnh & Hồ sơ đa chiều</span>
        </div>
      </footer>

      {/* Edit & Create Modal */}
      <EditCharacterModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveCharacter}
        characterToEdit={characterToEdit}
      />

      {/* Fullscreen Image Lightbox */}
      <ImageViewerModal
        isOpen={imageViewerData.isOpen}
        onClose={() => setImageViewerData({ ...imageViewerData, isOpen: false })}
        imageUrl={imageViewerData.url}
        title={imageViewerData.title}
      />
    </div>
  );
}
