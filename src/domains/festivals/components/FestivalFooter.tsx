import React from 'react';

const FestivalFooter = () => {
  return (
    <footer className="fixed bottom-0 flex h-16 w-full items-center justify-center gap-3 bg-linear-to-t from-[#1A1A23] from-0% to-[rgba(39,15,103,0)] to-100% px-4">
      <button className="text-text-s bg-grey-500 flex-1 rounded-[50px] px-3 py-2.5 font-semibold text-white">
        공유하기
      </button>
      <button className="text-text-s bg-lavender-600 flex-1 rounded-[50px] px-3 py-2.5 font-semibold text-white">
        페스티 다운로드
      </button>
    </footer>
  );
};

export default FestivalFooter;
