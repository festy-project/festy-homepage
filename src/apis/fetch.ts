import type { RequestInterceptor } from '@/types/fetch';

export const authInterceptor: RequestInterceptor = {
  onRequest: async (options) => {
    const token =
      typeof window !== 'undefined' ? localStorage.getItem('token') : process.env.API_TOKEN;

    return {
      ...options,
      headers: {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  },
  onRequestError: async (error) => {
    console.error('Auth request error:', error);
    throw error;
  },
};
