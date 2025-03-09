import React from 'react';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/legacy/image';

import { textBottomToTop } from '../../../animations/textTransition/bottomToTop';
import AppStoreButton from '@/components/AppStoreButton';
import PlayStoreButton from '@/components/PlayStoreButton';

import * as Styled from './DownloadSection.styled';
import { Container, Description, Title } from './styled';

interface DownloadSectionProps {
  stack: number;
}
const DownloadSection = ({ stack }: DownloadSectionProps) => {
  return (
    <Container>
      <Styled.BackgroundImageWrapper>
        <Image
          style={{
            width: '100%',
            height: '100%',
          }}
          layout="fill"
          objectFit="cover"
          alt={'background-image'}
          src={'/images/downloadSectionBackground.png'}
        />
      </Styled.BackgroundImageWrapper>
      <Styled.LayoutContentContainer>
        <Styled.DescriptionContainer>
          <AnimatePresence>
            {stack > 6 && (
              <Styled.Description
                variants={textBottomToTop}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >
                <Title>페스티벌과 파티에 유용한 페스티</Title>
                <Description>
                  추후 더욱 업그레이드 될 커뮤니티 등 다양한 기능들을
                  <br />
                  페스티벌 덕후들이 모여서 만들고 있어요.
                  <br />
                  페스티와 함께 여러분의 축제를 즐겨보세요!
                </Description>
                <Styled.ButtonSection>
                  <AppStoreButton />
                  <PlayStoreButton />
                </Styled.ButtonSection>
              </Styled.Description>
            )}
          </AnimatePresence>
        </Styled.DescriptionContainer>
      </Styled.LayoutContentContainer>
    </Container>
  );
};

export default DownloadSection;
