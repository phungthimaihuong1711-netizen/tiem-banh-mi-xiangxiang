import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ScrapbookViewProps {
  onOpenMenu: () => void;
  onBackToWelcome?: () => void;
}

export const ScrapbookView: React.FC<ScrapbookViewProps> = ({
  onOpenMenu,
  onBackToWelcome,
}) => {
  // Sách ban đầu ĐÓNG. Sau khoảng 1 giây (1000ms): sách từ từ MỞ RA thật chậm và mượt.
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Mở sau 1 giây đúng yêu cầu
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="relative w-full h-[100dvh] min-h-[580px] overflow-hidden flex flex-col items-center justify-center select-none bg-[#f6eee0]"
    >
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. GIỮ NGUYÊN FILE ẢNH GỐC LÀM BACKGROUND / IMAGE CỐ ĐỊNH
          - Nền, hình ảnh công chúa, và mọi sticker trên ảnh HOÀN TOÀN ĐỨNG YÊN
          - Không crop mất chi tiết quan trọng
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative w-full max-w-[460px] h-full max-h-[920px] mx-auto overflow-hidden shadow-2xl flex items-center justify-center">
        {/* Nút quay lại trang chủ nhỏ gọn ở góc trên bên trái */}
        {onBackToWelcome && (
          <button
            type="button"
            onClick={onBackToWelcome}
            aria-label="Quay lại trang chủ"
            className="absolute top-4 left-4 z-30 w-8 h-8 rounded-full bg-white/85 hover:bg-white text-stone-700 flex items-center justify-center shadow-md backdrop-blur-sm transition-transform active:scale-95 cursor-pointer border border-pink-200/80"
          >
            <ArrowLeft className="w-4 h-4 text-rose-700" />
          </button>
        )}

        <img
          src="/assets/scrapbook_page.jpg"
          alt="Scrapbook Tiệm bánh mì của Xiangxiang"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          referrerPolicy="no-referrer"
        />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            2. QUYỂN SÁCH RIÊNG BẰNG HTML/CSS
            Đặt tại khoảng trống ngay bên dưới dòng: "Tiệm bánh mì của Xiangxiang"
            Vị trí chính xác: top: ~23.5%, ngang: ~75%, cao: ~18.5%
            CHỈ QUYỂN SÁCH ĐƯỢC ANIMATE. ẢNH NỀN VÀ CÔNG CHÚA HOÀN TOÀN ĐỨNG YÊN!
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-20 book-perspective flex items-center justify-center pointer-events-auto"
          style={{
            top: '23.8%',
            width: '76%',
            maxWidth: '330px',
            height: '18.5%',
            maxHeight: '170px',
          }}
        >
          <div
            id="scrapbook-interactive-book"
            onClick={() => {
              if (isOpen) {
                onOpenMenu();
              }
            }}
            className={`relative w-full h-full select-none ${
              isOpen ? 'cursor-pointer group' : 'cursor-default'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ━━━━━━━━━━ SÁCH MỞ HOÀN TOÀN: HAI TRANG SÁCH KEM PASTEL ━━━━━━━━━━ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="absolute inset-0 rounded-xl bg-[#FFFDF8] border-2 border-[#EADAC4] shadow-[0_12px_28px_rgba(100,50,20,0.18)] flex overflow-hidden"
              style={{
                backgroundImage:
                  'radial-gradient(#EAD5C0 0.8px, transparent 0.8px)',
                backgroundSize: '12px 12px',
              }}
            >
              {/* Gáy sách ở trung tâm */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-transparent via-[#DFC8B0]/40 to-transparent z-10 pointer-events-none" />

              {/* Ruy-băng đánh dấu trang màu đỏ dâu dịu */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-7 bg-rose-400/85 rounded-b-sm shadow-sm z-10 pointer-events-none" />

              {/* Đường viền ren chỉ dập nổi trên trang sách */}
              <div className="absolute inset-x-2 top-1.5 h-1 border-b border-dashed border-[#DFCCA7]/60 pointer-events-none" />
              <div className="absolute inset-x-2 bottom-1.5 h-1 border-t border-dashed border-[#DFCCA7]/60 pointer-events-none" />

              {/* Trang trái */}
              <div className="flex-1 h-full p-2 flex flex-col items-center justify-center border-r border-[#EFE5D6] relative">
                <span className="text-xs opacity-80 absolute top-2 left-2">🍓</span>
                <span className="text-[10px] opacity-60 absolute bottom-2 left-2.5">🥐</span>
                <div className="w-full flex flex-col items-center gap-0.5">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#B5835A] opacity-80">
                    Xiangxiang
                  </span>
                  <div className="w-8 h-[1px] bg-[#E2CDAE]" />
                </div>
              </div>

              {/* Trang phải */}
              <div className="flex-1 h-full p-2 flex flex-col items-center justify-center relative">
                <span className="text-xs opacity-80 absolute top-2 right-2">🍒</span>
                <span className="text-[10px] opacity-60 absolute bottom-2 right-2.5">🥖</span>
                <div className="w-full flex flex-col items-center gap-0.5">
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#B5835A] opacity-80">
                    Bakery
                  </span>
                  <div className="w-8 h-[1px] bg-[#E2CDAE]" />
                </div>
              </div>

              {/* ━━━━━━━━━━ 3. CHỮ "MENU" LỚN HIỆN TRÊN SÁCH KHI MỞ HOÀN TOÀN ━━━━━━━━━━ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.88 }}
                transition={{ duration: 0.5, delay: 0.65, ease: 'easeOut' }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-3"
              >
                {/* CHỮ MENU LỚN VINTAGE / KAWAII */}
                <div className="flex items-center justify-center gap-1.5 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-sm text-pink-400">✧</span>
                  <h2
                    id="menu-text"
                    className="text-2xl sm:text-[28px] font-black tracking-widest text-[#8F2347] drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]"
                    style={{
                      fontFamily: "'Comfortaa', 'Quicksand', cursive, sans-serif",
                    }}
                  >
                    MENU
                  </h2>
                  <span className="text-sm text-pink-400">✧</span>
                </div>

                {/* Dòng chữ phụ: "Chọn một chiếc bánh cho câu chuyện của bạn ♡" */}
                <p className="text-[10.5px] sm:text-[11.5px] font-semibold text-[#7C5A48] mt-1 leading-tight flex items-center gap-1">
                  <span>Chọn một chiếc bánh cho câu chuyện của bạn</span>
                  <span className="text-rose-500 font-bold">♡</span>
                </p>

                {/* Nút bấm / Chỉ dẫn chạm nhẹ nhàng */}
                <div className="mt-1.5 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#FFF0F5] border border-pink-200 text-[#9C274F] text-[9.5px] font-bold shadow-sm group-hover:bg-pink-100 transition-colors">
                  <span>✨ Chạm MENU để xem 5 loại bánh</span>
                  <span className="text-[10px]">→</span>
                </div>
              </motion.div>
            </motion.div>

            {/* ━━━━━━━━━━ BÌA SÁCH (FRONT COVER) ━━━━━━━━━━
                Ban đầu đóng. Sau 1 giây từ từ lật mở thật chậm và mượt */}
            <motion.div
              initial={false}
              animate={{
                rotateY: isOpen ? -180 : 0,
                opacity: isOpen ? 0 : 1,
              }}
              transition={{
                duration: 1.15,
                ease: [0.4, 0.0, 0.2, 1], // Animation chậm, mượt mà, tự nhiên
              }}
              className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FFF6ED] via-[#FFEAF0] to-[#FCE3D8] border-2 border-[#E5C9AF] shadow-[0_10px_24px_rgba(100,50,20,0.22)] flex flex-col items-center justify-center p-3 origin-left z-30"
              style={{
                backfaceVisibility: 'hidden',
                backgroundImage:
                  'radial-gradient(#E7C4AE 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
            >
              {/* Gáy bìa sách bên trái */}
              <div className="absolute top-0 bottom-0 left-0 w-3.5 bg-gradient-to-r from-[#D7B194] via-[#E9CDB7] to-transparent rounded-l-lg border-r border-[#D2AB8D]" />

              {/* Đường viền dập nổi vintage */}
              <div className="absolute inset-2 border border-dashed border-[#D9B79B]/80 rounded-lg pointer-events-none" />

              {/* Trang trí bìa sổ: nơ hồng, trái tim, icon bánh mì */}
              <div className="relative z-10 flex flex-col items-center text-center gap-1">
                <div className="text-2xl drop-shadow-sm">🎀</div>

                <span
                  className="text-xs sm:text-sm font-bold tracking-wider text-[#8A3752]"
                  style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
                >
                  Sổ Menu Tiệm Bánh
                </span>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A66E53]">
                  <span>✨</span>
                  <span>🥖</span>
                  <span>♡</span>
                  <span>🥐</span>
                  <span>✨</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
