import Image from 'next/legacy/image';
import type { Artist } from '@/models/event';
import React from 'react';

const ArtistCard = ({ artist }: { artist: Artist }) => {
  return (
    <div className="relative h-[120px] overflow-hidden rounded-[6px]">
      {artist.profileImage && (
        <Image
          alt={artist.artistName}
          objectFit="cover"
          width={370}
          height={190}
          src={artist.profileImage}
          style={{
            width: '100%',
          }}
        />
      )}
      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-black to-transparent p-[12px]">
        <span className="absolute bottom-[12px] left-[12px]">{artist.artistName}</span>
      </div>
    </div>
  );
};

export default ArtistCard;
