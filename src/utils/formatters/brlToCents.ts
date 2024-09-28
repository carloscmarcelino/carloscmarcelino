import { parseNumber } from '../parser/parseNumber';
import { isValidBRL } from '../regex/brlRegexp';

import { toCents } from './toCents';

/**
 * Converte um valor monetário em BRL (Real Brasileiro) para centavos.
 *
 * @param {string} value - O valor em BRL como string que será convertido para centavos.
 *
 * @returns {number} - O valor em centavos. Retorna 0 se o valor não for um BRL válido.
 *
 * @example
 * // Exemplo de uso:
 * const value = "R$ 1.250,56";
 * const cents = brlToCents(value);
 * console.log(cents); // 125056
 */
export const brlToCents = (value: string): number => {
  if (!isValidBRL(value)) return 0;

  return toCents(parseNumber(value));
};
