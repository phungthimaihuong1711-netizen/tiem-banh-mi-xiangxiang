import React from 'react';

export interface ScrapbookThemeConfig {
  gradientBg: string; // e.g. "from-[#FFF2F6] via-[#FFF9F2] to-[#FFEBF2]"
  dotColor: string; // e.g. "#d64d78"
  accentGlow1: string; // Tailwind class
  accentGlow2: string; // Tailwind class
  accentGlow3: string; // Tailwind class
  stampNoteLeft: string;
  stampNoteRight: string;
  themeStickers: Array<{
    symbol: string;
    size: string;
    opacity: number;
    color?: string;
  }>;
}

// Cấu hình sắc thái nền riêng biệt cho từng loại bánh / thế giới nhân vật
export const CATEGORY_SCRAPBOOK_THEMES: Record<string, ScrapbookThemeConfig> = {
  // 1. Bánh quy (Hiện đại): Kem + nâu nhạt + hồng + hoa nhỏ + bánh quy
  'banh-mi-trung': {
    gradientBg: 'from-[#FFF7EE] via-[#FFF3EB] to-[#FFEFE6]',
    dotColor: '#D97706',
    accentGlow1: 'bg-amber-200/35',
    accentGlow2: 'bg-orange-200/30',
    accentGlow3: 'bg-rose-200/25',
    stampNoteLeft: '№ 1994 • COOKIE 🍪',
    stampNoteRight: 'MODERN TALE ♡',
    themeStickers: [
      { symbol: '🍪', size: '17px', opacity: 0.75 },
      { symbol: '🌸', size: '15px', opacity: 0.7 },
      { symbol: '🎀', size: '18px', opacity: 0.75 },
      { symbol: '♡', size: '14px', opacity: 0.65 },
      { symbol: '🌷', size: '14px', opacity: 0.65 },
      { symbol: '✦', size: '12px', opacity: 0.55 },
      { symbol: '⭐', size: '13px', opacity: 0.6 },
      { symbol: '🍓', size: '15px', opacity: 0.7 },
    ],
  },

  // 2. Bánh mì nướng (Âu cổ): Vàng kem + cam đào + nâu caramel + cổ điển
  'banh-mi-pa-te': {
    gradientBg: 'from-[#FFF8F0] via-[#FFF3E8] to-[#FFEAD8]',
    dotColor: '#C2410C',
    accentGlow1: 'bg-amber-300/30',
    accentGlow2: 'bg-orange-200/35',
    accentGlow3: 'bg-yellow-200/25',
    stampNoteLeft: '№ 1827 • VINTAGE 🥖',
    stampNoteRight: 'ANCIENT MYTH ❦',
    themeStickers: [
      { symbol: '🥖', size: '17px', opacity: 0.75 },
      { symbol: '🥐', size: '16px', opacity: 0.7 },
      { symbol: '🌿', size: '15px', opacity: 0.65 },
      { symbol: '✨', size: '13px', opacity: 0.6 },
      { symbol: '🤍', size: '13px', opacity: 0.6 },
      { symbol: '🎀', size: '17px', opacity: 0.7 },
      { symbol: '✧', size: '12px', opacity: 0.55 },
      { symbol: '·', size: '16px', opacity: 0.4 },
    ],
  },

  // 3. Bánh hoa quế (Cổ trang): Hồng + tím lavender + hoa đào + cánh hoa
  'banh-mi-thit': {
    gradientBg: 'from-[#FFF0F7] via-[#FDF2FA] to-[#F5E6F5]',
    dotColor: '#BE185D',
    accentGlow1: 'bg-pink-300/30',
    accentGlow2: 'bg-purple-200/35',
    accentGlow3: 'bg-rose-200/30',
    stampNoteLeft: '№ 0712 • OSMANTHUS 🌸',
    stampNoteRight: 'WUXIA MEMORY ✦',
    themeStickers: [
      { symbol: '🌸', size: '16px', opacity: 0.8 },
      { symbol: '🌷', size: '15px', opacity: 0.7 },
      { symbol: '🦋', size: '16px', opacity: 0.75 },
      { symbol: '🌿', size: '14px', opacity: 0.6 },
      { symbol: '🎀', size: '18px', opacity: 0.7 },
      { symbol: '♡', size: '14px', opacity: 0.65 },
      { symbol: '✨', size: '13px', opacity: 0.6 },
      { symbol: '✦', size: '12px', opacity: 0.55 },
    ],
  },

  // 4. Bánh kem (NP): Hồng pastel + trắng + vàng kem + cupcake + sparkle
  'banh-mi-ngot': {
    gradientBg: 'from-[#FFF0F6] via-[#FFF7FA] to-[#FFEAF2]',
    dotColor: '#DB2777',
    accentGlow1: 'bg-pink-200/40',
    accentGlow2: 'bg-rose-200/35',
    accentGlow3: 'bg-amber-100/40',
    stampNoteLeft: '№ 5521 • SWEET CAKE 🍰',
    stampNoteRight: 'SWEETHEART ♡',
    themeStickers: [
      { symbol: '🍰', size: '17px', opacity: 0.75 },
      { symbol: '🧁', size: '16px', opacity: 0.75 },
      { symbol: '🍓', size: '15px', opacity: 0.75 },
      { symbol: '🍒', size: '15px', opacity: 0.75 },
      { symbol: '🎀', size: '18px', opacity: 0.8 },
      { symbol: '♡', size: '14px', opacity: 0.7 },
      { symbol: '✨', size: '13px', opacity: 0.65 },
      { symbol: '✦', size: '12px', opacity: 0.6 },
    ],
  },

  // 5. Bánh mì cầu vồng (Open World): Pastel nhiều màu + cầu vồng + sao + sparkle + mây
  'banh-mi-dac-biet': {
    gradientBg: 'from-[#F3F4FE] via-[#FFF0F9] to-[#F1F9FD]',
    dotColor: '#7C3AED',
    accentGlow1: 'bg-purple-200/35',
    accentGlow2: 'bg-sky-200/35',
    accentGlow3: 'bg-pink-200/35',
    stampNoteLeft: '№ 9999 • RAINBOW 🌈',
    stampNoteRight: 'OPEN WORLD ⭐',
    themeStickers: [
      { symbol: '🌈', size: '17px', opacity: 0.75 },
      { symbol: '⭐', size: '14px', opacity: 0.75 },
      { symbol: '☁️', size: '16px', opacity: 0.7 },
      { symbol: '✨', size: '13px', opacity: 0.7 },
      { symbol: '🦋', size: '15px', opacity: 0.7 },
      { symbol: '🎀', size: '18px', opacity: 0.75 },
      { symbol: '✧', size: '12px', opacity: 0.6 },
      { symbol: '🤍', size: '13px', opacity: 0.65 },
    ],
  },
};

