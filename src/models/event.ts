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
  day?: number; // min: 1, can be null if not available
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
