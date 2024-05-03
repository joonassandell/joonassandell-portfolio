import { m } from 'framer-motion';
import { SCROLL_SPEED, JUMP_FIX_VARIANTS } from '@/lib/config';
import { getSitemap } from '@/lib/utility';
import {
  Hero,
  HeroContent,
  figureBgVariants,
  type HeroProps,
} from '@/components/Hero';
import { dropVariants, dropVariants2, dropVariants3 } from './Hero.animations';
import Image from 'next/image';
import heroImage from '@/public/oras/hero/joonassandell-oras-hero.png';
import drop from '@/public/oras/hero/joonassandell-oras-drop.png';

export const OrasHero = ({ onClick, ...props }: HeroProps) => {
  const { url, id, title, year, themeColor } = getSitemap('oras');
  const dropDelay = 0.75;

  return (
    <Hero
      className="Hero--oras"
      heading={`${title} — ${year}`}
      href={url}
      id={id}
      onClick={onClick}
      themeColor={themeColor}
      {...props}
    >
      {({
        noTransition,
        transitionInitial,
        transitionPre,
        transitionStartOrDefault,
        templateTransition,
      }) => {
        return (
          <>
            <div className="wrap">
              <div className="grid -gap:l">
                <div
                  className="
                    Hero-figure grid-col
                    grid-col:7 -start:6
                    grid-col:6@s -start:7@s
                    grid-col:4@l -start:6@l
                  "
                >
                  <m.div
                    className="Hero-figure-figure"
                    {...(transitionPre && {
                      animate: 'animate',
                      initial: templateTransition && 'initial',
                      variants: JUMP_FIX_VARIANTS,
                    })}
                  >
                    <figure
                      data-s
                      data-s-target={`[data-s-id=${id}]`}
                      data-s-prevent
                      data-s-speed={-SCROLL_SPEED}
                    >
                      <Image
                        alt="Oras faucet"
                        draggable="false"
                        priority
                        sizes="33vw"
                        src={heroImage}
                        quality={90}
                      />
                    </figure>
                  </m.div>
                  <m.div
                    className="Hero-figureBg Hero-figureBg--animate"
                    variants={figureBgVariants}
                  />
                  {transitionStartOrDefault && (
                    <m.div
                      className="Hero-drop Hero-drop--1"
                      {...(transitionInitial && {
                        animate: 'animate',
                        initial: 'initial',
                      })}
                      {...(noTransition && { initial: 'animate' })}
                      custom={{ delay: transitionInitial ? dropDelay : 0 }}
                      variants={dropVariants}
                    >
                      <Image
                        alt="Oras drop"
                        aria-hidden="true"
                        draggable="false"
                        priority
                        sizes="10vw"
                        src={drop}
                        quality={90}
                      />
                    </m.div>
                  )}
                </div>
                <HeroContent
                  className="grid-col grid-col:3 -start:10"
                  heading={title}
                  href={url}
                  onClick={onClick}
                  transitionPre={transitionPre}
                  role={['UI/UX design', 'Concept strategy', 'Web development']}
                />
              </div>
            </div>
            {transitionStartOrDefault && (
              <m.div
                className="Hero-drop Hero-drop--2"
                {...(transitionInitial && {
                  animate: 'animate',
                  initial: 'initial',
                })}
                {...(noTransition && { initial: 'animate' })}
                custom={{ delay: transitionInitial ? dropDelay : 0 }}
                variants={dropVariants2}
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  priority
                  sizes="10vw"
                  src={drop}
                  quality={90}
                />
              </m.div>
            )}
            <m.div
              className="Hero-drop Hero-drop--3"
              {...(transitionInitial && {
                animate: 'animate',
                initial: 'initial',
              })}
              {...(noTransition && { initial: 'animate' })}
              custom={{ delay: transitionInitial ? dropDelay : 0 }}
              variants={dropVariants3}
            >
              <div
                data-s
                data-s-delay="0.15"
                data-s-target={`[data-s-id=${id}]`}
                data-s-speed="1"
              >
                <Image
                  alt="Oras drop"
                  aria-hidden="true"
                  draggable="false"
                  priority
                  sizes="10vw"
                  src={drop}
                  quality={90}
                />
              </div>
            </m.div>
          </>
        );
      }}
    </Hero>
  );
};