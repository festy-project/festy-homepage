import React from 'react';

type InfoSectionProps = {
  title: React.ReactNode;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
};

const FestivalInfoCard = ({ title, children, rightSlot }: InfoSectionProps) => {
  return (
    <div className="flex h-fit w-full flex-col gap-4">
      <div className={'flex w-full flex-row items-center justify-between gap-4'}>
        <h2 className="text-text-m text-lavender-200 mx-1 my-0.5 font-semibold">{title}</h2>
        {rightSlot}
      </div>
      {children}
    </div>
  );
};

export default FestivalInfoCard;
