import z from 'zod';

import { isValidCNPJ } from '../regex/cnpjRegexp';
import { isValidCPF } from '../regex/cpfRegexp';

export const MAX_FILE_SIZE = 100000000; // 100MB
export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
export const ACCEPTED_DOCUMENT_TYPES = ['.doc', '.pdf'];
export const REQUIRED_ERROR = 'Este campo é obrigatório';
export const REQUIRED_URL = 'Insira uma url válida.';
export const REQUIRED_EMAIL = 'Insira um e-mail válido';
export const REQUIRED_CNPJ = 'Insira um CNPJ válido';
export const REQUIRED_CPF = 'Insira um CPF válido';
export const REQUIRED_RG = 'Insira um RG válido';
export const REQUIRED_TRUE = 'Termos precisam ser aceitos';
export const REQUIRED_CEP = 'Insira um CEP válido';
export const REQUIRED_OPTION = 'Selecione uma opção';
export const REQUIRED_MULTIPLE_OPTION = 'Selecione ao menos uma opção';

export const urlSchema = z
  .string({ required_error: REQUIRED_ERROR })
  .trim()
  .min(1, { message: REQUIRED_ERROR })
  .url({ message: REQUIRED_URL });

export const cnpjSchema = z
  .string({ required_error: REQUIRED_ERROR })
  .trim()
  .refine((cnpj) => isValidCNPJ(cnpj), { message: REQUIRED_CNPJ });

export const cpfSchema = z
  .string({ required_error: REQUIRED_ERROR })
  .trim()
  .refine((cpf) => isValidCPF(cpf), { message: REQUIRED_CPF });

export const rgSchema = z
  .string({ required_error: REQUIRED_ERROR })
  .trim()
  .length(8, { message: REQUIRED_RG });

export const emailSchema = z
  .string({ required_error: REQUIRED_ERROR })
  .trim()
  .email({ message: REQUIRED_EMAIL });

export const mustTrueBooleanSchema = z.literal<boolean>(true, {
  invalid_type_error: REQUIRED_TRUE,
  required_error: REQUIRED_TRUE,
});

export const multipleOption = z
  .object({
    label: z.string(),
    value: z.string(),
  })
  .array()
  .min(1, { message: REQUIRED_MULTIPLE_OPTION });

export const optionSchema = z.object(
  {
    label: z.string(),
    value: z.string(),
  },
  { required_error: REQUIRED_OPTION, invalid_type_error: REQUIRED_OPTION },
);

export const textFieldSchema = z
  .string({ required_error: REQUIRED_ERROR })
  .trim()
  .min(1, { message: REQUIRED_ERROR });
