import { ChangeEvent } from 'react';

import { centsToNumber } from '../formatters/centsToNumber';
import { toBRL } from '../formatters/toBRL';
import { toPercentage } from '../formatters/toPercentage';
import { parseNumber } from '../parser/parseNumber';

export type MaskType = 'letters' | 'numbers' | 'both';
export type MaskFormatterOptions = {
  event: ChangeEvent<HTMLInputElement>;
  maskType?: MaskType;
  intlOptions?: Intl.NumberFormatOptions;
};
export type MaskFormatter = (value: string, options: MaskFormatterOptions) => string;

const applyMask = (
  value: string | number,
  mask: string,
  maskType: MaskType = 'numbers',
): string => {
  if (!value) return '';

  let regex;

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
    if (mask[i] === '*' && unmaskedValue[position] !== undefined) {
      formattedValue += unmaskedValue[position++];
    } else if (unmaskedValue[position] !== undefined) {
      formattedValue += mask[i];
    }
  }

  return formattedValue;
};

const formatCPF: MaskFormatter = (value, { maskType = 'numbers' }) =>
  applyMask(value, '***.***.***-**', maskType);

const formatCNPJ: MaskFormatter = (value, { maskType = 'numbers' }) =>
  applyMask(value, '**.***.***/****-**', maskType);

const formatCEP: MaskFormatter = (value, { maskType = 'numbers' }) =>
  applyMask(value, '*****-***', maskType);

const formatBRL: MaskFormatter = (value, { intlOptions }) => {
  const valueInCents = parseFloat(value.replace('.', '').replace(',', '').replace(/\D/g, ''));

  if (isNaN(valueInCents)) {
    return '';
  }

  const formattedValue = toBRL(centsToNumber(valueInCents), intlOptions);

  return formattedValue;
};

const formatPercentage: MaskFormatter = (value, { event, intlOptions }) => {
  const isDeleting = (event.nativeEvent as InputEvent)?.inputType === 'deleteContentBackward';

  if (!value || (isDeleting && value.length === 1)) {
    return '';
  }

  const parsedValue = parseNumber(isDeleting ? value.slice(0, -1) : value) / 100;

  return toPercentage(parsedValue, intlOptions);
};

/**
 * Objeto Mask contendo funções de formatação de máscaras para diferentes tipos de valores.
 *
 * @namespace Mask
 * @property {MaskFormatter} cpf - Formata um valor como CPF.
 * @property {MaskFormatter} cnpj - Formata um valor como CNPJ.
 * @property {MaskFormatter} cep - Formata um valor como CEP.
 * @property {MaskFormatter} brl - Formata um valor como BRL (Real Brasileiro).
 * @property {MaskFormatter} percentage - Formata um valor como porcentagem.
 *
 * @example
 * // Utilizando no componente Input
 * import { Mask } from './path/to/mask/util';
 *
 * type InputProps = {
 *   mask?: MaskFormatter;
 * };
 *
 * const Input = ({ mask }: InputProps) => {
 *   const handleChangeCaptureInputValue = (event) => {
 *     const { value } = event.currentTarget;
 *
 *     if (mask) {
 *       event.currentTarget.value = mask(value, { event });
 *     }
 *   };
 *
 *   return <input type="text" onChangeCapture={handleChangeCaptureInputValue} />;
 * };
 *
 * // Uso do Input com máscara de porcentagem
 * <Input mask={Mask.percentage} />;
 *
 * // Uso do Input com máscara de porcentagem passando opções extras
 * <Input mask={(value, { event }) => Mask.percentage(value, { event, intlOptions: { minimumIntegerDigits: 2 } })} />;
 *
 * @example
 * // Criação de uma máscara personalizada
 * const formatPhoneNumber: MaskFormatter = (value, { maskType = 'numbers' }) =>
 *   applyMask(value, '(**) * ****-****', maskType);
 *
 * // Adicionando ao objeto Mask
 * const Mask = {
 *   phoneNumber: formatPhoneNumber,
 * }
 **/
export const Mask = {
  cpf: formatCPF,
  cnpj: formatCNPJ,
  cep: formatCEP,
  brl: formatBRL,
  percentage: formatPercentage,
};
