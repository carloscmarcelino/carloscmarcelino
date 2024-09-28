import { MimeTypes } from '@/types';

type DownloadFileOptions = {
  fileName?: string;
  mimeType?: MimeTypes | 'application/octet-stream';
};

const createElement = (url: string, fileName?: string) => {
  const anchorElement = document.createElement('a');
  if (url) {
    anchorElement.href = url;
  }
  if (fileName) {
    anchorElement.download = fileName;
  }

  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(url);
};

/**
 * Cria e dispara o download de um arquivo a partir de uma URL, string Base64 ou objeto File.
 *
 * @param {string | File} file - A URL, string Base64 ou objeto File que será baixado.
 * @param {DownloadFileOptions} [options] - Opções adicionais para o download do arquivo.
 * @param {string} [options.fileName] - Nome do arquivo para download.
 * @param {MimeTypes | 'application/octet-stream'} [options.mimeType] - Tipo MIME do arquivo base64 para download.
 *
 * @example
 * // Exemplo de uso com URL:
 * downloadFile('https://example.com/file.pdf', { fileName: 'file.pdf' });
 *
 * // Exemplo de uso com string Base64 completa:
 * const base64String = 'data:application/pdf;base64,...';
 * downloadFile(base64String, { fileName: 'file.pdf' });
 *
 * // Exemplo de uso com string Base64 incompleta:
 * const base64String = 'base64,...';
 * downloadFile(base64String, { fileName: 'image.png', mimeType: MimeTypes.png });
 *
 * // Exemplo de uso com objeto File:
 * const file = new File(['content'], 'example.txt', { type: 'text/plain' });
 * downloadFile(file, { fileName: 'example.txt' });
 */
export const downloadFile = (file: string | File, options?: DownloadFileOptions) => {
  const isUrlString =
    typeof file === 'string' && (file.startsWith('http://') || file.startsWith('https://'));
  const isBase64String =
    typeof file === 'string' && (file.startsWith('data:') || file.startsWith('base64,'));
  const isFile = file instanceof File;

  if (isBase64String) {
    const url = file.startsWith('base64,')
      ? `data:${options?.mimeType};base64,${file.split('base64,')[1]}`
      : file;

    createElement(url, options?.fileName);
  }

  if (isUrlString) {
    createElement(file, options?.fileName);
  }

  if (isFile) {
    const url = window.URL.createObjectURL(file);

    createElement(url, options?.fileName);
  }
};
