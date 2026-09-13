import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { BreadCategory } from '../types';
import { BREAD_CATEGORIES } from '../data/breadCategories';

interface BreadCategoriesViewProps {
  categories: BreadCategory[];
  characterCounts: Record<string, number>;
  onSelectCategory: (categoryId: string) => void;
  onBackToWelcome: () => void;
}

interface ScrapbookSticker {
  id: string;
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
// RẤT NHIỀU HỌA TIẾT SCRAPBOOK / KAWAII BAKERY PHONG PHÚ RẢI RÁC KHẮP NỀN
// Đa tầng, đầy đặn, không hề trống trải:
// Nơ 🎀, Trái tim ♡/🤍, Sparkle ✦/✧, Ngôi sao ⭐/✨, Hoa 🌸, Cánh hoa 🌷,
// Dâu tây 🍓, Cherry 🍒, Bánh sừng bò 🥐, Bánh quy 🍪, Bánh kem 🍰, Cupcake 🧁,
// Bánh mì baguette 🥖, Cầu vồng 🌈, Lá thảo mộc 🌿, Tem vintage, Chấm bi pastel
// Chuyển động rơi/chảy cực chậm (20s - 38s), êm ái, mượt mà, không rung lắc
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SCRAPBOOK_BACKGROUND_STICKERS: ScrapbookSticker[] = [
  // ─── LỚP 1: CỘT TRÁI NGOÀI BIÊN (1% - 15%) ───
  { id: 's1', symbol: '🎀', left: '2%', size: '19px', duration: '24s', delay: '-2s', opacity: 0.75, rotStart: '-8deg', rotEnd: '10deg' },
  { id: 's2', symbol: '🍪', left: '6%', size: '16px', duration: '28s', delay: '-14s', opacity: 0.7, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 's3', symbol: '🍓', left: '11%', size: '15px', duration: '22s', delay: '-8s', opacity: 0.75, rotStart: '-5deg', rotEnd: '6deg' },
  { id: 's4', symbol: '♡', left: '3%', size: '14px', duration: '26s', delay: '-19s', opacity: 0.65, rotStart: '0deg', rotEnd: '15deg' },
  { id: 's5', symbol: '🌸', left: '9%', size: '15px', duration: '25s', delay: '-6s', opacity: 0.7, rotStart: '8deg', rotEnd: '-8deg' },
  { id: 's6', symbol: '✦', left: '13%', size: '12px', duration: '30s', delay: '-22s', opacity: 0.55, rotStart: '0deg', rotEnd: '20deg' },
  { id: 's7', symbol: '⭐', left: '4%', size: '13px', duration: '33s', delay: '-11s', opacity: 0.6, rotStart: '-6deg', rotEnd: '14deg' },
  { id: 's8', symbol: '🌷', left: '14%', size: '15px', duration: '27s', delay: '-17s', opacity: 0.65, rotStart: '6deg', rotEnd: '-6deg' },

  // ─── LỚP 2: CỘT TRÁI TRUNG GIAN (16% - 32%) ───
  { id: 's9', symbol: '🥐', left: '17%', size: '17px', duration: '27s', delay: '-11s', opacity: 0.7, rotStart: '-6deg', rotEnd: '8deg' },
  { id: 's10', symbol: '🍒', left: '21%', size: '15px', duration: '23s', delay: '-2s', opacity: 0.7, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 's11', symbol: '✨', left: '26%', size: '13px', duration: '29s', delay: '-16s', opacity: 0.6, rotStart: '0deg', rotEnd: '15deg' },
  { id: 's12', symbol: '🧁', left: '30%', size: '16px', duration: '25s', delay: '-9s', opacity: 0.65, rotStart: '6deg', rotEnd: '-6deg' },
  { id: 's13', symbol: '🤍', left: '19%', size: '13px', duration: '32s', delay: '-25s', opacity: 0.55, rotStart: '-4deg', rotEnd: '4deg' },
  { id: 's14', symbol: '🌿', left: '24%', size: '14px', duration: '31s', delay: '-7s', opacity: 0.55, rotStart: '-8deg', rotEnd: '8deg' },

  // ─── LỚP 3: KHU VỰC TRUNG TÂM PHÍA SAU CÁC CARD (33% - 66%) ───
  // Có độ trong suốt nhẹ để tạo chiều sâu phong phú mà không cản trở việc đọc card
  { id: 's15', symbol: '🍰', left: '35%', size: '16px', duration: '26s', delay: '-5s', opacity: 0.45, rotStart: '-5deg', rotEnd: '5deg' },
  { id: 's16', symbol: '✧', left: '41%', size: '11px', duration: '31s', delay: '-18s', opacity: 0.4, rotStart: '0deg', rotEnd: '-15deg' },
  { id: 's17', symbol: '🥖', left: '47%', size: '16px', duration: '28s', delay: '-12s', opacity: 0.45, rotStart: '6deg', rotEnd: '-6deg' },
  { id: 's18', symbol: '🌈', left: '54%', size: '15px', duration: '30s', delay: '-21s', opacity: 0.45, rotStart: '-4deg', rotEnd: '4deg' },
  { id: 's19', symbol: '⭐', left: '59%', size: '12px', duration: '27s', delay: '-7s', opacity: 0.45, rotStart: '0deg', rotEnd: '15deg' },
  { id: 's20', symbol: '♡', left: '64%', size: '13px', duration: '33s', delay: '-14s', opacity: 0.4, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 's21', symbol: '🍓', left: '38%', size: '14px', duration: '29s', delay: '-24s', opacity: 0.45, rotStart: '-6deg', rotEnd: '6deg' },

  // ─── LỚP 4: CỘT PHẢI TRUNG GIAN (67% - 83%) ───
  { id: 's22', symbol: '🥖', left: '68%', size: '17px', duration: '24s', delay: '-15s', opacity: 0.7, rotStart: '6deg', rotEnd: '-6deg' },
  { id: 's23', symbol: '🌸', left: '72%', size: '15px', duration: '26s', delay: '-4s', opacity: 0.7, rotStart: '-8deg', rotEnd: '6deg' },
  { id: 's24', symbol: '🎀', left: '77%', size: '18px', duration: '23s', delay: '-17s', opacity: 0.75, rotStart: '8deg', rotEnd: '-8deg' },
  { id: 's25', symbol: '🌿', left: '81%', size: '14px', duration: '29s', delay: '-10s', opacity: 0.6, rotStart: '-5deg', rotEnd: '5deg' },
  { id: 's26', symbol: '🍪', left: '74%', size: '16px', duration: '32s', delay: '-28s', opacity: 0.65, rotStart: '6deg', rotEnd: '-6deg' },

  // ─── LỚP 5: CỘT PHẢI NGOÀI BIÊN (84% - 98%) ───
  { id: 's27', symbol: '🍓', left: '85%', size: '16px', duration: '25s', delay: '-1s', opacity: 0.75, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 's28', symbol: '🍪', left: '91%', size: '16px', duration: '27s', delay: '-20s', opacity: 0.7, rotStart: '-6deg', rotEnd: '6deg' },
  { id: 's29', symbol: '♡', left: '96%', size: '14px', duration: '22s', delay: '-13s', opacity: 0.65, rotStart: '4deg', rotEnd: '-4deg' },
  { id: 's30', symbol: '✨', left: '88%', size: '13px', duration: '31s', delay: '-27s', opacity: 0.6, rotStart: '0deg', rotEnd: '20deg' },
  { id: 's31', symbol: '🌷', left: '93%', size: '14px', duration: '24s', delay: '-6s', opacity: 0.65, rotStart: '-5deg', rotEnd: '5deg' },
  { id: 's32', symbol: '⭐', left: '86%', size: '12px', duration: '35s', delay: '-15s', opacity: 0.55, rotStart: '0deg', rotEnd: '18deg' },

  // ─── LỚP 6: MẢNH SCRAPBOOK LI TI, HOA RƠI, TEM NHỎ BỔ SUNG ───
  { id: 's33', symbol: '✦', left: '5%', size: '10px', duration: '34s', delay: '-16s', opacity: 0.5, rotStart: '0deg', rotEnd: '30deg' },
  { id: 's34', symbol: '·', left: '15%', size: '16px', duration: '35s', delay: '-8s', opacity: 0.4, rotStart: '0deg', rotEnd: '0deg' },
  { id: 's35', symbol: '🍒', left: '25%', size: '14px', duration: '23s', delay: '-24s', opacity: 0.65, rotStart: '-5deg', rotEnd: '5deg' },
  { id: 's36', symbol: '·', left: '39%', size: '14px', duration: '36s', delay: '-30s', opacity: 0.35, rotStart: '0deg', rotEnd: '0deg' },
  { id: 's37', symbol: '🥐', left: '52%', size: '15px', duration: '26s', delay: '-3s', opacity: 0.45, rotStart: '6deg', rotEnd: '-6deg' },
  { id: 's38', symbol: '·', left: '70%', size: '15px', duration: '33s', delay: '-14s', opacity: 0.4, rotStart: '0deg', rotEnd: '0deg' },
  { id: 's39', symbol: '♡', left: '80%', size: '13px', duration: '25s', delay: '-22s', opacity: 0.6, rotStart: '6deg', rotEnd: '-6deg' },
  { id: 's40', symbol: '✧', left: '95%', size: '11px', duration: '32s', delay: '-11s', opacity: 0.5, rotStart: '0deg', rotEnd: '-20deg' },
  { id: 's41', symbol: '🌸', left: '32%', size: '13px', duration: '27s', delay: '-18s', opacity: 0.45, rotStart: '5deg', rotEnd: '-5deg' },
  { id: 's42', symbol: '🎀', left: '62%', size: '15px', duration: '28s', delay: '-9s', opacity: 0.45, rotStart: '-7deg', rotEnd: '7deg' },
];

export const BreadCategoriesView: React.FC<BreadCategoriesViewProps> = ({
  categories = BREAD_CATEGORIES,
  characterCounts,
  onSelectCategory,
  onBackToWelcome,
}) => {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF9F3] to-[#FFEBF2] pb-12">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. NỀN SCRAPBOOK VỚI HOA VĂN GIẤY THỦ CÔNG & REN CỔ ĐIỂN
          Chủ đạo: Hồng pastel + kem + trắng ngà + hồng đào + chút đỏ cherry + vàng kem
          Nền đứng yên hoàn toàn (KHÔNG rung lắc, KHÔNG zoom, KHÔNG xoay)
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Họa tiết chấm bi scrapbook màu dâu pastel nhẹ */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'radial-gradient(#d64d78 1.2px, transparent 1.2px)',
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

        {/* Các mảng tem scrapbook vintage trang trí hai bên biên & các góc */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-pink-200/40 blur-2xl" />
        <div className="absolute top-1/4 -right-12 w-56 h-56 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="absolute top-2/3 -left-12 w-52 h-52 rounded-full bg-rose-200/35 blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-48 h-48 rounded-full bg-pink-200/30 blur-2xl" />

        {/* Mảnh tem giấy vintage scrapbook nhỏ ở các góc */}
        <div className="absolute top-8 left-2 text-pink-300/40 text-xs font-mono select-none">
          № 4672698 ❦
        </div>
        <div className="absolute top-12 right-3 text-pink-300/40 text-xs font-mono select-none">
          ★ BAKERY ★
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. CÁC STICKER SCRAPBOOK RƠI TỪ TRÊN XUỐNG CỰC CHẬM & MƯỢT MÀ
          Tốc độ rất chậm, so le tự nhiên, độ trong suốt nhẹ, chuyển động đều
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {SCRAPBOOK_BACKGROUND_STICKERS.map((sticker) => (
          <span
            key={sticker.id}
            className="falling-bakery-sticker leading-none select-none text-[#d64d78]"
            style={
              {
                left: sticker.left,
                fontSize: sticker.size,
                animationDuration: sticker.duration,
                animationDelay: sticker.delay,
                '--sticker-opacity': sticker.opacity,
                '--rot-start': sticker.rotStart,
                '--rot-end': sticker.rotEnd,
              } as React.CSSProperties
            }
          >
            {sticker.symbol}
          </span>
        ))}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. NỘI DUNG CHÍNH (HEADER, TIÊU ĐỀ & 5 CARD BÁNH)
          Các card bánh, chữ, nút đứng yên ổn định, không bị rung hay che khuất
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-lg mx-auto px-4 py-4 sm:py-6"
      >
        {/* Nút quay lại trang chủ & Badge phong cách scrapbook */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <button
            id="btn-back-to-welcome"
            onClick={onBackToWelcome}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/90 hover:bg-white text-stone-700 font-bold text-xs sm:text-sm shadow-xs border border-pink-200 hover:border-pink-300 hover:text-pink-600 backdrop-blur-xs transition-all cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4 text-pink-500" />
            <span>Về trang đầu</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs font-bold text-pink-700 bg-pink-100/80 px-3.5 py-1 rounded-full border border-pink-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Menu 5 Loại Bánh</span>
          </div>
        </div>

        {/* Tiêu đề trang & Lời dẫn nhẹ nhàng */}
        <div className="mb-5 text-center sm:text-left bg-white/60 backdrop-blur-[2px] p-3.5 rounded-2xl border border-pink-100/80 shadow-xs">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-xl">🎀</span>
            <h2
              className="text-xl sm:text-2xl font-black text-[#8D2548] tracking-tight flex items-center gap-1.5"
              style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
            >
              <span>Khay Bánh Hôm Nay</span>
              <span className="text-pink-400 text-lg">♡</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-medium">
            Chọn một loại bánh thơm ngon để bước vào thế giới câu chuyện của các nhân vật nhé!
          </p>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            4. DANH SÁCH 5 CARD BÁNH HÒA HỢP PHONG CÁCH SCRAPBOOK
            1. Bánh quy (Hiện đại)
            2. Bánh mì nướng (Âu cổ)
            3. Bánh hoa quế (Cổ trang)
            4. Bánh kem (NP)
            5. Bánh mì cầu vồng (Open World)
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="space-y-3.5">
          {categories.map((cat, index) => {
            const count = characterCounts[cat.id] || 0;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.25 }}
                whileHover={{ scale: 1.015, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  id={`card-bread-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className="w-full text-left bg-white/92 hover:bg-white active:bg-white rounded-2xl p-3.5 sm:p-4 border border-pink-200/90 hover:border-pink-400 shadow-[0_4px_16px_-2px_rgba(244,114,182,0.18)] hover:shadow-[0_8px_24px_-4px_rgba(244,114,182,0.3)] backdrop-blur-md transition-all flex items-center gap-3.5 sm:gap-4 cursor-pointer group relative overflow-hidden select-none"
                >
                  {/* Dải màu nền gradient mờ dịu theo chủ đề bánh */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cat.themeColor} opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none`}
                  />

                  {/* Điểm xuyết sparkle / sticker nhỏ ở góc card */}
                  <span className="absolute -top-1.5 -right-1 text-pink-300 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all text-xs pointer-events-none">
                    ✦
                  </span>

                  {/* Hình ảnh bánh thực tế do người dùng cung cấp - Sắc nét, bo góc mềm mại, viền hồng pastel */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-pink-200/80 shadow-inner bg-amber-50">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    {/* Badge Emoji bánh dễ thương */}
                    <div className="absolute top-1.5 left-1.5 bg-white/95 backdrop-blur-xs rounded-lg p-0.5 px-1.5 shadow-xs text-xs font-bold">
                      {cat.emoji}
                    </div>
                  </div>

                  {/* Thông tin bánh & Thể loại */}
                  <div className="flex-1 min-w-0 pr-1 relative z-10">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      {/* TÊN BÁNH MỚI CHÍNH XÁC */}
                      <h3
                        className="text-base sm:text-lg font-black text-stone-800 group-hover:text-[#9D264E] transition-colors"
                        style={{ fontFamily: "'Comfortaa', 'Quicksand', sans-serif" }}
                      >
                        {cat.name}
                      </h3>

                      {/* Thể loại */}
                      <span
                        className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${cat.badgeBg} ${cat.badgeText} border border-pink-200/50 shadow-xs`}
                      >
                        {cat.genre}
                      </span>
                    </div>

                    {/* Dòng mô tả nhỏ thể loại */}
                    <p className="text-xs sm:text-sm text-stone-600 line-clamp-1 mb-2 font-medium">
                      {cat.description}
                    </p>

                    {/* Số lượng nhân vật & Nút "Xem danh sách" */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="inline-flex items-center gap-1 text-pink-800 font-bold bg-pink-50/90 border border-pink-200/60 px-2.5 py-0.5 rounded-md text-[11px]">
                        <Heart className="w-3 h-3 fill-pink-400 text-pink-500" />
                        {count} nhân vật
                      </span>

                      <span className="text-[11.5px] font-bold text-pink-600 group-hover:text-pink-700 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        <span>Xem danh sách</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Footer ghi chú phong cách scrapbook đáng yêu */}
        <div className="mt-7 text-center text-xs text-stone-500 flex items-center justify-center gap-1.5 select-none font-medium">
          <span>🎀 Xiangxiang Bakery</span>
          <span>•</span>
          <span>Chạm vào card bánh để xem nhân vật</span>
          <span>♡</span>
        </div>
      </motion.div>
    </div>
  );
};
