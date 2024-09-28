/* eslint-disable @typescript-eslint/no-explicit-any */
export type FetchOptions<T extends Record<string, any> = Record<string, any>> = Omit<
  RequestInit,
  'headers'
> & {
  headers?: HeadersInit;
  params?: T & Record<string, unknown>;
};

export type FetchOptionsWithExtendedBody = Omit<FetchOptions, 'body'> & {
  body: Record<string, any>;
};

export type RequestInterceptor = (config: FetchOptions) => FetchOptions | Promise<FetchOptions>;

export type ResponseInterceptor = (
  response: Response,
  requestConfig: FetchOptions,
) => Response | Promise<Response>;
