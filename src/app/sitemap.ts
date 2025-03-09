import type { MetadataRoute } from 'next';
import { apiClient } from '@/apis/http-client';

// 페스티벌 데이터 타입 정의
interface Festival {
  id: string;
  eventName: string;
  startDate: string;
  endDate: string;
  [key: string]: any;
}

// API 응답 타입 정의
interface ApiResponse {
  success: boolean;
  data: {
    results: Festival[];
    [key: string]: any;
  };
  [key: string]: any;
}

// 모든 축제 목록을 가져오는 함수
async function getAllFestivals(): Promise<Festival[]> {
  try {
    // apiClient를 사용하여 모든 페스티벌 목록을 가져옵니다
    const response = await apiClient.get<ApiResponse>('/events', {
      params: {
        orderBy: 'date',
        sort: 'desc',
        type: 'all',
        limit: 999,
        offset: 0
      },
      cache: 'no-store'
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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://festy.com';
  
  // 기본 URL 목록
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

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
} 