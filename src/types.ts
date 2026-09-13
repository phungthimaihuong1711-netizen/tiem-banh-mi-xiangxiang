export type BreadCategoryId =
  | 'banh-mi-trung'
  | 'banh-mi-pa-te'
  | 'banh-mi-thit'
  | 'banh-mi-ngot'
  | 'banh-mi-dac-biet';

export interface BreadCategory {
  id: BreadCategoryId;
  name: string;
  genre: string; // Thể loại char: Hiện đại, Âu cổ, Cổ trang, NP, Open World
  description: string;
  image: string;
  badgeBg: string;
  badgeText: string;
  themeColor: string;
  accentColor: string;
  emoji: string;
}

export interface MessageItem {
  id: string;
  sender: 'character' | 'user' | 'narrator';
  senderName: string;
  text: string;
  timestamp: string;
  mood?: string;
}

export interface CharacterLink {
  id: string;
  title: string;
  url: string;
  type: 'wiki' | 'social' | 'gallery' | 'document' | 'audio' | 'other';
  description?: string;
}

export interface CharacterInfo {
  gender?: string;
  age?: string;
  era?: string;
  faction?: string;
  role?: string;
  appearance?: string;
  personality?: string;
  backstory?: string;
  abilities?: string[];
  stats?: {
    strength?: number;
    intelligence?: number;
    agility?: number;
    leadership?: number;
    charisma?: number;
    resolve?: number;
  };
}

/**
 * Cấu trúc dữ liệu nhân vật chuẩn theo yêu cầu:
 * {
 *   id: "",
 *   name: "",
 *   category: "",
 *   avatar: "",
 *   shortDescription: "",
 *   introduction: "",
 *   plot: "",
 *   chatLink: ""
 * }
 */
export interface Character {
  id: string;
  name: string;
  category: BreadCategoryId | string; // Liên kết với 1 trong 5 loại bánh mì
  avatar: string;
  shortDescription: string;
  introduction: string;
  plot: string;
  chatLink: string;

  // Thuộc tính bổ sung để lưu trữ đầy đủ thông tin chuyên sâu (nếu có)
  avatarUrl?: string;
  bio?: string;
  initialMessage?: string;
  title?: string;
  status?: 'active' | 'legendary' | 'mystic' | 'archived';
  quote?: string;
  coverUrl?: string;
  info?: CharacterInfo;
  messageHistory?: MessageItem[];
  links?: CharacterLink[];
  tags?: string[];
  updatedAt?: string;
}

export type AppView = 'welcome' | 'scrapbook' | 'categories' | 'characters' | 'detail';

