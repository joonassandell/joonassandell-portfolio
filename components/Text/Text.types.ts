import { type TagGeneric, type TagText } from '@/types';
import { type HTMLMotionProps } from 'framer-motion';

export interface TextProps extends HTMLMotionProps<'div'> {
  animate?: boolean;
  color?: string;
  marginBottom?: '2xs';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  tag?: TagText | TagGeneric;
}