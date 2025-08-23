import type { Metadata } from 'next';
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

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { ['share-id']: eventId } = await searchParams;

  if (!eventId) {
    return {
      title: '공유된 타임테이블 - Festy',
      description: 'Festy에서 공유된 타임테이블을 확인하세요.',
    };
  }

  const sharedTimetable = await getSharedTimetableData(eventId);

  return {
    title: sharedTimetable ? `${sharedTimetable.name} - Festy` : '공유된 타임테이블 - Festy',
    description: sharedTimetable
      ? `${sharedTimetable.name} 타임테이블을 Festy 앱에서 확인하세요.`
      : 'Festy에서 공유된 타임테이블을 확인하세요.',
  };
}

export default async function RedirectPage({ searchParams }: Props) {
  const { ['share-id']: eventIdRaw } = await searchParams;
  const eventId = eventIdRaw || null;
  const sharedTimetable = eventId ? await getSharedTimetableData(eventId) : null;

  return <RedirectContent eventId={eventId} sharedTimetable={sharedTimetable} />;
}
