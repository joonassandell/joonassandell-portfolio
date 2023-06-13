import { TRANS_SECONDARY, TRANS_TERTIARY } from '@/lib/config';
import { getCSSVarValue } from '@/lib/utility';
import { headingVariants as headingVars } from '@/components/Hero';

export const headingVariants = {
  animate: {
    ...headingVars.animate,
    y: '-150%',
  },
};

export const figureBgVariants = {
  animate: {
    scaleY: 4,
    background: [
      'linear-gradient(180deg, var(--oras-Hero-figure-bg) 0%, rgba(var(--oras-Hero-figure-bg-rgb), 1) 100%)',
      'linear-gradient(180deg, var(--oras-Hero-figure-bg) 0%, rgba(var(--oras-Hero-figure-bg-rgb), 0) 100%)',
    ],
    opacity: parseFloat(getCSSVarValue('--oras-Hero-figure-bg-alpha')),
    transition: {
      ...TRANS_SECONDARY,
    },
  },
};

export const dropVariants = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_TERTIARY,
      delay,
    },
    y: 0,
  }),
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      opacity: 0,
      y: -24,
    };
  },
};

export const dropVariants2 = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_TERTIARY,
      delay: 0.2 + delay,
    },
    y: 0,
  }),
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      opacity: 0,
      y: -48,
    };
  },
};

export const dropVariants3 = {
  animate: ({ delay = 0 } = {}) => ({
    opacity: 1,
    transition: {
      ...TRANS_TERTIARY,
      delay: 0.1 + delay,
    },
    y: 0,
  }),
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      opacity: 0,
      y: -80,
    };
  },
};