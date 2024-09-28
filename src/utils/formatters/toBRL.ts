/**
 * Converte um valor numérico para uma string formatada em Real Brasileiro (BRL).
 *
 * @param {number} value - O valor numérico que será convertido para BRL.
 * @param {Intl.NumberFormatOptions} [options] - Opções adicionais para formatação.
 *
 * @returns {string} - O valor formatado em BRL.
 *
 * @example
 * // Exemplo de uso:
 * const value = 1234.56;
 * const formattedValue = toBRL(value);
 * console.log(formattedValue); // "R$ 1.234,56"
 *
 * // Exemplo de uso com opções adicionais:
 * const formattedValueWithOptions = toBRL(value, { minimumFractionDigits: 3 });
 * console.log(formattedValueWithOptions); // "R$ 1.234,560"
 */
export const toBRL = (value: number, options?: Intl.NumberFormatOptions): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    ...options,
  });

  return formatter.format(value);
};
