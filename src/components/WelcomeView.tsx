import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface WelcomeViewProps {
  onEnterShop: () => void;
}

interface FloatingSticker {
  id: number;
  symbol: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  opacity: number;
  rotStart: string;
  rotEnd: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CÁC HỌA TIẾT BAKERY KAWAII PHÂN BỐ ĐỀU KHẮP TOÀN BỘ MÀN HÌNH
// Nơ, trái tim, hoa, sao lấp lánh, vụn bánh mì, dâu tây, cupcake, cherry
// Trôi chậm và đều từ trên xuống dưới (18s - 32s), không bay ngang, không rung lắc
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const KAWAII_FALLING_ITEMS: FloatingSticker[] = [
  // Cột bên trái (0% - 30%)
  { id: 1, symbol: '🎀', left: '3%', size: '18px', duration: '22s', delay: '-2s', opacity: 0.7, rotStart: '-6deg', rotEnd: '8deg' },
  { id: 2, symbol: '🍓', left: '8%', size: '15px', duration: '25s', delay: '-14s', opacity: 0.65, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 3, symbol: '🌸', left: '13%', size: '14px', duration: '20s', delay: '-7s', opacity: 0.6, rotStart: '0deg', rotEnd: '10deg' },
  { id: 4, symbol: '♡', left: '18%', size: '13px', duration: '26s', delay: '-19s', opacity: 0.55, rotStart: '-5deg', rotEnd: '5deg' },
  { id: 5, symbol: '🥐', left: '23%', size: '16px', duration: '24s', delay: '-9s', opacity: 0.65, rotStart: '6deg', rotEnd: '-6deg' },
  { id: 6, symbol: '✨', left: '28%', size: '12px', duration: '28s', delay: '-4s', opacity: 0.6, rotStart: '0deg', rotEnd: '15deg' },

  // Cột trung tâm - trái (32% - 46%)
  { id: 7, symbol: '🤍', left: '33%', size: '13px', duration: '23s', delay: '-16s', opacity: 0.5, rotStart: '-4deg', rotEnd: '6deg' },
  { id: 8, symbol: '🧁', left: '38%', size: '16px', duration: '27s', delay: '-11s', opacity: 0.55, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 9, symbol: '✦', left: '44%', size: '11px', duration: '30s', delay: '-3s', opacity: 0.45, rotStart: '0deg', rotEnd: '20deg' },

  // Cột trung tâm - phải (54% - 68%)
  { id: 10, symbol: '✧', left: '55%', size: '11px', duration: '29s', delay: '-21s', opacity: 0.45, rotStart: '0deg', rotEnd: '-20deg' },
  { id: 11, symbol: '🍞', left: '60%', size: '15px', duration: '25s', delay: '-8s', opacity: 0.55, rotStart: '-6deg', rotEnd: '6deg' },
  { id: 12, symbol: '🍒', left: '66%', size: '15px', duration: '22s', delay: '-17s', opacity: 0.65, rotStart: '6deg', rotEnd: '-6deg' },

  // Cột bên phải (70% - 97%)
  { id: 13, symbol: '🎀', left: '72%', size: '18px', duration: '21s', delay: '-5s', opacity: 0.7, rotStart: '-5deg', rotEnd: '7deg' },
  { id: 14, symbol: '🌸', left: '77%', size: '14px', duration: '24s', delay: '-13s', opacity: 0.6, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 15, symbol: '🥖', left: '82%', size: '17px', duration: '26s', delay: '-1s', opacity: 0.6, rotStart: '8deg', rotEnd: '-4deg' },
  { id: 16, symbol: '🍓', left: '87%', size: '15px', duration: '23s', delay: '-18s', opacity: 0.65, rotStart: '-6deg', rotEnd: '6deg' },
  { id: 17, symbol: '✨', left: '92%', size: '13px', duration: '27s', delay: '-10s', opacity: 0.6, rotStart: '0deg', rotEnd: '15deg' },
  { id: 18, symbol: '♡', left: '96%', size: '14px', duration: '22s', delay: '-15s', opacity: 0.55, rotStart: '4deg', rotEnd: '-6deg' },

  // Lớp thứ 2 bổ sung để phân bố đều và tự nhiên, không bị trống
  { id: 19, symbol: '·', left: '6%', size: '14px', duration: '31s', delay: '-8s', opacity: 0.35, rotStart: '0deg', rotEnd: '0deg' },
  { id: 20, symbol: '🍰', left: '16%', size: '15px', duration: '26s', delay: '-22s', opacity: 0.6, rotStart: '-5deg', rotEnd: '6deg' },
  { id: 21, symbol: '🌷', left: '26%', size: '14px', duration: '24s', delay: '-12s', opacity: 0.55, rotStart: '6deg', rotEnd: '-5deg' },
  { id: 22, symbol: '·', left: '35%', size: '13px', duration: '32s', delay: '-5s', opacity: 0.35, rotStart: '0deg', rotEnd: '0deg' },
  { id: 23, symbol: '🌿', left: '63%', size: '13px', duration: '27s', delay: '-24s', opacity: 0.5, rotStart: '-8deg', rotEnd: '8deg' },
  { id: 24, symbol: '♡', left: '74%', size: '13px', duration: '25s', delay: '-15s', opacity: 0.55, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 25, symbol: '🥐', left: '84%', size: '16px', duration: '23s', delay: '-6s', opacity: 0.6, rotStart: '-6deg', rotEnd: '6deg' },
  { id: 26, symbol: '·', left: '94%', size: '14px', duration: '30s', delay: '-20s', opacity: 0.35, rotStart: '0deg', rotEnd: '0deg' },
];

export const WelcomeView: React.FC<WelcomeViewProps> = ({ onEnterShop }) => {
  return (
    <div className="relative w-full h-[100dvh] min-h-[550px] overflow-hidden flex flex-col items-center justify-center select-none bg-gradient-to-b from-[#FFF0F4] via-[#FFF9F3] to-[#FFEAF1]">
      {/* ━━━━━━━━━━━━━━━━━━ 1. TĨNH & DỊU DÀNG: NỀN PASTEL KAWAII BAKERY ━━━━━━━━━━━━━━━━━━ */}
      {/* Nền hoàn toàn đứng yên (KHÔNG rung lắc, KHÔNG camera shake, KHÔNG zoom, KHÔNG xoay) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Họa tiết chấm bi pastel cực nhẹ tạo cảm giác giấy gói bánh Pháp cao cấp */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'radial-gradient(#d64d78 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Điểm nhấn viền ren/bèo nhún pastel nhỏ ở mép trên tạo chất tiệm bánh nhỏ */}
        <div className="absolute top-0 left-0 right-0 h-4 flex items-center justify-between overflow-hidden opacity-40">
          <div
            className="w-full h-3 border-b-2 border-dashed border-pink-300"
            style={{ strokeDasharray: '6 6' }}
          />
        </div>

        {/* Quầng sáng trắng kem nhẹ ở trung tâm: Giữ cho khu vực chữ & nút luôn thoáng đãng, sắc nét, là điểm nhìn chính */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.65) 45%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)',
          }}
        />
      </div>

