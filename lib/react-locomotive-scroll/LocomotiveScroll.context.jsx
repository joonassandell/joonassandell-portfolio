import { createContext, useEffect, useRef, useState } from 'react';

export const LocomotiveScrollContext = createContext({
  scroll: null,
  isReady: false,
});

export function LocomotiveScrollProvider({
  children,
  options,
  watch,
  onUpdate,
  location,
  onLocationChange,
}) {
  const [isReady, setIsReady] = useState(false);
  const LocomotiveScrollRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = // await import('./loconative-scroll')
          (await import('./../loconative-scroll/loconative-scroll')).default;

        LocomotiveScrollRef.current = new LocomotiveScroll({
          ...options,
        });

        setIsReady(true); // Re-render the context
      } catch (error) {
        throw Error(`react-locomotive-scroll: ${error}`);
      }
    })();

    return () => {
      LocomotiveScrollRef.current?.destroy();
      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (!LocomotiveScrollRef.current) {
      return;
    }

    LocomotiveScrollRef.current.update();

    if (onUpdate) {
      onUpdate(LocomotiveScrollRef.current);
    }
  }, [...watch]);

  useEffect(() => {
    if (!LocomotiveScrollRef.current || !location) {
      return;
    }

    LocomotiveScrollRef.current.update();

    if (onLocationChange) {
      onLocationChange(LocomotiveScrollRef.current);
    }
  }, [location]);

  return (
    <LocomotiveScrollContext.Provider
      value={{ scroll: LocomotiveScrollRef.current, isReady }}
    >
      {children}
    </LocomotiveScrollContext.Provider>
  );
}

LocomotiveScrollContext.displayName = 'LocomotiveScrollContext';
LocomotiveScrollProvider.displayName = 'LocomotiveScrollProvider';
