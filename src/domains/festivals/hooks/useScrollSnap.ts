import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

interface UseScrollSnapProps {
  containerRef: RefObject<HTMLDivElement>;
  heroRef: RefObject<HTMLElement>;
  contentRef: RefObject<HTMLElement>;
  onPassHero: (passed: boolean) => void;
}

export const useScrollSnap = ({
  containerRef,
  heroRef,
  contentRef,
  onPassHero,
}: UseScrollSnapProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let startY = 0;
    let lastY = 0;
    let lastTime = 0;
    let velocity = 0;
    let animationFrame: number;
    let isDragging = false;
    let isSnapping = false; // 스냅 진행 중인지 여부

    // 현재 보고 있는 섹션 확인 (0: 히어로 섹션, 1: 콘텐츠 섹션)
    const getCurrentSection = () => {
      const scrollTop = container.scrollTop;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      const threshold = heroHeight / 2;

      return scrollTop < threshold ? 0 : 1;
    };

    // 스크롤 이벤트 - 히어로 섹션 통과 여부만 감지
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const heroHeight = heroRef.current?.offsetHeight || 0;

      // 히어로 섹션을 지나쳤는지 확인
      if (scrollTop >= heroHeight - 50) {
        onPassHero(true);
      } else {
        onPassHero(false);
      }
    };

    // 특정 섹션으로 스냅
    const snapToSection = (sectionIndex: number) => {
      if (isSnapping) {
        return;
      }

      isSnapping = true;
      setIsScrolling(true);

      const target = sectionIndex === 0 ? 0 : heroRef.current?.offsetHeight || 0;

      // 애니메이션 지속 시간 증가 (400ms -> 800ms)
      smoothScrollTo(container, target, 800).then(() => {
        isSnapping = false;
        setIsScrolling(false);
      });
    };

    // 터치 시작 이벤트
    const handleTouchStart = (e: TouchEvent | MouseEvent) => {
      if (isSnapping) {
        return;
      } // 스냅 중일 때는 새 입력 무시

      cancelAnimationFrame(animationFrame);
      isSnapping = false;
      isDragging = true;
      setIsScrolling(true);

      if ('touches' in e) {
        startY = e.touches[0].clientY;
      } else {
        startY = e.clientY;
      }

      lastY = startY;
      lastTime = Date.now();
      velocity = 0;
    };

    // 터치 이동 이벤트
    const handleTouchMove = (e: TouchEvent | MouseEvent) => {
      if (!isDragging || isSnapping) {
        return;
      }

      let clientY: number;

      if ('touches' in e) {
        clientY = e.touches[0].clientY;
      } else {
        clientY = e.clientY;
      }

      const deltaY = clientY - lastY;
      const now = Date.now();
      const elapsed = now - lastTime;

      // 속도 계산 (픽셀/밀리초)
      velocity = deltaY / (elapsed || 1);

      lastY = clientY;
      lastTime = now;
    };

    // 터치 종료 이벤트 (입력이 끝났을 때만 스냅)
    const handleTouchEnd = () => {
      if (!isDragging || isSnapping) {
        return;
      }

      isDragging = false;

      // 현재 섹션 확인
      const currentSection = getCurrentSection();

      // 속도 방향에 따라 스냅 결정 (플릭 임계값 낮춤: 0.2 -> 0.15)
      const isFlickDown = velocity < -0.15; // 빠르게 아래로 플릭
      const isFlickUp = velocity > 0.15; // 빠르게 위로 플릭

      if (isFlickDown && currentSection === 0) {
        // 아래로 빠르게 플릭하면 콘텐츠 섹션으로
        snapToSection(1);
      } else if (isFlickUp && currentSection === 1) {
        // 위로 빠르게 플릭하면 히어로 섹션으로
        snapToSection(0);
      } else {
        // 플릭이 아니면 가까운 섹션으로 스냅
        snapToNearestSection();
      }
    };

    // 가장 가까운 섹션으로 스냅
    const snapToNearestSection = () => {
      const scrollTop = container.scrollTop;
      const heroHeight = heroRef.current?.offsetHeight || 0;

      // 히어로 섹션의 절반 이상을 지났으면 다음 섹션으로, 아니면 히어로 섹션으로
      if (scrollTop > heroHeight / 2) {
        snapToSection(1);
      } else {
        snapToSection(0);
      }
    };

    // 부드러운 스크롤 함수 (Promise 반환)
    const smoothScrollTo = (
      element: HTMLElement,
      target: number,
      duration: number,
    ): Promise<void> => {
      return new Promise((resolve) => {
        const start = element.scrollTop;
        const distance = target - start;
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // 더 부드러운 이징 함수 적용
          const easing = 1 - Math.pow(1 - progress, 3);

          element.scrollTop = start + distance * easing;

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animateScroll);
          } else {
            resolve();
          }
        };

        animationFrame = requestAnimationFrame(animateScroll);
      });
    };

    // 이벤트 리스너 등록
    container.addEventListener('scroll', handleScroll);
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    // 마우스 이벤트도 지원
    container.addEventListener('mousedown', handleTouchStart);
    container.addEventListener('mousemove', handleTouchMove);
    container.addEventListener('mouseup', handleTouchEnd);
    container.addEventListener('mouseleave', handleTouchEnd);

    // 휠 이벤트 처리 (한번에 섹션 이동)
    const handleWheel = (e: WheelEvent) => {
      if (isSnapping) {
        e.preventDefault();
        return;
      }

      // 휠을 빠르게 움직였을 때만 반응
      if (Math.abs(e.deltaY) > 10) {
        e.preventDefault();

        const currentSection = getCurrentSection();

        if (e.deltaY > 0 && currentSection === 0) {
          // 아래로 휠 -> 콘텐츠 섹션으로
          snapToSection(1);
        } else if (e.deltaY < 0 && currentSection === 1) {
          // 위로 휠 -> 히어로 섹션으로
          snapToSection(0);
        }
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    // 클린업 함수
    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);

      container.removeEventListener('mousedown', handleTouchStart);
      container.removeEventListener('mousemove', handleTouchMove);
      container.removeEventListener('mouseup', handleTouchEnd);
      container.removeEventListener('mouseleave', handleTouchEnd);

      container.removeEventListener('wheel', handleWheel);

      cancelAnimationFrame(animationFrame);
    };
  }, [containerRef, heroRef, contentRef, onPassHero]);

  return { isScrolling };
};