      {/* ━━━━━━━━━━━━━━━━━━ HIỆU ỨNG HỌA TIẾT RƠI THẬT CHẬM VÀ ĐỀU TỪ TRÊN XUỐNG ━━━━━━━━━━━━━━━━━━ */}
      {/* Chỉ các họa tiết trang trí được chuyển động nhẹ từ trên xuống. Không rung lắc, không bay loạn */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {KAWAII_FALLING_ITEMS.map((item) => (
          <span
            key={item.id}
            className="falling-bakery-sticker leading-none select-none text-[#d45679]"
            style={
              {
                left: item.left,
                fontSize: item.size,
                animationDuration: item.duration,
                animationDelay: item.delay,
                '--sticker-opacity': item.opacity,
                '--rot-start': item.rotStart,
                '--rot-end': item.rotEnd,
              } as React.CSSProperties
            }
          >
            {item.symbol}
          </span>
        ))}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━ 2. LỜI CHÀO & 3. NÚT BƯỚC VÀO TIỆM (ĐỨNG YÊN HOÀN TOÀN) ━━━━━━━━━━━━━━━━━━ */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-sm mx-auto text-center gap-6 sm:gap-7">
        {/* 2. LỜI CHÀO: ĐỨNG YÊN, RÕ RÀNG, LÀ ĐIỂM NHÌN CHÍNH */}
        <div className="select-none py-2 px-3 rounded-2xl bg-white/45 backdrop-blur-[2px]">
          <h1 className="leading-snug flex flex-col items-center gap-1.5">
            <span
              className="text-base sm:text-lg font-semibold tracking-wide text-stone-600"
              style={{
                textShadow: '0 1px 4px rgba(255, 255, 255, 0.95)',
              }}
            >
              Chào mừng bạn đến với
            </span>
            <span
              className="text-2xl sm:text-[28px] font-bold tracking-tight text-[#9c274f] flex items-center justify-center gap-1.5"
              style={{
                fontFamily: "'Comfortaa', 'Quicksand', sans-serif",
                textShadow:
                  '0 2px 12px rgba(255, 255, 255, 1), 0 1px 3px rgba(255, 230, 240, 0.9)',
              }}
            >
              <span>Tiệm bánh mì của Xiangxiang</span>
              <span className="text-rose-400 font-normal text-xl sm:text-2xl">♡</span>
            </span>
          </h1>
        </div>

        {/* 3. NÚT: "🥖 Bước vào tiệm →" (ĐỨNG YÊN HOÀN TOÀN, KHÔNG RUNG, CHỈ CÓ HIỆU ỨNG HOVER/CHẠM NHẸ) */}
        <div>
          <motion.button
            id="btn-enter-shop"
            onClick={onEnterShop}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-white/95 hover:bg-white active:bg-white backdrop-blur-md border border-pink-200 hover:border-pink-300 shadow-[0_6px_20px_-4px_rgba(244,114,182,0.25)] text-stone-800 transition-colors cursor-pointer select-none"
          >
            {/* Điểm xuyết sparkle nhỏ tinh tế ở góc nút (tĩnh, đứng yên cùng nút) */}
            <span className="absolute -top-1.5 -right-1 text-pink-400 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-3.5 h-3.5 fill-pink-200 text-pink-400" />
            </span>

            {/* Icon bánh mì */}
            <span className="text-xl sm:text-2xl">
              🥖
            </span>

            {/* Text nút */}
            <span
              className="text-base sm:text-lg font-bold text-[#882143] tracking-wide"
              style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
            >
              Bước vào tiệm
            </span>

            {/* Mũi tên */}
            <span className="text-rose-400 font-bold text-lg group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
