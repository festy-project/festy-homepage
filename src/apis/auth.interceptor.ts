import type { ResponseInterceptor } from '@/types/fetch';

export const responseInterceptor: ResponseInterceptor = {
  onResponse: async (response) => {
    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || 'An error occurred',
        errors: data.errors,
      };
    }

    return data;
  },
  onResponseError: async (error) => {
    console.error('Response error:', error);
    throw error;
  },
};
