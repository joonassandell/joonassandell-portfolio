import { SCROLL_TO_DURATION, SCROLL_TO_EASE } from '@/lib/config';
import { useLenis } from '@studio-freight/react-lenis';
import type Lenis from '@studio-freight/lenis';

type LenisScrollToElement = Parameters<Lenis['scrollTo']>[0];
type LenisScrollToOptions = Parameters<Lenis['scrollTo']>[1];
type ScrollToOptions = {
  stopOnComplete?: boolean;
};

export const useScrollTo = ({
  stopOnComplete,
  ...options
}: LenisScrollToOptions & ScrollToOptions = {}) => {
  const lenis = useLenis();

  const scrollTo = (
    target: LenisScrollToElement,
    onComplete?: (lenis: Lenis) => void,
  ) => {
    lenis?.scrollTo(target, {
      duration: SCROLL_TO_DURATION,
      easing: SCROLL_TO_EASE,
      ...options,
      onComplete: e => {
        stopOnComplete && lenis.stop();
        onComplete && onComplete(e);
      },
    });
  };

  return scrollTo;
};
