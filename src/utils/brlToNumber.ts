export const brlToNumber = (value: string | number): number => {
  if (typeof value === 'number') return value;

  return Number(value.replace('R$', '').replaceAll('.', '').replace(',', '.').trim());
};
