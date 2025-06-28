'use client';

import { useEffect, useState, useCallback, use } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PageProps {
  params: Promise<{
    eventName: string;
    eventId: string;
  }>;
}

export default function RedirectPage({ params }: PageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [userAgent, setUserAgent] = useState<string>('');
  const { eventName, eventId } = use(params);

  useEffect(() => {
    setUserAgent(navigator.userAgent);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getDownloadUrl = useCallback(() => {
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      return 'https://apps.apple.com/kr/app/id1668793166';
    } else if (isAndroid) {
      return 'https://play.google.com/store/apps/details?id=app.festy.mobile.android';
    }
    // 데스크톱이나 기타 기기의 경우 iOS 앱스토어로 기본 설정
    return 'https://apps.apple.com/kr/app/id1668793166';
  }, [userAgent]);

  const tryDeepLink = useCallback(() => {
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);
    const isMobile = isIOS || isAndroid;

    if (!isMobile) {
      return; // 데스크톱에서는 다운로드 페이지만 표시
    }

    // 딥링크 시도
    const deepLinkUrl = `festy://event/${eventId}`;
    const fallbackDelay = 2500;

    // 앱이 설치되어 있지 않을 때의 fallback
    const fallbackTimer = setTimeout(() => {
      window.location.href = getDownloadUrl();
    }, fallbackDelay);

    // 딥링크 시도
    try {
      window.location.href = deepLinkUrl;

      // 앱이 성공적으로 열리면 fallback 타이머 취소
      const handleVisibilityChange = () => {
        if (document.hidden) {
          clearTimeout(fallbackTimer);
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);

      // 페이지를 떠날 때도 타이머 취소
      const handleBeforeUnload = () => {
        clearTimeout(fallbackTimer);
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      // 클린업
      setTimeout(() => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      }, fallbackDelay + 500);
    } catch (error) {
      console.error('Deep link failed:', error);
      clearTimeout(fallbackTimer);

      // 즉시 앱스토어로 리다이렉트
      window.location.href = getDownloadUrl();
    }
  }, [userAgent, eventId, getDownloadUrl]);

  useEffect(() => {
    if (!isLoading && userAgent) {
      tryDeepLink();
    }
  }, [isLoading, userAgent, tryDeepLink]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative inset-0 flex min-h-screen flex-col items-center justify-center bg-black p-5 text-center">
      <motion.div variants={itemVariants} className="absolute top-5 left-5">
        <img src="/logos/FestyLogo.png" alt="Festy" className="h-4 w-full" />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center"
      >
        <AnimatePresence>
          {isLoading ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-sm text-white/60"
            >
              타임테이블 정보를 불러오는 중...
            </motion.p>
          ) : (
            <>
              <motion.p
                variants={itemVariants}
                className="mb-10 text-2xl leading-relaxed font-bold text-white"
              >
                {eventName} 타임테이블 확인하기
              </motion.p>

              <motion.div variants={itemVariants} className="flex w-full max-w-xs justify-center">
                <motion.a
                  href={getDownloadUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lavender-600 border-lavender-600 flex w-[200px] items-center justify-center rounded-2xl border px-4 py-3 text-base font-semibold text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  다음
                </motion.a>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.p
        variants={itemVariants}
        onClick={() => (window.location.href = getDownloadUrl())}
        className="absolute bottom-8 text-sm text-white/60"
      >
        앱이 자동으로 열리지 않나요?
      </motion.p>
    </div>
  );
}
