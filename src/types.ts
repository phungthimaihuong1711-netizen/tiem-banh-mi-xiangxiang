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

export interface Character {
  id: string;
  name: string;
  title: string;
  category: 'Lịch sử' | 'Thần thoại' | 'Khoa học viễn tưởng' | 'Kỳ ảo / Cổ trang' | 'Đương đại' | string;
  avatarUrl: string;
  coverUrl: string;
  status: 'active' | 'legendary' | 'mystic' | 'archived';
  quote: string;
  bio: string;
  initialMessage: string;
  messageHistory: MessageItem[];
  info: CharacterInfo;
  links: CharacterLink[];
  tags: string[];
  updatedAt: string;
}
