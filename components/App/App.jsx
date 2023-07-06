import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { isBrowser } from '@/lib/utility';
import { Splash } from '@/components/Splash';
import { Header } from '@/components/Header';
import { LocomotiveScrollProvider } from '@/lib/react-locomotive-scroll';
import { useRouter } from 'next/router';
import { LazyMotion, domAnimation } from 'framer-motion';
import { AppHead } from './';
import { Analytics } from '@vercel/analytics/react';

const DISABLE_LOADING = process.env.NEXT_PUBLIC_DISABLE_LOADING;

const AppContext = createContext({
  detect: {},
  html: isBrowser && document.documentElement,
  loading: DISABLE_LOADING ? false : true,
  loadingEnd: DISABLE_LOADING ? true : false,
  transition: false, // 'template', false, true
  transitionInitial: false,
});
let scrollOnUpdateOnce = false;

export const App = ({ Component, pageProps }) => {
  const appContext = useAppContext();
  const [appState, setAppState] = useState(appContext);
  const { html, loading, loadingEnd, transition } = appState;
  const { asPath, beforePopState, push } = useRouter();
  const [animationComplete, setAnimationComplete] = useState();
  const containerRef = useRef(null);

  /* ======
   * App set state functions
   * ====== */

  const setTransition = value => {
    setAppState(prevState => ({
      ...prevState,
      transition: value,
    }));
  };

  const setTransitionInitial = value => {
    setAppState(prevState => ({
      ...prevState,
      transitionInitial: value,
    }));
  };

  const setLoadingEnd = value => {
    setAppState(prevState => ({
      ...prevState,
      loadingEnd: value,
    }));
  };

  /* ======
   * Initialize stuff on load etc.
   * ====== */

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.info(
        `Made by me with Next.js, TypeScript, Rebirth and tears. 🥲`,
      );
    }

    (async () => {
      const { isWindows, isIphoneSafari, hasTouch } = await import(
        '@/lib/detect'
      );
      if (isWindows) html.classList.add('is-windows');
      if (isIphoneSafari) html.classList.add('is-iphoneSafari');

      setAppState(prevState => ({
        ...prevState,
        detect: {
          hasTouch,
          isWindows,
          isIphoneSafari,
        },
      }));
    })();

    const rootHeight = () =>
      html.style.setProperty('--vh', `${window.innerHeight}px`);
    window.addEventListener('resize', rootHeight);
    rootHeight();

    setAppState(prevState => ({
      ...prevState,
      loading: false,
    }));

    () => window.removeEventListener('resize', rootHeight);
  }, []);

  /* ======
   * Various
   * ====== */

  useEffect(() => {
    if (loadingEnd) html.classList.remove('is-loading');
  }, [loadingEnd]);

  useEffect(() => {
    if (transition) {
      html.classList.add('is-transition', 'is-transition:withDelay');
    }

    const hackClass = 'is-transition:template:withDelay';
    if (transition === 'template') html.classList.add(hackClass);

    if (!transition) {
      html.classList.remove('is-transition');
      setTimeout(() => html.classList.remove('is-transition:withDelay'), 300);
      setTimeout(() => html.classList.remove(hackClass), 300);
    }
  }, [transition]);

  /**
   * Set template transition by default when navigating back/forward
   */
  const [popStateTimeout, setPopStateTimeout] = useState(null);
  useEffect(() => {
    beforePopState(({ url, as }) => {
      popStateTimeout && clearTimeout(popStateTimeout);
      if (transition === 'template') {
        setPopStateTimeout(
          setTimeout(() => {
            setTransition('template');
            push(url, as, { scroll: false });
          }, 500),
        );
        return false;
      } else {
        setTransition('template');
        return true;
      }
    });
    return () => popStateTimeout && clearTimeout(popStateTimeout);
  }, [transition]);

  /**
   * Set initial transitions ready for animation (e.g. for Hero)
   */
  useEffect(() => {
    if (transition === 'template') setTransitionInitial(true);
  }, [transition]);

  return (
    <LazyMotion features={domAnimation} strict>
      <AppHead />
      <Analytics debug={false} />
      {!DISABLE_LOADING && (
        <Splash loading={loading} setLoadingEnd={setLoadingEnd} />
      )}
      <AppContext.Provider
        value={{
          appState,
          setLoadingEnd,
          setTransition,
          setTransitionInitial,
        }}
      >
        <LocomotiveScrollProvider
          containerRef={containerRef}
          options={{
            class: '@',
            draggingClass: 'is-drag',
            initClass: 'is-init',
            scrollbarClass: 'ScrollBar',
            scrollingClass: 'is-scroll',
            smartphone: {
              smooth: true,
            },
            smooth: true,
            smoothClass: 'is-smooth',
            tablet: {
              smooth: true,
            },
            touchMultiplier: 4,
          }}
          location={animationComplete}
          watch={[loadingEnd]}
          onLocationChange={scroll => {
            scroll.scroll.stop && scroll.start();
            scroll.scrollTo(0, { duration: 0, disableLerp: true });
            if (transition) setTransition(false);
          }}
          onUpdate={scroll => {
            if (!DISABLE_LOADING) {
              if (!scrollOnUpdateOnce && !loadingEnd) scroll.stop();
              if (!scrollOnUpdateOnce && loadingEnd) {
                scrollOnUpdateOnce = true;
                scroll.start();
              }
            }
          }}
        >
          <div className="App">
            <Header navTitle={pageProps.navTitle} />
            <main className="App-main" data-scroll-container ref={containerRef}>
              <AnimatePresence
                initial={false}
                onExitComplete={() => {
                  console.log('App animation complete');
                  setAnimationComplete(asPath);
                }}
              >
                <Component {...pageProps} key={asPath} />
              </AnimatePresence>
            </main>
          </div>
        </LocomotiveScrollProvider>
      </AppContext.Provider>
    </LazyMotion>
  );
};

export const useAppContext = () => useContext(AppContext);
