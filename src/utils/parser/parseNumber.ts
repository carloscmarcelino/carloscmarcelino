/**
 * Converte uma string numérica em um número.
 *
 * @param {string | undefined} value - A string que será convertida em número. Pode ser uma string vazia ou indefinida.
 *
 * @returns {number} - O valor numérico convertido. Retorna 0 se a string for inválida ou indefinida.
 *
 * @example
 * // Exemplo de uso:
 * const numericString = '1.234,56';
 * const parsedNumber = parseNumber(numericString);
 * console.log(parsedNumber); // 1234.56
 *
 * // Exemplo de uso com string inválida:
 * const invalidString = 'abc';
 * const parsedInvalid = parseNumber(invalidString);
 * console.log(parsedInvalid); // 0
 */
export const parseNumber = (value: string | undefined): number => {
  if (!value) return 0;

  const parsedValue = Number(
    value
      .replaceAll('.', '')
      .replaceAll(',', '.')
      .replace(/[^0-9,.]/g, ''),
  );

  if (isNaN(parsedValue)) return 0;

  return parsedValue;
};
