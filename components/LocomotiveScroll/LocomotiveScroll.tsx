import { createContext, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash-es';
import {
  type LocomotiveScrollContextProps,
  type LocomotiveScrollProviderProps,
  type ScrollProps,
} from './';
import useResizeObserver, { type ObservedSize } from 'use-resize-observer';

export const LocomotiveScrollContext =
  createContext<LocomotiveScrollContextProps>({
    isReady: false,
    scroll: null,
  });

export const LocomotiveScrollProvider = ({
  children,
  containerRef,
  location,
  onLocationChange,
  onUpdate,
  options,
  watch,
}: LocomotiveScrollProviderProps) => {
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef<ScrollProps | null>(null);
  const [{ height }, setSize] = useState<ObservedSize>({
    height: undefined,
    width: undefined,
  });
  useResizeObserver({
    onResize: useMemo(() => debounce(setSize, 100), []),
    ref: containerRef,
  });

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        const dataScrollContainer = document.querySelector(
          '[data-s-container]',
        ) as HTMLElement;

        LocomotiveScrollRef.current = new LocomotiveScroll({
          el: dataScrollContainer ?? undefined,
          ...options,
        }) as ScrollProps;

        setIsReady(true); // Re-render the context
      } catch (error) {
        throw Error(`LocomotiveScroll: ${error}`);
      }
    })();

    return () => {
      LocomotiveScrollRef.current?.destroy();
      setIsReady(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () => {
      if (!LocomotiveScrollRef.current) {
        return;
      }

      LocomotiveScrollRef.current.update();

      if (onUpdate) {
        onUpdate(LocomotiveScrollRef.current);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    watch ? [...watch, height] : [height],
  );

  useEffect(() => {
    if (!LocomotiveScrollRef.current || !location) {
      return;
    }

    LocomotiveScrollRef.current.update();

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <LocomotiveScrollContext.Provider
      value={{
        isReady,
        scroll: LocomotiveScrollRef.current,
      }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
