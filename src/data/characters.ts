import { Character } from '../types';

/**
 * Danh sách nhân vật của "Tiệm bánh mì của Xiangxiang"
 * Hiện tại để trống, KHÔNG có nhân vật mẫu/demo/mock nào.
 *
 * Cấu trúc chuẩn sẵn sàng khi người dùng thêm nhân vật:
 * {
 *   id: string,
 *   name: string,
 *   category: string, // 'banh-mi-trung' | 'banh-mi-pa-te' | 'banh-mi-thit' | 'banh-mi-ngot' | 'banh-mi-dac-biet' hoặc tên loại bánh
 *   avatar: string,
 *   shortDescription: string,
 *   introduction: string,
 *   plot: string,
 *   chatLink: string
 * }
 */
export const INITIAL_CHARACTERS: Character[] = [];

/**
 * Hàm chuẩn hóa category để đảm bảo bất kỳ nhân vật mới nào thêm vào
 * với tên tiếng Việt mới ("Bánh quy", "Bánh mì nướng", "Bánh hoa quế", "Bánh kem", "Bánh mì cầu vồng")
 * hoặc tên cũ ("Bánh mì trứng", ...) hoặc ID ("banh-mi-trung") đều khớp chính xác vào danh mục tương ứng.
 */
export function normalizeCategory(catInput: string): string {
  if (!catInput) return 'banh-mi-trung';
  const clean = catInput.trim().toLowerCase();

  // 1. Bánh quy (trước là Bánh mì trứng)
  if (clean.includes('quy') || clean.includes('trứng') || clean.includes('trung') || clean === 'banh-mi-trung') {
    return 'banh-mi-trung';
  }
  // 2. Bánh mì nướng (trước là Bánh mì pa-tê)
  if (clean.includes('nướng') || clean.includes('nuong') || clean.includes('pa-tê') || clean.includes('pate') || clean.includes('pa tê') || clean === 'banh-mi-pa-te') {
    return 'banh-mi-pa-te';
  }
  // 3. Bánh hoa quế (trước là Bánh mì thịt)
  if (clean.includes('hoa quế') || clean.includes('hoa que') || clean.includes('quế') || clean.includes('thịt') || clean.includes('thit') || clean === 'banh-mi-thit') {
    return 'banh-mi-thit';
  }
  // 4. Bánh kem (trước là Bánh mì ngọt)
  if (clean.includes('kem') || clean.includes('ngọt') || clean.includes('ngot') || clean === 'banh-mi-ngot') {
    return 'banh-mi-ngot';
  }
  // 5. Bánh mì cầu vồng (trước là Bánh mì đặc biệt)
  if (clean.includes('cầu vồng') || clean.includes('cau vong') || clean.includes('vồng') || clean.includes('đặc biệt') || clean.includes('dac biet') || clean === 'banh-mi-dac-biet') {
    return 'banh-mi-dac-biet';
  }

  // Fallback direct match
  return catInput;
}
