'use client';
import React, { useState } from 'react';

import { LayoutGroup, useMotionValueEvent, useScroll } from 'framer-motion';

import FestyDownloadFooter from '@/components/FestyDownloadFooter';
import Layout from '@/components/Layout';
import { StackContainer } from '@/components/StackContainer';
import HomeSection from '@/domains/home/layouts/HomeSection';
import { LayoutContainer } from '../styles/Home.styled';
import AboutSection from '@/domains/home/layouts/AboutSection';
import TimeTableSection from '@/domains/home/layouts/TimeTableSection';
import DownloadSection from '@/domains/home/layouts/DownloadSection';
import Footer from '@/components/Footer';

import '../styles/index.css';

const HomePage = () => {
  const [stack, setStack] = useState(0);
  const container = React.useRef<HTMLElement>(null);
  const { scrollY } = useScroll({ container: container });

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setStack(latest / window.innerHeight);
  });

  const prevScrollY = scrollY.getPrevious();

  const isScrollingUp = prevScrollY !== undefined ? scrollY.get() < prevScrollY : false;

  return (
    <Layout stack={stack} isScrollingUp={isScrollingUp}>
      <LayoutContainer ref={container}>
        <LayoutGroup>
          <StackContainer stack={1}>
            <HomeSection />
          </StackContainer>
          <StackContainer stack={3}>
            <AboutSection stack={stack} scrollY={scrollY} />
          </StackContainer>
          <StackContainer stack={4}>
            <TimeTableSection stack={stack} />
          </StackContainer>
          <StackContainer stack={2}>
            <DownloadSection stack={stack} />
          </StackContainer>
          <FestyDownloadFooter stack={stack} />
          <Footer />
        </LayoutGroup>
      </LayoutContainer>
    </Layout>
  );
};
export default HomePage;
