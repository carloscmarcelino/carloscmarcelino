/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Adiciona parâmetros de busca a uma URL.
 *
 * @param {string} url - A URL à qual os parâmetros de busca serão adicionados.
 * @param {Record<string, any>} params - Um objeto contendo os parâmetros de busca como pares chave-valor.
 *
 * @returns {string} - A URL com os parâmetros de busca adicionados.
 *
 * @example
 * // Exemplo de uso:
 * const url = 'https://example.com';
 * const params = { foo: 'bar', baz: 42 };
 * const updatedUrl = appendSearchParams(url, params);
 * console.log(updatedUrl); // "https://example.com?foo=bar&baz=42"
 */
export function appendSearchParams(url: string, params: Record<string, any>): string {
  const urlObj = new URL(url);
  Object.keys(params).forEach((key) => {
    urlObj.searchParams.append(key, params[key]);
  });
  return urlObj.toString();
}
