export type MaskType = 'letters' | 'numbers' | 'both';

const applyMask = (
  value: string | number,
  mask: string,
  maskType: MaskType = 'numbers',
): string => {
  if (!value) return '';

  let regex: RegExp;

  switch (maskType) {
    case 'letters':
      regex = /[^a-zA-Z]+/g;
      break;
    case 'numbers':
      regex = /\D+/g;
      break;
    case 'both':
    default:
      regex = /[^a-zA-Z0-9]+/g;
      break;
  }

  let formattedValue = '';
  const unmaskedValue = String(value).replace(regex, '');
  let position = 0;

  for (let i = 0; i < mask.length; i++) {
    if ((mask[i] === '#' || mask[i] === '*') && unmaskedValue[position] !== undefined) {
      formattedValue += unmaskedValue[position++];
    } else if (unmaskedValue[position] !== undefined) {
      formattedValue += mask[i];
    }
  }

  return formattedValue;
};

export const Mask = {
  formatBRL: (value: string | number): string => {
    const divider = 100;

    if (!value && value !== 0) return '';

    const valueWithoutMask = String(value)
      .replace(/[^0-9]/g, '')
      .trim();

    return (Number(valueWithoutMask) / divider).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  },
  rate: (value: string, maskType: MaskType = 'numbers') => {
    const formattedValue = applyMask(value, '**%', maskType);

    return formattedValue.endsWith('%') ? formattedValue : formattedValue + '%';
  },
  period: (value: string, maskType: MaskType = 'numbers') => applyMask(value, '** anos', maskType),
};
