import type { MetadataRoute } from 'next';
import { apiClient } from '@/apis/http-client';
import type { ResponseType } from '@/types/fetch';


interface Festival {
  id: string;
  eventName: string;
  startDate: string;
  endDate: string;
  [key: string]: any;
}



async function getAllFestivals(): Promise<Festival[]> {
  try {
    
    const response = await apiClient.get<ResponseType<{results: Festival[]}>>('/events', {
      params: {
        orderBy: 'date',
        sort: 'desc',
        type: 'all',
        limit: 999,
        offset: 0
      },
      next: { revalidate: 3600 } // 1시간마다 재검증
    });
    
    if (response.success && response.data && response.data.results) {
      return response.data.results;
    }
    
    return [];
  } catch (error) {
    console.error('사이트맵 생성 중 축제 데이터를 가져오는데 실패했습니다:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://festy.app';
  
  // 기본 URL 목록
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/festivals`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ];

  try {
    // 축제 데이터 가져오기
    const festivals = await getAllFestivals();
    
    // 축제 페이지 URL 생성
    const festivalUrls = festivals.map((festival: Festival) => ({
      url: `${baseUrl}/festivals/${festival.id}`,
      lastModified: new Date(festival.startDate), // 축제 시작일을 마지막 수정일로 설정
      changeFrequency: 'daily' as const,
      priority: 0.8,
    }));

    return [...routes, ...festivalUrls];
  } catch (error) {
    console.error('사이트맵 생성 중 오류 발생:', error);
    return routes; // 오류 발생 시 기본 경로만 반환
  }
} 