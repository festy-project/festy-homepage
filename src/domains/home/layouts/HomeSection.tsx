import React from 'react';

import { Txt } from '@/components/Txt';
import * as Styled from './HomeSection.styled';
import Image from 'next/legacy/image';

const HomeSection = () => {
  return (
    <>
      <Styled.BackgroundImageWrapper>
        <Image
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          layout="fill"
          objectFit="contain"
          alt={'background-image'}
          src={'/images/homeBackground.png'}
        />
      </Styled.BackgroundImageWrapper>
      <Styled.LayoutContentBox
        initial={{
          opacity: 1,
          scale: 1,
        }}
      >
        <Styled.LayoutContent>
          <Styled.SubTitle>
            <Txt color={'white'} fontSize={'titleS'} fontWeight={'regular'}>
              당신의 놀라운 축제를 위해
            </Txt>
          </Styled.SubTitle>
          <Styled.MainTitle>
            <Txt color={'white'} fontSize={'titleXl'} fontWeight={'regular'}>
              Make your Joy
            </Txt>
            <Image alt={'Festy'} src={'/logos/Festy.svg'} width={350} height={75} />
          </Styled.MainTitle>
        </Styled.LayoutContent>
      </Styled.LayoutContentBox>
      <Styled.ArrowWrapper>
        <Image alt={'arrow'} src={'/logos/downArrow.svg'} layout="fixed" width={32} height={32} />
      </Styled.ArrowWrapper>
    </>
  );
};

export default HomeSection;
