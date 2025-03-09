'use client';
import React, { useState, useRef } from 'react';
import FestivalFooter from '@/domains/festivals/components/FestivalFooter';
import HeroSection from '@/domains/festivals/components/HeroSection';
import { useScrollSnap } from '@/domains/festivals/hooks/useScrollSnap';

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [passedHero, setPassedHero] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const contentSectionRef = useRef<HTMLElement>(null);

  useScrollSnap({
    containerRef,
    heroRef: heroSectionRef,
    contentRef: contentSectionRef,
    onPassHero: setPassedHero,
  });

  const scrollToContent = () => {
    contentSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex h-dvh w-full justify-center">
      <div className="relative flex h-dvh w-full max-w-[500px] flex-col">
        {/* 스크롤 컨테이너 - JS 스크롤 스냅 사용 */}
        <div ref={containerRef} className="h-full w-full overflow-y-auto">
          <HeroSection onScrollToContent={scrollToContent} heroRef={heroSectionRef} />

          {/* 본문 콘텐츠 */}
          <section
            ref={contentSectionRef}
            className="w-full bg-[#111117]"
            style={{ minHeight: 'calc(100vh - 60px)' }}
          >
            {children}
          </section>
        </div>

        {/* Fixed Footer */}
        <div
          className={`absolute right-0 bottom-0 left-0 transition-opacity duration-300 ${passedHero ? 'opacity-100' : 'opacity-0'}`}
        >
          <FestivalFooter />
        </div>
      </div>
    </div>
  );
};

export default Layout;
