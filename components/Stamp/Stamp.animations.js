import { TRANS_PRIMARY, TRANS_PRIMARY_FAST, TRANS_TAP } from '@/lib/config';

export const stampVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 1.05,
    transition: TRANS_TAP,
  },
  transition: TRANS_PRIMARY_FAST,
};

export const svgVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const overlayVariants = {
  animate: {
    scale: [0, 10],
    transition: {
      ...TRANS_PRIMARY,
    },
  },
};
