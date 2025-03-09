export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface FetchOptions extends Omit<RequestInit, 'body'> {
  body?: any;
  timeout?: number;
  retries?: number;
  params?: Record<string, string | number | boolean>;
  next?: RequestInit['next'];
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

export interface RequestInterceptor {
  onRequest?: (options: FetchOptions) => FetchOptions | Promise<FetchOptions>;
  onRequestError?: (error: unknown) => Promise<unknown>;
}

export interface ResponseInterceptor {
  onResponse?: (response: Response) => Promise<any>;
  onResponseError?: (error: unknown) => Promise<unknown>;
}

export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
  retries?: number;
  requestInterceptors?: RequestInterceptor[];
  responseInterceptors?: ResponseInterceptor[];
}

export interface FetchClient {
  get: <T = unknown>(url: string, options?: FetchOptions) => Promise<T>;
  post: <T = unknown>(url: string, options?: FetchOptions) => Promise<T>;
  put: <T = unknown>(url: string, options?: FetchOptions) => Promise<T>;
  patch: <T = unknown>(url: string, options?: FetchOptions) => Promise<T>;
  delete: <T = unknown>(url: string, options?: FetchOptions) => Promise<T>;
}

export type ResponseType<T> = {
  success: boolean;
  data: T;
};
