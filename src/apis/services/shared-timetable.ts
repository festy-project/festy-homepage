import { apiClient } from '@/apis/http-client';
import type { FetchOptions } from '@/types/fetch';
import type { SharedTimetableRequest, SharedTimetableResponse } from '@/models/event';

export const getSharedTimetable = async (
  { sharedTimetableId }: SharedTimetableRequest,
  options?: FetchOptions,
) => {
  return apiClient.get<SharedTimetableResponse>(`/shared-timetables/${sharedTimetableId}`, options);
};
