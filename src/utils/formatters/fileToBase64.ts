/**
 * Converte um arquivo em uma string Base64.
 *
 * @param {File} file - O arquivo que será convertido para Base64.
 *
 * @returns {Promise<string | null>} - Uma promessa que resolve com a string Base64 ou null em caso de erro.
 *
 * @example
 * // Exemplo de uso com async/await:
 * const file = new File(['content'], 'example.txt', { type: 'text/plain' });
 *
 * const convertFileToBase64 = async (file) => {
 *   try {
 *     const base64String = await fileToBase64(file);
 *     console.log(base64String);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * };
 *
 * convertFileToBase64(file);
 */
export const fileToBase64 = (file: File): Promise<string | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const base64String = reader.result?.toString().split(',')[1];

      if (base64String) {
        resolve(base64String);
      } else {
        reject(null);
      }
    };

    reader.onerror = () => {
      reject(null);
    };
  });
