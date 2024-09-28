/**
 * Converte um valor em centavos para um número.
 *
 * @param {number} valueInCents - O valor em centavos que será convertido para um número.
 *
 * @returns {number} - O valor convertido para um número, que pode ser inteiro ou decimal.
 *
 * @example
 * // Exemplo de uso:
 * const valueInCents = 123456;
 * const numberValue = centsToNumber(valueInCents);
 * console.log(numberValue); // 1234.56
 */
export const centsToNumber = (valueInCents: number): number => valueInCents / 100;
