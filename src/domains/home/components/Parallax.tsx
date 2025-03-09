import type { ReactElement } from 'react';
import React, { Fragment, useRef } from 'react';

import type { MotionValue } from 'framer-motion';
import {
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';

import * as Styled from './ParallaxText.styled';

interface ParallaxProps {
  children: ReactElement;
  baseVelocity: number;
  scrollY?: MotionValue<number>;
}
export function Parallax({ children, baseVelocity = 100, scrollY: initialScrollY }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(initialScrollY ? initialScrollY : scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * children length에 따라 변경
   * ex: childrne 4개 100/4 = 25
   * wrap min, max gap이 25가 되어야함.
   */

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const repeatChildren = new Array(4).fill(children);

  return (
    <Styled.ParallaxBox>
      <Styled.ParallaxScrollBox style={{ x }}>
        {repeatChildren.map((children, index) => (
          <Fragment key={'children' + index}>{children}</Fragment>
        ))}
      </Styled.ParallaxScrollBox>
    </Styled.ParallaxBox>
  );
}
