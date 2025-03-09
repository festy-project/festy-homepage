import React from 'react';
import { getFestivalLineups } from '@/apis/services/event';
import ArtistCard from '@/domains/festivals/components/section/headliner/ArtistCard';
import HeadlinerSectionAccordionClient from '@/domains/festivals/components/section/headliner/HeadlinerSectionAccordion.client';
import { Condition } from '@/utils';
import type { Artist, FlatLineup } from '@/models/event';

type HeadlinerSectionProps = {
  festivalId: string;
};

const HeadlinerSection = async ({ festivalId }: HeadlinerSectionProps) => {
  const data = await getFestivalLineups({ eventId: festivalId, limit: 999 }, {});
  const artists = data.data.results ?? [];

  const flattenedArtists = artists
    .flatMap((artist) => artist)
    .map(({ artist }) => artist) as Artist[];

  const sortedArtistsByPopularity = flattenedArtists.sort(
    (a, b) => (b?.popularity ?? 0) - (a?.popularity ?? 0),
  );

  const headliners = sortedArtistsByPopularity.slice(0, 8);
  const restArtists = sortedArtistsByPopularity.slice(8);

  return (
    <Condition
      expression={artists.length > 0}
      then={
        <div className="flex flex-col">
          <section className="grid grid-cols-2 gap-1">
            {headliners.map((artist, idx) => (
              <ArtistCard key={`${artist.id}-${idx}`} artist={artist} />
            ))}
          </section>
          <HeadlinerSectionAccordionClient artists={restArtists} />
        </div>
      }
    />
  );
};

export default HeadlinerSection;
