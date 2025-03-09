'use client';
import { useEffect } from 'react';

export type UseAddEventListener = (
  target: EventTarget,
  type: string,
  listener: EventListener,
  options?: boolean | AddEventListenerOptions,
) => void;
export const useAddEventListener: UseAddEventListener = (target, type, listener, options) => {
  useEffect(() => {
    target?.addEventListener(type, listener, options);

    return () => {
      target?.removeEventListener(type, listener, options);
    };
  }, [target, type, listener, options]);
};
