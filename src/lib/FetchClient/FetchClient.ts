/* eslint-disable @typescript-eslint/no-explicit-any */

import { API_URL } from '@/config';
import { appendSearchParams } from '@/utils/functions/appendSearchParams';
import { parseBody } from '@/utils/parser/parseBody';

import { HttpError } from './HttpError';
import {
  FetchOptions,
  FetchOptionsWithExtendedBody,
  RequestInterceptor,
  ResponseInterceptor,
} from './types';

export class FetchClient {
  private baseUrl: string;
  private defaultConfig: FetchOptions;
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];

  constructor(defaultConfig?: FetchOptions) {
    this.baseUrl = API_URL;
    this.defaultConfig = defaultConfig as FetchOptions;
  }

  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor);
  }

  async fetchWithHandling(url: string, options: FetchOptions = this.defaultConfig): Promise<any> {
    url = `${this.baseUrl}${url}`;
    options = { ...this.defaultConfig, ...options };

    for (const interceptor of this.requestInterceptors) {
      options = (await interceptor(options)) || options;
    }

    if (options.params) {
      url = appendSearchParams(url, options.params);
    }

    try {
      const response = await fetch(url, options);
      let interceptedResponse = response;

      for (const interceptor of this.responseInterceptors) {
        interceptedResponse =
          (await interceptor(interceptedResponse, options)) || interceptedResponse;
      }

      if (!interceptedResponse.ok) {
        const errorData = await interceptedResponse.json();
        throw new HttpError(
          interceptedResponse.status,
          errorData.message || interceptedResponse.statusText,
          errorData,
        );
      }

      const contentType = response.headers.get('content-type');
      const invalidBody = !contentType || !contentType.includes('application/json');

      if (invalidBody || response.status === 204) return;

      return await interceptedResponse.json();
    } catch (error) {
      if (error instanceof TypeError) {
        console.error('Network error:', error.message);
      } else if (error instanceof HttpError) {
        console.error(`HTTP error! status: ${error.status}, message: ${error.message}`);
        console.error('Error data:', error.data);
      } else {
        console.error('Unexpected error:', error);
      }
      throw error;
    }
  }

  async get(url: string, options: FetchOptions = {}) {
    return this.fetchWithHandling(url, { ...options, method: 'GET' });
  }

  async post(url: string, options: FetchOptionsWithExtendedBody) {
    return this.fetchWithHandling(url, {
      ...options,
      method: 'POST',
      body: parseBody(options),
    });
  }

  async patch(url: string, options: FetchOptionsWithExtendedBody) {
    return this.fetchWithHandling(url, {
      ...options,
      method: 'PATCH',
      body: parseBody(options),
    });
  }

  async put(url: string, options: FetchOptionsWithExtendedBody) {
    return this.fetchWithHandling(url, {
      ...options,
      method: 'PUT',
      body: parseBody(options),
    });
  }

  async delete(url: string, options: FetchOptions = {}) {
    return this.fetchWithHandling(url, { ...options, method: 'DELETE' });
  }
}
