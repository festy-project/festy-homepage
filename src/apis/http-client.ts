import { authInterceptor } from '@/apis/fetch';
import { responseInterceptor } from '@/apis/auth.interceptor';
import { createHttpClient } from '@/apis/response.interceptor';

export const apiClient = createHttpClient({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://stage-api.festy.app',
  timeout: 5000,
  retries: 3,
  requestInterceptors: [authInterceptor],
  responseInterceptors: [responseInterceptor],
});
