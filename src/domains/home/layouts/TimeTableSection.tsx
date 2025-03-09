import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { textBottomToTop } from '../../../animations/textTransition/bottomToTop';

import TimeTableCard from '@/components/TimeTableCard';
import { timeTableData } from '../../../mocks/timeTableData';

import { Container, ContainerInner, Description, Title } from './styled';
import * as Styled from './TimeTableSection.styled';
import TimeTable from '@/assets/TimeTable';

interface TimeTableSectionProps {
  stack: number;
}

const TimeTableSection = ({ stack }: TimeTableSectionProps) => {
  //change stack 4 ~ 6 to 0.5 ~ 1
  const percentage = stack > 4 ? (stack - 4) / 3 : 0;
  const opacityPercentage = stack > 5.5 ? (stack - 5.5) / 2 : 0;
  const timeLinePercentage = stack > 5 ? (stack - 5) / 2 : 0;
  //reverse percentage
  const reversePercentage = 1 - opacityPercentage > 0.4 ? 1 - opacityPercentage : 0.4;

  let accumulatedIndex = 0;
  return (
    <Container>
      <ContainerInner>
        <Styled.TimeTableContainer
          style={{
            opacity: reversePercentage,
          }}
        >
          <Styled.TimeTableWrapper>
            <TimeTable
              stack={stack}
              reversePercentage={reversePercentage}
              timeLinePercentage={timeLinePercentage}
            />
          </Styled.TimeTableWrapper>
        </Styled.TimeTableContainer>
        <Styled.TimeTableContainer
          layoutId={'timeTable'}
          style={{
            opacity: reversePercentage,
          }}
        >
          <motion.div animate={stack > 4 ? 'animate' : 'initial'} exit={'exit'}>
            <Styled.TimeTableCardSectionContainer>
              {timeTableData.map((data, groupIndex) => {
                return (
                  <Styled.TimeTableCardSection key={`day${groupIndex}`}>
                    {data.map((data, itemIndex) => {
                      const index = accumulatedIndex;
                      accumulatedIndex += 1;
                      return (
                        <TimeTableCard
                          marginTop={data.marginTop}
                          key={`card${itemIndex}`}
                          height={data.height}
                          width={400}
                          title={data.title}
                          content={data.content}
                          type={data.type}
                          percentage={percentage}
                          index={index}
                        />
                      );
                    })}
                  </Styled.TimeTableCardSection>
                );
              })}
            </Styled.TimeTableCardSectionContainer>
          </motion.div>
        </Styled.TimeTableContainer>
        <Styled.DescriptionContainer>
          <AnimatePresence>
            {stack > 5.5 && (
              <Styled.Description
                variants={textBottomToTop}
                initial={'initial'}
                animate={'animate'}
                exit={'exit'}
              >
                <Title>
                  복잡한 타임테이블을
                  <br /> 한 눈에
                </Title>
                <Description>
                  공연이 어느 시점인지 궁금한 당신을 위해 제공되는 실시간 타임라인은 덤.
                  <br />
                  동시에 진행되는 공연이 몇 개든 상관없이 페스티로 한 번에 확인할 수 있어요.
                </Description>
              </Styled.Description>
            )}
          </AnimatePresence>
        </Styled.DescriptionContainer>
      </ContainerInner>
    </Container>
  );
};

export default TimeTableSection;
