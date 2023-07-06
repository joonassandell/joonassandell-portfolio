import { AnimatePresence, m, useIsPresent } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  overlayVariants,
  variantsWithTransition,
  variantsWithoutTransition,
} from './Template.animations';
import c from 'classnames';
import { useAppContext } from '@/components/App';
import { useLocomotiveScroll } from '@/lib/react-locomotive-scroll';
import { Footer } from '@/components/Footer';
import { camelCase } from 'lodash-es';

export const Template = ({ children, className, id }) => {
  const [animState, setAnimState] = useState(null);
  const { appState } = useAppContext();
  const { transition } = appState;
  const templateTransition = transition === 'template';
  const displayOverlay = animState === 'animExit' && templateTransition;
  const defaultTransition = transition && !templateTransition;
  const isPresent = useIsPresent();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (!isPresent) setAnimState('animExit');
    if (isPresent) setAnimState('animStart');
  }, [isPresent]);

  return (
    <m.div
      animate="animate"
      className={c('Template', `Template--${camelCase(id)}`, className, {
        'is-transition:exit': defaultTransition && animState === 'animExit',
        'is-transition:template': templateTransition,
        'is-transition:template:exit':
          templateTransition && animState === 'animExit',
      })}
      exit="exit"
      initial="initial"
      onAnimationStart={() => {
        if (animState === 'animStart' && templateTransition) {
          console.log('Template transition start:', id);
          if (scroll) scroll.stop();
        }
      }}
      {...(!templateTransition && {
        variants: variantsWithoutTransition,
        transition: variantsWithoutTransition.transition,
      })}
      {...(templateTransition && {
        variants: variantsWithTransition,
        transition: variantsWithTransition.transition,
      })}
    >
      <AnimatePresence>
        <div className="Template-inner" data-scroll-section>
          {children}
          <Footer />
        </div>
      </AnimatePresence>
      {displayOverlay && (
        <m.div
          animate="animate"
          className="Template-overlay"
          initial="initial"
          variants={overlayVariants}
        />
      )}
    </m.div>
  );
};
