import { transPrimary, transSecondary, mobileExtraDelay } from '@/lib/config';

export const innerVariants = {
  // exit: mobile => ({
  //   scale: 0,
  //   // rotate: 180,
  //   skew: -45,
  //   transition: {
  //     ...transSecondary,
  //     ...(mobile && { delay: mobileExtraDelay }),
  //   },
  // }),
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
  exit: mobile => ({
    // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // bottom/right/left
    // clipPath: 'circle(100% at 50% 50%)',
    // scale: 2.5,
    scale: [0, 7],
    transition: {
      ...transPrimary,
      ...(mobile && { delay: mobileExtraDelay }),
    },
  }),
  // preTransition: {
  //   // clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', // bottom
  //   // clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', // right
  //   // clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)', // left
  //   // clipPath: 'polygon(0% 100%, 0% 100%, 0% 100%, 0% 100%)', // bottom left
  //   // clipPath: 'circle(15% at 50% 50%)',
  // },
};
