/**
 * Converte um valor numérico para centavos.
 *
 * @param {number} value - O valor numérico que será convertido para centavos.
 *
 * @returns {number} - O valor convertido para centavos.
 *
 * @example
 * // Exemplo de uso:
 * const numberValue = 1234.56;
 * const valueInCents = toCents(numberValue);
 * console.log(valueInCents); // 123456
 */

export const toCents = (value: number): number => value * 100;
