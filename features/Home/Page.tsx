import {
  BiocodeHero,
  MediasignalHero,
  MoreWorkHero,
  OrasHero,
  SandboxHero,
} from '@/features/Project';
import { FADE_OUT_VARIANTS } from '@/lib/config';
import { getSitemap } from '@/lib/utils';
import { Head } from '@/components/Head';
import { Heading } from '@/components/Heading';
import { Link } from '@/components/Link';
import { type LinkEvent } from '@/types';
import { m } from 'framer-motion';
import {
  Template,
  TemplateMain,
  type TemplateProps,
} from '@/components/Template';
import { useAppContext } from '@/components/App';
import {
  useLocomotiveScroll,
  useScrollTo,
} from '@/components/LocomotiveScroll';
import { useState } from 'react';

export const HomePage = ({ id }: { id: TemplateProps['id'] }) => {
  const about = getSitemap('about', 'secondary');
  const { setTransition, setTransitionInitial } = useAppContext();
  const [animation, setAnimation] = useState(false);
  const [themeColor, setThemeColor] = useState<string>();
  const [extraSpace, setExtraSpace] = useState(false);
  const [currentHero, setCurrentHero] = useState<string>();
  const scrollTo = useScrollTo({ scrollLock: true });
  const { scroll } = useLocomotiveScroll();

  const handleClick = (e: LinkEvent) => {
    if (!scroll) return;
    e.preventDefault();
    setTransition(true);
    setTransitionInitial(false);

    const el = e.currentTarget.closest('[data-id]') as HTMLElement;

    const needsExtraSpace = scroll.scroll.instance.limit.y < el?.offsetTop;
    if (needsExtraSpace) {
      setExtraSpace(true);
      scroll.update();
    }

    setThemeColor(el.dataset.themeColor);
    setCurrentHero(el.dataset.id);
    setTimeout(
      () => scrollTo(el, () => setAnimation(true)),
      needsExtraSpace ? 220 : 0,
    );
  };

  return (
    <Template className={extraSpace ? 'is-extraSpace' : ''} id={id}>
      <Head themeColor={themeColor} />
      <TemplateMain>
        <m.div
          animate={animation ? 'animate' : ''}
          className="Template-about"
          variants={FADE_OUT_VARIANTS}
        >
          <div className="wrap">
            <div className="Template-about-mobile" hidden>
              <Link href={about.url} orientation="vertical" underline>
                About me
              </Link>
            </div>
            <div className="Template-about-desktop">
              <Heading size={null} tag="h1">
                I'm a designer, creative developer and sometimes even a music
                producer from Helsinki, Finland. Read more{' '}
                <Link href={about.url} underline>
                  about me
                </Link>{' '}
                or just keep scrolling for selected works.
              </Heading>
            </div>
          </div>
        </m.div>
        <div className="Template-heros">
          <BiocodeHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'biocode' && animation}
          />
          <OrasHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'oras' && animation}
          />
          <MediasignalHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'mediasignal' && animation}
          />
          <SandboxHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'sandbox' && animation}
          />
          <MoreWorkHero
            onClick={handleClick}
            transition="pre"
            transitionStart={currentHero === 'more-work' && animation}
          />
        </div>
      </TemplateMain>
    </Template>
  );
};
