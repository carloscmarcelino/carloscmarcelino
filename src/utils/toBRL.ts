export const toBRL = (val: number): string | null => {
  if (isNaN(val)) {
    return null;
  }

  const formattedNumber = val.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formattedNumber;
};
