/**
 * NYONG AI
 * Firebase App Check dinonaktifkan.
 * Percakapan AI berjalan menggunakan model lokal di perangkat.
 */

let isAppCheckInitialized = false;

/**
 * Kompatibilitas untuk pemanggil lama.
 * Tidak melakukan inisialisasi Firebase.
 */
export const initializeAppCheck = async (): Promise<void> => {
  if (isAppCheckInitialized) {
    return;
  }

  isAppCheckInitialized = true;

  console.info('NYONG AI: Firebase App Check dinonaktifkan.');
};

/**
 * Tidak ada token Firebase karena App Check tidak digunakan.
 */
export const getAppCheckToken = async (): Promise<null> => {
  return null;
};
