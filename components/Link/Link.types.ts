import { type TagGeneric, type TagAction } from '@/types';
import { type HTMLMotionProps } from 'framer-motion';

export interface LinkProps extends HTMLMotionProps<'a'> {
  arrow?: boolean;
  orientation?: 'horizontal' | 'vertical';
  href: URL['href'];
  tag?: TagAction | TagGeneric;
  templateTransition?: boolean;
  underline?: boolean;
}
