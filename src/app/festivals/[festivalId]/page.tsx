import React, { Suspense } from 'react';
import type { PageProps } from '@/types/PageProps';
import FestivalInfoCard from '@/domains/festivals/components/section/FestivalInfoCard';
import FestivalInfoHeader from '@/domains/festivals/components/section/FestivalInfoHeader';
import { getFestival, getFestivalTimeTable } from '@/apis/services/event';
import HeadlinerSection from '@/domains/festivals/components/section/headliner/HeadlinerSection.server';
import Instagram from '@/assets/icons/Instagram';
import Ticket from '@/assets/icons/Ticket';
import Link from 'next/link';
import { Condition } from '@/utils';

import { TimetableOptionProvider } from '@/domains/festivals/components/section/timetable/TimetableOptionContext';
import TimetableOptionSelectSection from '@/domains/festivals/components/section/timetable/TimetableOptionSelectSection.client';
import TimetableViewSection from '@/domains/festivals/components/section/timetable/TimetableViewSection.client';
import type { Metadata, ResolvingMetadata } from 'next';


type Props = {
  params: Promise<{ festivalId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const { festivalId } = await params;

  
  const festivalResponse = await getFestival(festivalId, {
    cache: 'no-store',
  });
  const festival = festivalResponse.data;


  const previousImages = (await parent).openGraph?.images || [];



  return {
    title: `${festival.eventName} 쪽집개 | Festy`,
    description: `${festival.eventName} 정보를 한눈에! Festy에서 최신 정보를 확인하세요!`,
    openGraph: {
      title: `${festival.eventName} 쪽집개 | Festy`,
      description: `${festival.eventName} 정보를 한눈에! Festy에서 최신 정보를 확인하세요!`,
      images: festival.thumbnail ? [festival.thumbnail, ...previousImages] : previousImages,
      type: 'website',
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${festival.eventName} 쪽집개 | Festy`,
      description: `${festival.eventName} 정보를 한눈에! Festy에서 최신 정보를 확인하세요!`,
      images: festival.thumbnail ? [festival.thumbnail] : [],
    },
  };
}

async function Page({ params }: PageProps<{ festivalId: string; day: string; stage: string }>) {
  const { festivalId } = await params;

  const festivalResponse = await getFestival(festivalId, {
    cache: 'no-store',
  });
  const festival = festivalResponse.data;

  const timetableResponse = await getFestivalTimeTable(
    {
      eventDateId: festival.dates[0].id,
    },
    { cache: 'no-store' },
  );
  const timetable = timetableResponse.data;
  const stageList = timetable.map((t) => t.stage);

  return (
    <div className="flex h-fit w-full flex-col gap-10 bg-linear-to-bl from-[#111117] to-[#270F67] px-4 pt-10 pb-[84px]">
      <FestivalInfoHeader
        title={festival.eventName}
        location={festival.location}
        startDate={festival.startDate}
        endDate={festival.endDate}
      />
      <hr className="bg-white pt-[1px] opacity-40" />
      <div className="flex flex-col gap-[20px]">
        <FestivalInfoCard title="Link">
          <div className={'flex flex-row gap-4'}>
            <Condition
              expression={Boolean(festival.socialMedia)}
              then={
                <Link href={festival.socialMedia} className={'flex items-center gap-1'}>
                  <Instagram /> <span className={'label2-regular-12'}>인스타그램</span>
                </Link>
              }
            />
            <Condition
              expression={Boolean(festival.socialMedia)}
              then={
                <Link href={festival.socialMedia} className={'flex items-center gap-1'}>
                  <Ticket /> <span className={'label2-regular-12'}>티켓 링크</span>
                </Link>
              }
            />
          </div>
        </FestivalInfoCard>
        <hr className="bg-white pt-[1px] opacity-10" />
        <FestivalInfoCard title="이번 헤드라이너는?">
          <Suspense>
            <HeadlinerSection festivalId={festivalId} />
          </Suspense>
        </FestivalInfoCard>
        <hr className="bg-white pt-[1px] opacity-10" />
        <TimetableOptionProvider
          defaultOptions={{
            day: festival.dates[0].id,
            stage: stageList[0],
          }}
        >
          <FestivalInfoCard
            title="타임테이블"
            rightSlot={
              <Suspense>
                <TimetableOptionSelectSection days={festival.dates} stages={stageList} />
              </Suspense>
            }
          >
            <TimetableViewSection defaultTimetable={timetable} />
          </FestivalInfoCard>
        </TimetableOptionProvider>
        <hr className="bg-white pt-[1px] opacity-10" />
        <FestivalInfoCard title="올해도 기대중인 커뮤니티">
          <div>123123</div>
        </FestivalInfoCard>
        <hr className="bg-white pt-[1px] opacity-10" />
        <FestivalInfoCard title={`${festival.eventName} 최신정보`}>
          <div>123123</div>
        </FestivalInfoCard>
        <hr className="bg-white pt-[1px] opacity-10" />
        <FestivalInfoCard
          title="찾아가기 어려웠던 스테이지,
Festy로 찾아가세요"
        >
          <div>123123</div>
        </FestivalInfoCard>
      </div>
    </div>
  );
}

export default Page;
