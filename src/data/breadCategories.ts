import { BreadCategory } from '../types';

export const BREAD_CATEGORIES: BreadCategory[] = [
  {
    id: 'banh-mi-trung',
    name: 'Bánh quy',
    genre: 'Hiện đại',
    description: 'Thể loại: Hiện đại • Giòn tan, đời thường & ấm áp',
    image: '/assets/banh_quy.jpg',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-800',
    themeColor: 'from-amber-100 to-orange-50',
    accentColor: '#F59E0B',
    emoji: '🍪'
  },
  {
    id: 'banh-mi-pa-te',
    name: 'Bánh mì nướng',
    genre: 'Âu cổ',
    description: 'Thể loại: Âu cổ • Thần thoại & Huyền bí',
    image: '/assets/banh_mi_nuong.jpg',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    themeColor: 'from-rose-100 to-amber-50',
    accentColor: '#E11D48',
    emoji: '🥖'
  },
  {
    id: 'banh-mi-thit',
    name: 'Bánh hoa quế',
    genre: 'Cổ trang',
    description: 'Thể loại: Cổ trang • Kiếm hiệp & Sử thi hào hùng',
    image: '/assets/banh_hoa_que.jpg',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-orange-900',
    themeColor: 'from-orange-100 to-rose-50',
    accentColor: '#EA580C',
    emoji: '🌸'
  },
  {
    id: 'banh-mi-ngot',
    name: 'Bánh kem',
    genre: 'NP',
    description: 'Thể loại: NP • Ngọt ngào & Vạn người mê',
    image: '/assets/banh_kem.jpg',
    badgeBg: 'bg-pink-100',
    badgeText: 'text-pink-800',
    themeColor: 'from-pink-100 to-purple-50',
    accentColor: '#EC4899',
    emoji: '🍰'
  },
  {
    id: 'banh-mi-dac-biet',
    name: 'Bánh mì cầu vồng',
    genre: 'Open World',
    description: 'Thể loại: Open World • Phiêu lưu viễn tưởng',
    image: '/assets/banh_mi_cau_vong.jpg',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    themeColor: 'from-purple-100 to-pink-50',
    accentColor: '#9333EA',
    emoji: '🌈'
  }
];

export function getBreadCategory(id: string): BreadCategory {
  return (
    BREAD_CATEGORIES.find((cat) => cat.id === id) ||
    BREAD_CATEGORIES.find((cat) => cat.name.toLowerCase() === id.toLowerCase()) ||
    BREAD_CATEGORIES[0]
  );
}
