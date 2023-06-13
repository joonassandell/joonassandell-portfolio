import { TRANS_PRIMARY } from '@/lib/config';
import { headingVariants as headingVars } from '@/components/Hero';

export const headingVariants = {
  animate: {
    ...headingVars.animate,
    color: 'var(--biocode-heading)',
  },
};

export const maskVariants = {
  animate: {
    clipPath: `circle(150% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    transition: TRANS_PRIMARY,
  },
  initial: ({ enableInitial = true } = {}) => {
    if (!enableInitial) return;
    return {
      clipPath: `circle(0% at var(--Stamp-center-x) var(--Stamp-center-y))`,
    };
  },
};