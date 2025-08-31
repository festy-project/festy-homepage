import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://festy.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/api/og/*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 