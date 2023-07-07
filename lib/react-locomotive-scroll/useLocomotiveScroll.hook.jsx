import { useContext } from 'react';
import { LocomotiveScrollContext } from './LocomotiveScroll.context';

export function useLocomotiveScroll() {
  const context = useContext(LocomotiveScrollContext);
  return context;
}

useLocomotiveScroll.displayName = 'useLocomotiveScroll';
