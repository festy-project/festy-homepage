import React, { useCallback, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import styled from '@emotion/styled';

import { fadeMotion } from '../animations/fadeinout/fadeInOut';

import { Button } from './DownloadButton';

const Container = styled(motion.footer)`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  bottom: 0;
  z-index: 100;
  user-select: none;
  pointer-events: auto;
`;

interface Props {
  stack: number;
}
const FestyDownloadFooter = ({ stack }: Props) => {
  const [userAgent, setUserAgent] = useState<string>('');

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);
  const getDownloadUrl = useCallback(() => {
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      return 'https://apps.apple.com/kr/app/id1668793166';
    } else if (isAndroid) {
      return 'https://apps.apple.com/kr/app/festy-%ED%8E%98%EC%8A%A4%ED%8B%B0-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%ED%83%80%EC%9E%84%ED%85%8C%EC%9D%B4%EB%B8%94/id1668793166';
    }
    // 데스크톱이나 기타 기기의 경우 iOS 앱스토어로 기본 설정
    return 'https://apps.apple.com/kr/app/festy-%ED%8E%98%EC%8A%A4%ED%8B%B0-%ED%8E%98%EC%8A%A4%ED%8B%B0%EB%B2%8C-%ED%83%80%EC%9E%84%ED%85%8C%EC%9D%B4%EB%B8%94/id1668793166';
  }, [userAgent]);
  return (
    <AnimatePresence>
      {stack > 0.5 && stack < 8 && (
        <Container
          variants={fadeMotion}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          key={'downloadFooter'}
          custom={0.5}
        >
          <Button as={'a'} href={getDownloadUrl()}>
            페스티 다운로드하기
          </Button>
        </Container>
      )}
    </AnimatePresence>
  );
};

export default FestyDownloadFooter;
