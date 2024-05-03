import { type Variants } from 'framer-motion';

/* =======================================
 * Animations
 * =======================================
 *
 * easeInOutExpo: [0.87, 0, 0.13, 1]
 * easeInOutQuart: [0.76, 0, 0.24, 1]
 *
 * @link https://www.framer.com/motion/easing-functions
 */

export const EASE = [0.68, 0, 0.1, 1];
export const EASE_CSS = 'cubic-bezier(0.68, 0, 0.1, 1)';
export const EASE_SECONDARY = [0.87, 0, 0.13, 1];
export const EASE_SECONDARY_CSS = 'cubic-bezier(0.87, 0, 0.13, 1)';
export const EASE_TERTIARY = [0.4, 0, 0.28, 1];

export const TRANS_PRIMARY = {
  duration: 1.3,
  ease: EASE,
};

export const TRANS_PRIMARY_FAST = {
  duration: 0.6,
  ease: EASE,
};

export const TRANS_PRIMARY_FASTEST = {
  duration: 0.3,
  ease: EASE,
};

export const TRANS_SECONDARY = {
  duration: 1,
  ease: EASE_SECONDARY,
};

export const TRANS_SECONDARY_FAST = {
  duration: 0.6,
  ease: EASE_SECONDARY,
};

export const TRANS_SECONDARY_FASTEST = {
  duration: 0.3,
  ease: EASE_SECONDARY,
};

export const TRANS_TERTIARY = {
  duration: 1.3,
  ease: EASE_TERTIARY,
};

export const TRANS_TERTIARY_FAST = {
  duration: 1,
  ease: EASE_TERTIARY,
};

export const TRANS_TERTIARY_FASTEST = {
  duration: 0.3,
  ease: EASE_TERTIARY,
};

export const TRANS_TEMPLATE = {
  duration: 1.2,
  ease: [0.76, 0, 0.18, 1],
};

export const TRANS_TAP = {
  duration: 0.1,
};

/* =======================================
 * Various
 * ======================================= */

export const SCROLL_TO_DURATION = 200;
export const SCROLL_SPEED = 1.5;
export const SLOW_NETWORK_DELAY = 1000;

/* =======================================
 * Variants
 * ======================================= */

export const FADE_OUT_VARIANTS: Variants = {
  animate: {
    opacity: 0,
    transition: TRANS_PRIMARY_FAST,
  },
};

export const JUMP_FIX_VARIANTS: Variants = {
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: TRANS_TEMPLATE.duration + 0.1,
      ease: 'linear',
    },
  },
  initial: {
    opacity: 0,
  },
};

export const TEXT_VARIANTS: Variants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: {
      ...TRANS_TERTIARY_FAST,
      ...(delay && { delay }),
    },
  }),
  initial: {
    opacity: 0,
    skewY: 10,
    y: '5rem',
  },
};

/* =======================================
 * Sitemap, content, links...
 * ======================================= */

export const CONTENT = {
  defaultNavTitle: 'Selected works',
};

export const SITEMAP = {
  primary: [
    {
      color: 'var(--biocode-primary)',
      id: 'biocode',
      images: './public/biocode/*.{jpg,png}',
      navTitle: 'Biocode',
      title: 'Biocode',
      themeColor: '#00081F',
      url: '/biocode',
      year: new Date().getFullYear(),
    },
    {
      color: 'var(--oras-primary)',
      id: 'oras',
      images: './public/oras/*.{jpg,png}',
      navTitle: 'Oras',
      title: 'Oras',
      themeColor: 'black',
      url: '/oras',
      year: 2016,
    },
    {
      color: 'var(--mediasignal-primary)',
      id: 'mediasignal',
      images: './public/mediasignal/*.{jpg,png}',
      navTitle: 'Mediasignal',
      title: 'Mediasignal',
      themeColor: 'black',
      url: '/mediasignal',
      year: 2019,
    },
    {
      color: 'var(--sandbox-primary)',
      id: 'sandbox',
      images: './public/sandbox/*.{jpg,png}',
      navTitle: 'Sandbox',
      title: 'Sandbox',
      themeColor: 'black',
      url: '/sandbox',
      year: `2010—${new Date().getFullYear()}`,
    },
    {
      color: 'var(--moreWork-primary)',
      id: 'more-work',
      images: './public/more-work/*.{jpg,png}',
      navTitle: 'More work',
      title: 'More work',
      themeColor: 'black',
      url: '/more-work',
      year: `2010—${new Date().getFullYear()}`,
    },
    {
      color: 'var(--archive-primary)',
      hidden: true,
      id: 'archive',
      images: './public/archive/*.{jpg,png}',
      navTitle: 'Work archive',
      title: 'Archive',
      themeColor: 'black',
      url: '/archive',
      year: '2010—2016',
    },
    {
      color: 'var(--white)',
      id: 'home',
      navTitle: 'Browse all',
      url: '/',
      year: `2010—${new Date().getFullYear()}`,
    },
  ],
  secondary: [
    {
      title: 'About',
      navTitle: 'About',
      id: 'about',
      type: 'secondary',
      url: '/about',
    },
    {
      title: 'Contact',
      navTitle: 'Contact',
      id: 'contact',
      type: 'secondary',
      url: 'mailto:me@joonassandell.com?subject=Hi Joonas 👋&body=Hi %0D%0A%0D%0A write something to me...',
    },
  ],
};

export const LINKS = {
  social: [
    {
      title: 'Dribbble',
      id: 'dribbble',
      url: 'https://dribbble.com/joonassandell',
    },
    {
      title: 'Twitter',
      id: 'twitter',
      url: 'https://twitter.com/joonassandell',
    },
    {
      title: 'Instagram',
      id: 'instagram',
      url: 'https://www.instagram.com/mode.apart',
    },
    {
      title: 'LinkedIn',
      id: 'linkedin',
      url: 'https://www.linkedin.com/in/joonassandell',
    },
    {
      title: 'Github',
      id: 'github',
      url: 'https://github.com/joonassandell',
    },
    {
      title: 'SoundCloud',
      id: 'soundcloud',
      url: 'https://soundcloud.com/modeapart',
    },
  ],
};

/* =======================================
 * Media queries
 * ======================================= */

export const MQ = {
  '3xs': '(min-width: 320px)',
  '2xs': '(min-width: 360px)',
  xs: '(min-width: 480px)',
  s: '(min-width: 600px)',
  m: '(min-width: 768px)',
  mMax: '(max-width: 767px)',
  ml: '(min-width: 900px)',
  l: '(min-width: 1024px)',
  xl: '(min-width: 1200px)',
  '2xl': '(min-width: 1280px)',
  '3xl': '(min-width: 1528px)',
  '4xl': '(min-width: 1680px)',
  '5xl': '(min-width: 1920px)',
  '6xl': '(min-width: 2560px)',
  '7xl': '(min-width: 3840px)',
};