import { useEffect } from 'react';

export const useGenerateVars = () => {
  const getVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.debug(document.documentElement.style.getPropertyValue('--vh'));
  };

  useEffect(() => {
    window.addEventListener('resize', getVh);
    window.addEventListener('touchend', getVh);
    return () => {
      window.removeEventListener('resize', getVh);
    };
  }, []);
  return null;
};
