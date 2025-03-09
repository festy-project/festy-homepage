export const textList = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};
export const textBottomToTop = {
  initial: { y: '20px', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: { y: '-20px', opacity: 0 },
};
