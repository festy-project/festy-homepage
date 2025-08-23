export type EventDay = {
  id: string;
  eventDayNumber: number; // min: 1
  eventDate: string; // ISO date format
};

export type Event = {
  id: string;
  eventName: string;
  eventType: 'Festival' | 'Party';
  thumbnail: string;
  socialMedia: string;
  tickets: string;
  location: string;
  latitude: number;
  longitude: number;
  startDate: string;
  endDate: string;
  followers: number;
  followed: boolean;
  dates: EventDay[];
};

export type GetLineupRequest = {
  eventId: string;
  days?: number;
  limit?: number;
  offset?: number;
};

export type Artist = {
  id: string;
  artistName: string;
  profileImage?: string;
  youtubeUrl?: string;
  soundcloudUrl?: string;
  spotifyUrl?: string;
  livesetVideo?: string;
  popularity?: number; // min: 0
};

export type Lineup = {
  artist: Artist | Artist[];
  day?: number;
};

export type FlatLineup = {
  artist: Artist;
  day?: number; // min: 1, cxan be null if not available
};

type PagingElement = {
  limit: number;
  offset: number;
};

type Paging = {
  previous?: PagingElement;
  next?: PagingElement;
};

export type LineupResponse = {
  success: boolean;
  data: {
    count: number;
    results: Lineup[];
    paging: Paging;
  };
};

export type ArtistWithGenres = {
  id: string;
  artistName: string;
  profileImage?: string;
  youtubeUrl?: string;
  soundcloudUrl?: string;
  spotifyUrl?: string;
  popularity?: number; // min: 0
  genres: string[];
};

export type Timeline = {
  id: string;
  name: string;
  startTime: string; // ISO datetime format
  endTime: string; // ISO datetime format
  artists: ArtistWithGenres[];
  types: string[]; // e.g., LIVE, Q-DANCE, etc.
};

export type Timetable = {
  stage: string;
  timetable: Timeline[];
};

export type TimeTableRequest = {
  eventDateId: string;
};

// 공유된 타임테이블 관련 타입들
export type EventDayWithParticipation = EventDay & {
  participated: boolean | null; // 로그인 되지 않은 경우 null
};

export type StageName = string;

export type SubscribedTimeline = {
  stageName: StageName;
  timeline: Timeline;
};

export type MyTimetable = {
  id: string;
  name: string;
  eventDay: EventDayWithParticipation;
  subscribedTimelines: SubscribedTimeline[];
};

export type SharedTimetableResponse = {
  success: boolean;
  data: MyTimetable;
};

export type SharedTimetableRequest = {
  sharedTimetableId: string;
};