interface ScrapbookFallingItem {
  id: string;
  symbol: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
  rotStart: string;
  rotEnd: string;
  color?: string;
}

// Tạo danh sách các sticker rơi cực chậm (22s - 38s) phủ khắp không gian trang
export function generateScrapbookStickers(categoryId: string): ScrapbookFallingItem[] {
  const theme = CATEGORY_SCRAPBOOK_THEMES[categoryId] || CATEGORY_SCRAPBOOK_THEMES['banh-mi-trung'];
  const ts = theme.themeStickers;

  return [
    // Biên trái ngoài cùng (1% - 15%)
    { id: 'sb-1', symbol: ts[0].symbol, left: '2%', size: ts[0].size, duration: '24s', delay: '-3s', opacity: ts[0].opacity, rotStart: '-8deg', rotEnd: '10deg' },
    { id: 'sb-2', symbol: '🎀', left: '6%', size: '18px', duration: '28s', delay: '-14s', opacity: 0.75, rotStart: '5deg', rotEnd: '-6deg' },
    { id: 'sb-3', symbol: ts[1].symbol, left: '11%', size: ts[1].size, duration: '22s', delay: '-8s', opacity: ts[1].opacity, rotStart: '-5deg', rotEnd: '8deg' },
    { id: 'sb-4', symbol: '♡', left: '3%', size: '14px', duration: '26s', delay: '-19s', opacity: 0.65, rotStart: '0deg', rotEnd: '15deg' },
    { id: 'sb-5', symbol: '🌸', left: '9%', size: '15px', duration: '25s', delay: '-6s', opacity: 0.7, rotStart: '8deg', rotEnd: '-8deg' },
    { id: 'sb-6', symbol: '✦', left: '13%', size: '12px', duration: '30s', delay: '-22s', opacity: 0.55, rotStart: '0deg', rotEnd: '20deg' },
    { id: 'sb-7', symbol: '⭐', left: '4%', size: '13px', duration: '33s', delay: '-11s', opacity: 0.6, rotStart: '-6deg', rotEnd: '14deg' },
    { id: 'sb-8', symbol: '🌷', left: '14%', size: '15px', duration: '27s', delay: '-17s', opacity: 0.65, rotStart: '6deg', rotEnd: '-6deg' },

    // Cột trái trung gian (16% - 32%)
    { id: 'sb-9', symbol: ts[2].symbol, left: '17%', size: ts[2].size, duration: '27s', delay: '-11s', opacity: ts[2].opacity, rotStart: '-6deg', rotEnd: '8deg' },
    { id: 'sb-10', symbol: '🍓', left: '21%', size: '15px', duration: '23s', delay: '-2s', opacity: 0.7, rotStart: '5deg', rotEnd: '-5deg' },
    { id: 'sb-11', symbol: '✨', left: '26%', size: '13px', duration: '29s', delay: '-16s', opacity: 0.6, rotStart: '0deg', rotEnd: '15deg' },
    { id: 'sb-12', symbol: ts[3].symbol, left: '30%', size: ts[3].size, duration: '25s', delay: '-9s', opacity: ts[3].opacity, rotStart: '6deg', rotEnd: '-6deg' },
    { id: 'sb-13', symbol: '🤍', left: '19%', size: '13px', duration: '32s', delay: '-25s', opacity: 0.55, rotStart: '-4deg', rotEnd: '4deg' },
    { id: 'sb-14', symbol: '🌿', left: '24%', size: '14px', duration: '31s', delay: '-7s', opacity: 0.55, rotStart: '-8deg', rotEnd: '8deg' },

    // Khu vực trung tâm mờ phía sau card (33% - 66%)
    { id: 'sb-15', symbol: ts[4].symbol, left: '35%', size: ts[4].size, duration: '26s', delay: '-5s', opacity: 0.45, rotStart: '-5deg', rotEnd: '5deg' },
    { id: 'sb-16', symbol: '✧', left: '41%', size: '11px', duration: '31s', delay: '-18s', opacity: 0.4, rotStart: '0deg', rotEnd: '-15deg' },
    { id: 'sb-17', symbol: ts[0].symbol, left: '47%', size: ts[0].size, duration: '28s', delay: '-12s', opacity: 0.45, rotStart: '6deg', rotEnd: '-6deg' },
    { id: 'sb-18', symbol: '🌈', left: '54%', size: '15px', duration: '30s', delay: '-21s', opacity: 0.45, rotStart: '-4deg', rotEnd: '4deg' },
    { id: 'sb-19', symbol: '⭐', left: '59%', size: '12px', duration: '27s', delay: '-7s', opacity: 0.45, rotStart: '0deg', rotEnd: '15deg' },
    { id: 'sb-20', symbol: '♡', left: '64%', size: '13px', duration: '33s', delay: '-14s', opacity: 0.4, rotStart: '5deg', rotEnd: '-5deg' },
    { id: 'sb-21', symbol: '🌸', left: '38%', size: '14px', duration: '29s', delay: '-24s', opacity: 0.45, rotStart: '-6deg', rotEnd: '6deg' },

    // Cột phải trung gian (67% - 83%)
    { id: 'sb-22', symbol: ts[5].symbol, left: '68%', size: ts[5].size, duration: '24s', delay: '-15s', opacity: ts[5].opacity, rotStart: '6deg', rotEnd: '-6deg' },
    { id: 'sb-23', symbol: '🌸', left: '72%', size: '15px', duration: '26s', delay: '-4s', opacity: 0.7, rotStart: '-8deg', rotEnd: '6deg' },
    { id: 'sb-24', symbol: '🎀', left: '77%', size: '18px', duration: '23s', delay: '-17s', opacity: 0.75, rotStart: '8deg', rotEnd: '-8deg' },
    { id: 'sb-25', symbol: '🌿', left: '81%', size: '14px', duration: '29s', delay: '-10s', opacity: 0.6, rotStart: '-5deg', rotEnd: '5deg' },
    { id: 'sb-26', symbol: ts[6].symbol, left: '74%', size: ts[6].size, duration: '32s', delay: '-28s', opacity: ts[6].opacity, rotStart: '6deg', rotEnd: '-6deg' },

    // Cột phải ngoài biên (84% - 98%)
    { id: 'sb-27', symbol: '🍓', left: '85%', size: '16px', duration: '25s', delay: '-1s', opacity: 0.75, rotStart: '5deg', rotEnd: '-5deg' },
    { id: 'sb-28', symbol: ts[7].symbol, left: '91%', size: ts[7].size, duration: '27s', delay: '-20s', opacity: ts[7].opacity, rotStart: '-6deg', rotEnd: '6deg' },
    { id: 'sb-29', symbol: '♡', left: '96%', size: '14px', duration: '22s', delay: '-13s', opacity: 0.65, rotStart: '4deg', rotEnd: '-4deg' },
    { id: 'sb-30', symbol: '✨', left: '88%', size: '13px', duration: '31s', delay: '-27s', opacity: 0.6, rotStart: '0deg', rotEnd: '20deg' },
    { id: 'sb-31', symbol: '🌷', left: '93%', size: '14px', duration: '24s', delay: '-6s', opacity: 0.65, rotStart: '-5deg', rotEnd: '5deg' },
    { id: 'sb-32', symbol: '⭐', left: '86%', size: '12px', duration: '35s', delay: '-15s', opacity: 0.55, rotStart: '0deg', rotEnd: '18deg' },

    // Lớp chi tiết li ti, cánh hoa rơi, hạt sáng
    { id: 'sb-33', symbol: '✦', left: '5%', size: '10px', duration: '34s', delay: '-16s', opacity: 0.5, rotStart: '0deg', rotEnd: '30deg' },
    { id: 'sb-34', symbol: '·', left: '15%', size: '16px', duration: '35s', delay: '-8s', opacity: 0.4, rotStart: '0deg', rotEnd: '0deg' },
    { id: 'sb-35', symbol: '🍒', left: '25%', size: '14px', duration: '23s', delay: '-24s', opacity: 0.65, rotStart: '-5deg', rotEnd: '5deg' },
    { id: 'sb-36', symbol: '·', left: '39%', size: '14px', duration: '36s', delay: '-30s', opacity: 0.35, rotStart: '0deg', rotEnd: '0deg' },
    { id: 'sb-37', symbol: '🥐', left: '52%', size: '15px', duration: '26s', delay: '-3s', opacity: 0.45, rotStart: '6deg', rotEnd: '-6deg' },
    { id: 'sb-38', symbol: '·', left: '70%', size: '15px', duration: '33s', delay: '-14s', opacity: 0.4, rotStart: '0deg', rotEnd: '0deg' },
    { id: 'sb-39', symbol: '♡', left: '80%', size: '13px', duration: '25s', delay: '-22s', opacity: 0.6, rotStart: '6deg', rotEnd: '-6deg' },
    { id: 'sb-40', symbol: '✧', left: '95%', size: '11px', duration: '32s', delay: '-11s', opacity: 0.5, rotStart: '0deg', rotEnd: '-20deg' },
    { id: 'sb-41', symbol: '🌸', left: '32%', size: '13px', duration: '27s', delay: '-18s', opacity: 0.45, rotStart: '5deg', rotEnd: '-5deg' },
    { id: 'sb-42', symbol: '🎀', left: '62%', size: '15px', duration: '28s', delay: '-9s', opacity: 0.45, rotStart: '-7deg', rotEnd: '7deg' },
  ];
}

