'use client';
import React, { useEffect, useState } from 'react';

import { useTimetableOption } from '@/domains/festivals/components/section/timetable/TimetableOptionContext';
import { format } from 'date-fns';
import { Condition } from '@/utils';
import type { Timetable } from '@/models/event';
import { getFestivalTimeTable } from '@/apis/services/event';

type TimetableViewSectionProps = {
  defaultTimetable: Timetable[];
};

const TimetableViewSection = ({ defaultTimetable }: TimetableViewSectionProps) => {
  const { options } = useTimetableOption();
  const [timetable, setTimetable] = useState<Timetable[]>(defaultTimetable);

  useEffect(() => {
    getFestivalTimeTable({ eventDateId: options.day })
      .then((response) => {
        setTimetable(response.data);
      })
      .catch((error) => {
        console.error('Error fetching timetable:', error);
      });
  }, [options.day]);

  const stageTimetable = timetable.find((t) => t.stage === options?.stage);
  const isTimetableExist = Boolean(stageTimetable && stageTimetable?.timetable.length > 0);
  return (
    <div>
      <Condition
        expression={isTimetableExist}
        then={
          <ul className={'flex flex-col gap-[14px]'}>
            {stageTimetable?.timetable.map((t) => (
              <li key={t.id} className={'flex flex-row items-center gap-[18px]'}>
                <time className={'body5-medium-14 text-grey-300 w-[85px]'}>
                  {format(new Date(t.startTime), 'HH:mm')} - {format(new Date(t.endTime), 'HH:mm')}
                </time>
                <hr className={'bg-grey-500 h-[18px] w-[1px] border-none'} />
                <Condition
                  expression={t.artists.length > 0}
                  then={
                    <span className={'body3-semi-bold-16'}>
                      {t.artists.map((artist) => artist.artistName)}
                    </span>
                  }
                  else={<span className={'body3-semi-bold-16'}>{t.name}</span>}
                />
              </li>
            ))}
          </ul>
        }
      />
    </div>
  );
};

export default TimetableViewSection;
