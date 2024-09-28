/**
 * Converte um valor numérico para uma string formatada como porcentagem.
 *
 * @param {number} value - O valor numérico que será convertido para porcentagem.
 * @param {Intl.NumberFormatOptions} [options] - Opções adicionais para formatação.
 *
 * @returns {string} - O valor formatado como porcentagem.
 *
 * @example
 * // Exemplo de uso:
 * const value = 0.1234;
 * const formattedPercentage = toPercentage(value);
 * console.log(formattedPercentage); // "12%"
 *
 * // Exemplo de uso com opções adicionais:
 * const options = { minimumFractionDigits: 2 };
 * const formattedPercentageWithOptions = toPercentage(value, options);
 * console.log(formattedPercentageWithOptions); // "12,34%"
 */
export const toPercentage = (value: number, options?: Intl.NumberFormatOptions) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    ...options,
  });

  return formatter.format(value);
};