interface ScrapbookPageBackgroundProps {
  categoryId: string;
  children: React.ReactNode;
}

export const ScrapbookPageBackground: React.FC<ScrapbookPageBackgroundProps> = ({
  categoryId,
  children,
}) => {
  const theme = CATEGORY_SCRAPBOOK_THEMES[categoryId] || CATEGORY_SCRAPBOOK_THEMES['banh-mi-trung'];
  const stickers = React.useMemo(() => generateScrapbookStickers(categoryId), [categoryId]);

  return (
    <div className={`relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-b ${theme.gradientBg} pb-12 transition-colors duration-500`}>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. NỀN GIẤY THỦ CÔNG & REN CỔ ĐIỂN CỐ ĐỊNH (KHÔNG RUNG LẮC)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Chấm bi scrapbook dập chìm nhẹ */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: `radial-gradient(${theme.dotColor} 1.2px, transparent 1.2px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Viền ren bánh kem dập nổi ở mép trên cùng */}
        <div className="absolute top-0 left-0 right-0 h-4 flex items-center justify-between overflow-hidden opacity-50">
          <div
            className="w-full h-3 border-b-2 border-dashed border-pink-300"
            style={{ strokeDasharray: '6 6' }}
          />
        </div>

        {/* Các mảng gradient màu pastel tạo chiều sâu êm dịu */}
        <div className={`absolute -top-10 -left-10 w-48 h-48 rounded-full ${theme.accentGlow1} blur-2xl`} />
        <div className={`absolute top-1/4 -right-12 w-56 h-56 rounded-full ${theme.accentGlow2} blur-3xl`} />
        <div className={`absolute top-2/3 -left-12 w-52 h-52 rounded-full ${theme.accentGlow3} blur-3xl`} />
        <div className={`absolute -bottom-10 right-1/4 w-48 h-48 rounded-full ${theme.accentGlow1} blur-2xl`} />

        {/* Tem giấy vintage phong cách scrapbook ở các góc */}
        <div className="absolute top-8 left-2 text-stone-400/40 text-[10px] font-mono select-none">
          {theme.stampNoteLeft}
        </div>
        <div className="absolute top-12 right-3 text-stone-400/40 text-[10px] font-mono select-none">
          {theme.stampNoteRight}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. CÁC STICKER RƠI CHẬM TỪ TRÊN XUỐNG (CSS Animation nhẹ nhàng)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {stickers.map((st) => (
          <span
            key={st.id}
            className="falling-bakery-sticker leading-none select-none text-[#d64d78]"
            style={
              {
                left: st.left,
                fontSize: st.size,
                animationDuration: st.duration,
                animationDelay: st.delay,
                '--sticker-opacity': st.opacity,
                '--rot-start': st.rotStart,
                '--rot-end': st.rotEnd,
              } as React.CSSProperties
            }
          >
            {st.symbol}
          </span>
        ))}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. NỘI DUNG CHÍNH (Đứng yên vững chãi, độc lập, không rung lắc)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
