import { useLocomotiveScroll } from '@/lib/react-locomotive-scroll';
import { SCROLL_TO_DURATION } from './config';

export const useScrollTo = ({
  scrollLock = false,
  onCompleteDelay = 0,
  ...options
} = {}) => {
  const { scroll } = useLocomotiveScroll();

  const scrollTo = (el, onComplete) => {
    if (scroll) {
      if (scrollLock) scroll.stop();
      scroll.scrollTo(el, {
        duration: SCROLL_TO_DURATION,
        onComplete: () => {
          if (onComplete) {
            setTimeout(() => {
              onComplete();
            }, onCompleteDelay);
          }
        },
        ...options,
        lock: scrollLock || options.lock,
        force: scrollLock || options.force,
      });
    }
  };

  return scrollTo;
};
