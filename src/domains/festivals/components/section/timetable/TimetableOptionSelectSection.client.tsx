'use client';
import React from 'react';
import Select from '@/components/Select';
import { useTimetableOption } from '@/domains/festivals/components/section/timetable/TimetableOptionContext';
import type { EventDay } from '@/models/event';

type Props = {
  days: EventDay[];

  stages: string[];
};

function TimetableOptionSelectSection({ days, stages }: Props) {
  const { options, setOptions } = useTimetableOption();

  const handleStageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((prev) => ({ ...prev, stage: e.target.value }));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions((prev) => ({ ...prev, day: e.target.value }));
  };

  return (
    <div className="flex flex-row gap-4">
      <Select className="w-fit" value={options?.day} onChange={handleDayChange}>
        {days.map((day) => (
          <option key={day.id} className="text-black" value={day.id}>
            Day {day.eventDayNumber}
          </option>
        ))}
      </Select>
      <Select className="w-fit" value={options?.stage} onChange={handleStageChange}>
        {stages.map((stage) => (
          <option key={stage} className="text-black" value={stage}>
            {stage}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default TimetableOptionSelectSection;
