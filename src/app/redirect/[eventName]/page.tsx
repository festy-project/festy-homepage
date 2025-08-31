import type { Metadata } from 'next';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { getSharedTimetable } from '@/apis/services/shared-timetable';
import type { MyTimetable } from '@/models/event';
import RedirectContent from './components/RedirectContent';

type Props = {
  searchParams: Promise<{ 'share-id'?: string }>;
};

async function getSharedTimetableData(sharedTimetableId: string): Promise<MyTimetable | null> {
  try {
    const response = await getSharedTimetable({ sharedTimetableId });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch shared timetable:', error);
    return null;
  }
}

export async function generateMetadata({  searchParams }: Props): Promise<Metadata> {
  const { ['share-id']: eventId } = await searchParams;

 

  const sharedTimetable = await getSharedTimetableData(eventId || '');

  // Build OG meta from shared timetable data
  const eventName = sharedTimetable ? sharedTimetable.eventName : '공유된 타임테이블';
  const timetableName = sharedTimetable ? sharedTimetable.name : '공유된 타임테이블';
  const dayStr = sharedTimetable ? `Day ${sharedTimetable.eventDay.eventDayNumber}` : undefined;
  const dateStr = sharedTimetable
    ? format(new Date(sharedTimetable.eventDay.eventDate), 'yyyy.MM.dd(eee)', { locale: ko })
    : undefined;


    const searchparams = {
      header: (eventName),
      title: (timetableName),
      day: dayStr ? (dayStr) : '',
      date: dateStr ? (dateStr) : '',
    }
  return {
    title: sharedTimetable ? `${sharedTimetable.name} - Festy` : '공유된 타임테이블 - Festy',
    description: sharedTimetable
      ? `${sharedTimetable.name} 타임테이블을 Festy 앱에서 확인하세요.`
      : 'Festy에서 공유된 타임테이블을 확인하세요.',
    openGraph: {
      title: sharedTimetable ? `${sharedTimetable.name} - Festy` : '공유된 타임테이블 - Festy',
      description:
        sharedTimetable
          ? `${sharedTimetable.name} 타임테이블을 Festy 앱에서 확인하세요.`
          : 'Festy에서 공유된 타임테이블을 확인하세요.',
      
      images: [
        {
          url: `https://festy.app/api/og?${new URLSearchParams(searchparams).toString()}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function RedirectPage({ searchParams }: Props) {
  const { ['share-id']: eventIdRaw } = await searchParams;
  const eventId = eventIdRaw || null;
  const sharedTimetable = eventId ? await getSharedTimetableData(eventId) : null;

  return <RedirectContent eventId={eventId} sharedTimetable={sharedTimetable} />;
}
