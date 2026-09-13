import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';
import { Character, AppView } from './types';
import { INITIAL_CHARACTERS, normalizeCategory } from './data/characters';
import { BREAD_CATEGORIES, getBreadCategory } from './data/breadCategories';
import { BakeryHeader } from './components/BakeryHeader';
import { WelcomeView } from './components/WelcomeView';
import { ScrapbookView } from './components/ScrapbookView';
import { BreadCategoriesView } from './components/BreadCategoriesView';
import { CharacterListView } from './components/CharacterListView';
import { CharacterDetailView } from './components/CharacterDetailView';
import { BakeryCharacterModal } from './components/BakeryCharacterModal';
import { ImageViewerModal } from './components/ImageViewerModal';

// Storage key mới cho dữ liệu người dùng thực tế (không nạp dữ liệu demo cũ)
const USER_STORAGE_KEY = 'xiangxiang_bakery_user_characters_v3';

export default function App() {
  // Characters state with localStorage persistence (bắt đầu hoàn toàn trống)
  const [characters, setCharacters] = useState<Character[]>(() => {
    try {
      const saved = localStorage.getItem(USER_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load characters from localStorage', e);
    }
    return INITIAL_CHARACTERS;
  });

  // Navigation state
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('banh-mi-trung');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('');

  // Modal states
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
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

  // Save to localStorage whenever characters change
  useEffect(() => {
    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(characters));
    } catch (err) {
      console.error('Failed to save characters to localStorage', err);
    }
  }, [characters]);

  // Derived character counts per bread category
  const characterCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'banh-mi-trung': 0,
      'banh-mi-pa-te': 0,
      'banh-mi-thit': 0,
      'banh-mi-ngot': 0,
      'banh-mi-dac-biet': 0,
    };
    characters.forEach((char) => {
      const catKey = normalizeCategory(char.category);
      if (counts[catKey] !== undefined) {
        counts[catKey] += 1;
      } else {
        counts[catKey] = (counts[catKey] || 0) + 1;
      }
    });
    return counts;
  }, [characters]);

  // Filtered characters for the currently selected bread category
  const categoryCharacters = useMemo(() => {
    return characters.filter((c) => {
      const charCat = normalizeCategory(c.category);
      return charCat === selectedCategoryId;
    });
  }, [characters, selectedCategoryId]);

  // Current active category object
  const currentCategory = useMemo(() => {
    return getBreadCategory(selectedCategoryId);
  }, [selectedCategoryId]);

  // Current active character object for detail view
  const currentCharacter = useMemo(() => {
    if (!characters.length) return null;
    return (
      characters.find((c) => c.id === selectedCharacterId) ||
      categoryCharacters[0] ||
      null
    );
  }, [characters, selectedCharacterId, categoryCharacters]);

  // ================= NAVIGATION HANDLERS =================
  const handleEnterShop = () => {
    setCurrentView('scrapbook');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenMenu = () => {
    setCurrentView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId: string) => {
    setSelectedCategoryId(catId);
    setCurrentView('characters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCharacter = (charId: string) => {
    setSelectedCharacterId(charId);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setCurrentView('characters');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ================= MODAL & EDIT HANDLERS =================
  const handleOpenAddModal = () => {
    setCharacterToEdit(null);
    setIsAddEditModalOpen(true);
  };

  const handleOpenEditModal = () => {
    setCharacterToEdit(currentCharacter);
    setIsAddEditModalOpen(true);
  };

  const handleSaveCharacter = (savedChar: Character) => {
    const exists = characters.some((c) => c.id === savedChar.id);
    if (exists) {
      setCharacters(characters.map((c) => (c.id === savedChar.id ? savedChar : c)));
    } else {
      setCharacters([savedChar, ...characters]);
      setSelectedCharacterId(savedChar.id);
      setSelectedCategoryId(normalizeCategory(savedChar.category));
    }
  };

  const handleSendMessage = (text: string) => {
    if (!currentCharacter) return;
    const newMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user' as const,
      senderName: 'Bạn',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...(currentCharacter.messageHistory || []), newMessage];
    const updatedChar = {
      ...currentCharacter,
      messageHistory: updatedMessages,
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

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-stone-800 font-sans selection:bg-pink-300 selection:text-pink-950 flex flex-col antialiased">
      {/* Soft Background Bakery Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl" />
      </div>

      {/* Main Mobile-First Application Container */}
      <div className={`relative z-10 w-full ${currentView === 'welcome' || currentView === 'scrapbook' ? 'max-w-md sm:max-w-lg md:max-w-xl' : 'max-w-lg md:max-w-xl shadow-2xl shadow-pink-200/20 sm:border-x sm:border-pink-100'} mx-auto min-h-screen flex flex-col`}>
        {/* Sticky Bakery Header (shown on categories, characters, and detail views) */}
        {currentView !== 'welcome' && currentView !== 'scrapbook' && (
          <BakeryHeader
            currentView={currentView}
            onNavigateHome={handleBackToWelcome}
          />
        )}

        {/* View Transitions */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            {currentView === 'welcome' && (
              <WelcomeView
                key="welcome"
                onEnterShop={handleEnterShop}
              />
            )}

            {currentView === 'scrapbook' && (
              <ScrapbookView
                key="scrapbook"
                onOpenMenu={handleOpenMenu}
                onBackToWelcome={handleBackToWelcome}
              />
            )}

            {currentView === 'categories' && (
              <BreadCategoriesView
                key="categories"
                categories={BREAD_CATEGORIES}
                characterCounts={characterCounts}
                onSelectCategory={handleSelectCategory}
                onBackToWelcome={handleBackToWelcome}
              />
            )}

            {currentView === 'characters' && (
              <CharacterListView
                key={`characters-${selectedCategoryId}`}
                category={currentCategory}
                characters={categoryCharacters}
                onSelectCharacter={handleSelectCharacter}
                onBackToCategories={handleBackToCategories}
                onOpenAddModal={handleOpenAddModal}
              />
            )}

            {currentView === 'detail' && (
              currentCharacter ? (
                <CharacterDetailView
                  key={`detail-${currentCharacter.id}`}
                  character={currentCharacter}
                  category={currentCategory}
                  onBackToList={handleBackToList}
                  onOpenEditModal={handleOpenEditModal}
                  onViewImage={handleViewImage}
                  onSendMessage={handleSendMessage}
                />
              ) : (
                <div className="p-8 text-center bg-white/90 rounded-3xl m-4 border border-pink-200 shadow-sm">
                  <p className="text-sm text-stone-600 font-medium">Chưa chọn nhân vật hoặc danh mục đang trống.</p>
                  <button
                    onClick={handleBackToList}
                    className="mt-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    Quay lại danh sách
                  </button>
                </div>
              )
            )}
          </AnimatePresence>
        </main>

        {/* Cute Bakery Mobile Footer (shown on inner pages) */}
        {currentView !== 'welcome' && (
          <footer className="mt-auto border-t border-pink-100 bg-white/80 py-4 px-4 text-center text-xs text-stone-400">
            <div className="flex flex-col items-center gap-1">
              <span className="font-semibold text-pink-600 flex items-center gap-1">
                🥖 Tiệm bánh mì của Xiangxiang ♡
              </span>
              <span className="text-[11px] text-stone-500">
                Góc nhỏ lưu giữ những thế giới câu chuyện ngọt ngào
              </span>
            </div>
          </footer>
        )}
      </div>

      {/* Add / Edit Character Modal */}
      <BakeryCharacterModal
        isOpen={isAddEditModalOpen}
        onClose={() => setIsAddEditModalOpen(false)}
        onSave={handleSaveCharacter}
        characterToEdit={characterToEdit}
        defaultCategoryId={selectedCategoryId}
      />

      {/* Fullscreen Image Lightbox Viewer */}
      <ImageViewerModal
        isOpen={imageViewerData.isOpen}
        onClose={() => setImageViewerData({ ...imageViewerData, isOpen: false })}
        imageUrl={imageViewerData.url}
        title={imageViewerData.title}
      />
    </div>
  );
}
