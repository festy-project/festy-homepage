import React from 'react';

import type { MotionValue } from 'framer-motion';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Image from 'next/legacy/image';

import { fadeMotion } from '../../../animations/fadeinout/fadeInOut';
import { textBottomToTop } from '../../../animations/textTransition/bottomToTop';
import FestivalCard from '@/domains/home/components/FestivalCard';
import { Parallax } from '@/domains/home/components/Parallax';
import TabletMock from '@/domains/home/components/TabletMock';

import * as Styled from './AboutSection.styled';
import { Container, ContainerInner, Description, Title } from './styled';

interface AboutSectionProps {
  stack: number;
  scrollY: MotionValue<number>;
}
const AboutSection = ({ stack, scrollY }: AboutSectionProps) => {
  const festivalList = ['S2O', 'DLDK', 'WDJF', 'UltraKorea'] as const;

  return (
    <Container>
      <ContainerInner>
        <Styled.TextContainer>
          <Styled.DescriptionContainer>
            <LayoutGroup>
              <AnimatePresence>
                {1 < stack && stack < 4 && (
                  <>
                    <Styled.MobileWrapper
                      variants={textBottomToTop}
                      initial={'initial'}
                      whileInView={'animate'}
                      exit={'exit'}
                      key={'mobile-about'}
                    >
                      <Image
                        key={'mobile-about'}
                        src={'/images/mobileBackground.svg'}
                        alt={'mobile'}
                        style={{ userSelect: 'none' }}
                        width={308}
                        height={663}
                      />
                    </Styled.MobileWrapper>
                    <Styled.TabletWrapper
                      variants={textBottomToTop}
                      initial={'initial'}
                      whileInView={'animate'}
                      exit={'exit'}
                      key={'tablet'}
                    >
                      <TabletMock />
                    </Styled.TabletWrapper>
                    <Styled.ParallelWrapper
                      variants={fadeMotion}
                      initial={'initial'}
                      animate={'animate'}
                      exit={'exit'}
                      key={'festivalLists'}
                      custom={0.5}
                    >
                      <Parallax baseVelocity={2} scrollY={scrollY}>
                        <>
                          {festivalList.map((festival, index) => (
                            <FestivalCard key={index} card={festival} />
                          ))}
                        </>
                      </Parallax>
                    </Styled.ParallelWrapper>
                    <Styled.Description
                      variants={textBottomToTop}
                      initial={'initial'}
                      whileInView={'animate'}
                      exit={'exit'}
                      key={'description'}
                    >
                      <Title>모든 페스티벌이 여기에.</Title>
                      <Description>
                        새로운 소식부터 내 주변 파티까지 빠르게 새로운 소식부터 내 주변 파티까지
                        빠르게
                      </Description>
                    </Styled.Description>
                  </>
                )}
              </AnimatePresence>
            </LayoutGroup>
          </Styled.DescriptionContainer>
        </Styled.TextContainer>
      </ContainerInner>
    </Container>
  );
};

export default AboutSection;
