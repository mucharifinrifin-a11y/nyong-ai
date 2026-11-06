/**
 * NYONG AI
 * Firebase App Check dinonaktifkan.
 * Tidak ada ketergantungan pada layanan Firebase.
 */

let isAppCheckInitialized = false;

/**
 * Mempertahankan kompatibilitas dengan pemanggil lama.
 */
export const initializeAppCheck = async (): Promise<void> => {
  if (isAppCheckInitialized) {
    return;
  }

  isAppCheckInitialized = true;

  console.info('NYONG AI: Firebase App Check dinonaktifkan.');
};

/**
 * Mengembalikan string kosong karena Firebase App Check
 * tidak digunakan dalam NYONG AI.
 *
 * Tipe string dipertahankan agar kompatibel dengan
 * fungsi benchmark, feedback, dan pengujian yang sudah ada.
 */
export const getAppCheckToken = async (): Promise<string> => {
  return '';
};
