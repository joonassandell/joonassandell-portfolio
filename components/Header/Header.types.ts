import { type ComponentPropsWithoutRef } from 'react';
import { type HTMLMotionProps } from 'framer-motion';
import { type LinkRollProps } from '@/components/LinkRoll';

export interface HeaderProps {
  navTitle?: string;
}

export interface HeaderNavItemProps {
  href: URL['href'];
  isOpen: boolean;
  onClick?: ComponentPropsWithoutRef<'a'>['onClick'];
  openReveal: boolean;
  target?: LinkRollProps['target'];
  title: string;
}

export interface HeaderMaskNavItemProps {
  color: string;
  href: URL['href'];
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  title: string;
  year: string | number;
}

export interface HeaderMaskNavItemSecondaryProps
  extends Pick<HTMLMotionProps<'li'>, 'custom'> {
  href: URL['href'];
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  title: string;
}

export interface HeaderFooterNavItemProps {
  href: URL['href'];
  onClick: ComponentPropsWithoutRef<'a'>['onClick'];
  title: string;
}
