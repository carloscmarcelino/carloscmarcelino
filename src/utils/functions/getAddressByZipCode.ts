import { api } from '@/lib/FetchClient';

type ViaCepAddress = {
  bairro: string;
  cep: string;
  DDD: string;
  localidade: string;
  logradouro: string;
  uf: string;
};

/**
 * Obtém o endereço correspondente a um código postal (CEP) usando a API ViaCEP.
 *
 * @param {string} value - O código postal (CEP) que será consultado.
 *
 * @returns {Promise<ViaCepAddress | null>} - Uma promessa que resolve com o endereço obtido ou null em caso de erro ou CEP inválido.
 *
 * @example
 * // Exemplo de uso com async/await:
 * const cep = '01001-000';
 *
 * const fetchAddress = async (cep) => {
 *   const address = await getAddressByZipCode(cep);
 *
 *   if (address) {
 *    console.log(address);
 *   } else {
 *     console.log('Endereço não encontrado.');
 *   }
 * };
 *
 * fetchAddress(cep);
 */
export const getAddressByZipCode = async (value: string): Promise<ViaCepAddress | null> => {
  const cep = String(value).replace(/[^0-9]/g, '');

  if (cep.length !== 8) return null;

  try {
    const response = await api.unauthorized.get(`https://viacep.com.br/ws/${cep}/json`);

    return response.data;
  } catch (err) {
    return null;
  }
};
