import { MimeTypes } from '@/types';

type Base64ToFileOptions = {
  mimeType: MimeTypes | 'application/octet-stream';
};

/**
 * Converte uma string Base64 em um objeto Blob.
 *
 * @param {string} base64String - A string em Base64 que será convertida.
 * @param {Base64ToFileOptions} options - As opções para a conversão, incluindo o tipo MIME do Blob resultante.
 * @param {MimeTypes | 'application/octet-stream'} options.mimeType - O tipo MIME do Blob resultante.
 *
 * @returns {Blob} - O objeto Blob resultante da conversão.
 *
 * @example
 * // Exemplo de uso:
 * const base64String = 'data:image/png;base64,iVBORw0...'; // sua string Base64
 * const blobFile = base64ToFile(base64String, { mimeType: 'image/png' });
 * console.log(blobFile);
 */
export const base64ToFile = (base64String: string, options: Base64ToFileOptions): Blob => {
  const buffer = Buffer.from(base64String, 'base64');

  const blob = new Blob([buffer], {
    type: options.mimeType,
  });

  return blob;
};
