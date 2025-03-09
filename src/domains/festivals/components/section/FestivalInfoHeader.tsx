import React from 'react';
import { format } from 'date-fns';

type InfoSectionProps = {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
};

const FestivalInfoHeader = ({ title, endDate, startDate, location }: InfoSectionProps) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <h1 className="text-title-s font-semibold">[{title}]</h1>
      <time className="text-label-m color-grey-300">
        {location} ・ {format(new Date(startDate), 'MM/dd(E)')} ~{' '}
        {format(new Date(endDate), 'MM/dd(E)')}
      </time>
    </div>
  );
};

export default FestivalInfoHeader;
