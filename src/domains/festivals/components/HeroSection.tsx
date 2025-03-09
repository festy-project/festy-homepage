import Image from 'next/image';
import React from 'react';

interface HeroSectionProps {
  onScrollToContent: () => void;
  heroRef: React.RefObject<HTMLElement>;
}

const HeroSection = ({ onScrollToContent, heroRef }: HeroSectionProps) => {
  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] w-full"
      style={{ scrollSnapAlign: 'start' }}
    >
      <Image
        src="/images/main-bg.jpeg"
        alt="페스티벌 이미지"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#111117]" />
      <div className="absolute right-4 bottom-16 left-4 z-20 text-white">
        <p className="text-grey-200 mb-2 text-sm">매번 줄어진 정보 찾기 어려다면?</p>
        <h1 className="mb-2 text-3xl font-bold">이번 월디페,</h1>
        <h2 className="mb-6 text-2xl font-bold">페스티가 쉽게 알려줄게!</h2>
        <button
          className="bg-lavender-500 rounded-lg px-4 py-2 text-white"
          onClick={onScrollToContent}
        >
          페스티 플러그인
        </button>
      </div>

      {/* 아래로 스크롤 버튼 */}
      <div
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={onScrollToContent}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
