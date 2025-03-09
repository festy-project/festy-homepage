export const fadeMotion = {
  initial: { opacity: 0 },
  animate: (duration: number) => ({ opacity: 1, transition: { duration: duration } }),
  exit: { opacity: 0 },
};

export const fadeMotionBottomToTop = {
  animate: () => ({
    y: 0,
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.5 },
    delay: 1,
  }),
  opacity: {
    opacity: 0.6,
  },
};

export const fadeMotionTopToBottomList = {
  initial: { y: '-20px', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.3 },
    delay: 1,
  },
};
