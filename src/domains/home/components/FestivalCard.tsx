import React from 'react';

import Image from 'next/legacy/image';

import styled from '@emotion/styled';

import Place from '../../../assets/icons/Place';
import { Txt } from '@/components/Txt';

const Container = styled.div`
  display: flex;
  width: 200px;
  height: fit-content;
  flex-direction: column;
  gap: 12px;
`;
const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const PlaceBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

interface FestivalCardProps {
  card: 'S2O' | 'DLDK' | 'WDJF' | 'UltraKorea';
}

const FestivalMock = {
  S2O: {
    image: (
      <Image
        src={'/images/S2O.png'}
        alt={'festival-image'}
        width={200}
        height={200}
        objectFit={'cover'}
        style={{ userSelect: 'none', borderRadius: '12px' }}
      />
    ),
    place: '서울랜드',
    title: 'S2O Korea Songkran Music Festival 2022',
    date: '7/9 (토) ~ 7/10 (일)',
  },
  DLDK: {
    image: (
      <Image
        src={'/images/DLDK.png'}
        alt={'festival-image'}
        width={200}
        height={200}
        objectFit={'cover'}
        style={{ userSelect: 'none', borderRadius: '12px' }}
      />
    ),
    place: '서울랜드',
    title: 'Don’t Let Daddy Know Korea 2023',
    date: '6/2 (금) ~ 6/4 (일)',
  },
  WDJF: {
    image: (
      <Image
        src={'/images/WDJF.png'}
        alt={'festival-image'}
        width={200}
        height={200}
        objectFit={'cover'}
        style={{ userSelect: 'none', borderRadius: '12px' }}
      />
    ),
    place: '부산 시네마 센터',
    title: 'World DJ Festival 2022',
    date: '5/1 (월)',
  },
  UltraKorea: {
    image: (
      <Image
        src={'/images/Ultra.png'}
        alt={'festival-image'}
        width={200}
        height={200}
        objectFit={'cover'}
        style={{ userSelect: 'none', borderRadius: '12px' }}
      />
    ),
    place: '잠실 종합운동장',
    title: 'Ultra Music Festival Korea 2022',
    date: '9/24 (금) ~ 9/25 (일)',
  },
};

const FestivalCard = ({ card }: FestivalCardProps) => {
  const festival = FestivalMock[card];
  return (
    <Container>
      {festival.image}
      <InformationBox>
        <PlaceBox>
          <Place />
          <Txt fontSize={'labelM'} fontWeight={'regular'} color={'lavender600'}>
            {festival.place}
          </Txt>
        </PlaceBox>
        <Txt
          fontSize={'textS'}
          fontWeight={'semiBold'}
          color={'white'}
          wordBreak={'break-all'}
          as={'span'}
        >
          {festival.title}
        </Txt>
        <Txt fontSize={'labelM'} fontWeight={'regular'} color={'grey500'}>
          {festival.date}
        </Txt>
      </InformationBox>
    </Container>
  );
};

export default FestivalCard;
