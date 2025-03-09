'use client';
import React from 'react';
import Accordion from '@/components/Accordian';
import type { Lineup } from '@/models/event';
import ArtistCard from '@/domains/festivals/components/section/headliner/ArtistCard';
import { fadeMotion } from '@/animations/fadeinout/fadeInOut';
import { motion } from 'framer-motion';

const HeadlinerSectionAccordionClient = ({ artists }: { artists: Lineup[] }) => {
  return (
    <Accordion
      renderTrigger={(isOpen, setIsOpen) => (
        <button
          className="text-label-m text-grey-200 mt-[14px] flex h-[33px] w-full flex-row items-center justify-center gap-1"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? '라인업 접기' : '전체 라인업 보기'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
          >
            <g clipPath="url(#clip0_11135_84)">
              <path
                d="M11.375 5.75L7 10.125L2.625 5.75"
                stroke="#5F5F82"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_11135_84">
                <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    >
      <motion.section
        variants={fadeMotion}
        initial={'initial'}
        animate={'animate'}
        exit={'exit'}
        custom={0.5}
        className="grid grid-cols-2 gap-1"
      >
        {artists.map(({ artist }) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </motion.section>
    </Accordion>
  );
};

export default HeadlinerSectionAccordionClient;
