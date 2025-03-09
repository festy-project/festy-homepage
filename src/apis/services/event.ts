import { apiClient } from '@/apis/http-client';
import type { FetchOptions, ResponseType } from '@/types/fetch';
import type {
  Event,
  GetLineupRequest,
  LineupResponse,
  Timetable,
  TimeTableRequest,
} from '@/models/event';

export const getFestival = async (festivalId: string, options?: FetchOptions) =>
  await apiClient.get<ResponseType<Event>>(`/events/${festivalId}`, options);

export const getFestivalLineups = async (
  { eventId, ...query }: GetLineupRequest,
  options?: FetchOptions,
) =>
  await apiClient.get<LineupResponse>(`/events/${eventId}/lineups`, {
    ...options,
    params: query,
  });

export const getFestivalTimeTable = async (
  { eventDateId }: TimeTableRequest,
  options?: FetchOptions,
) => {
  return apiClient.get<ResponseType<Timetable[]>>(`/events/${eventDateId}/timetable`, options);
};
