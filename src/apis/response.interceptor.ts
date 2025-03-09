import type {
  HttpClientConfig,
  RequestMethod,
  FetchOptions,
  FetchClient,
  RequestInterceptor,
  ResponseInterceptor,
} from '@/types/fetch';

export class HttpClient implements FetchClient {
  private config: HttpClientConfig;
  private requestInterceptors: RequestInterceptor[];
  private responseInterceptors: ResponseInterceptor[];

  constructor(config: HttpClientConfig) {
    this.config = config;
    this.requestInterceptors = config.requestInterceptors || [];
    this.responseInterceptors = config.responseInterceptors || [];
  }

  get<T = unknown>(url: string, options?: FetchOptions): Promise<T> {
    return this.request('GET', url, options);
  }

  post<T = unknown>(url: string, options?: FetchOptions): Promise<T> {
    return this.request('POST', url, options);
  }

  put<T = unknown>(url: string, options?: FetchOptions): Promise<T> {
    return this.request('PUT', url, options);
  }

  patch<T = unknown>(url: string, options?: FetchOptions): Promise<T> {
    return this.request('PATCH', url, options);
  }

  delete<T = unknown>(url: string, options?: FetchOptions): Promise<T> {
    return this.request('DELETE', url, options);
  }

  private async runRequestInterceptors(options: FetchOptions): Promise<FetchOptions> {
    let modifiedOptions = { ...options };

    for (const interceptor of this.requestInterceptors) {
      if (interceptor.onRequest) {
        modifiedOptions = await interceptor.onRequest(modifiedOptions);
      }
    }

    return modifiedOptions;
  }

  private async runResponseInterceptors(response: Response): Promise<any> {
    let modifiedResponse = response;

    for (const interceptor of this.responseInterceptors) {
      if (interceptor.onResponse) {
        modifiedResponse = await interceptor.onResponse(modifiedResponse);
      }
    }

    return modifiedResponse;
  }

  private async request<T = unknown>(
    method: RequestMethod,
    url: string,
    options: FetchOptions = {},
  ): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(
      () => controller.abort(),
      options?.timeout || this.config.timeout || 5000,
    );

    try {
      let finalUrl = url;
      if (options?.params) {
        const queryParams = new URLSearchParams();
        Object.entries(options.params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            queryParams.append(key, String(value));
          }
        });
        
        const queryString = queryParams.toString();
        if (queryString) {
          finalUrl = `${url}${url.includes('?') ? '&' : '?'}${queryString}`;
        }
      }

      const modifiedOptions = await this.runRequestInterceptors({
        ...options,
        method,
        signal: controller.signal,
      });

      const fullUrl = `${this.config.baseURL}${finalUrl}`;
      const response = await fetch(fullUrl, modifiedOptions);
      clearTimeout(timeoutId);

      return this.runResponseInterceptors(response);
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }
}

export const createHttpClient = (config: HttpClientConfig): FetchClient => {
  return new HttpClient(config);
};
