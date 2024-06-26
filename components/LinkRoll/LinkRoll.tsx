import { AnimatePresence, type HTMLMotionProps, m } from 'framer-motion';
import {
  characterInVariants,
  characterOutVariants,
  type LinkRollProps,
  linkVariants,
} from './';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';
import { isBoolean, isEmptyString } from '@/lib/utils';
import { default as NextLink } from 'next/link';
import { useApp } from '@/components/App';
import { useState } from 'react';
import { useUrlState } from '@/lib/useUrlState';
import c from 'clsx';

export const LinkRoll = ({
  children,
  className,
  href,
  onClick,
  tag,
  target,
  templateTransition = true,
  underline,
  ...props
}: LinkRollProps) => {
  const { setTransition } = useApp();
  const [hover, setHover] = useState(false);
  const characters = children?.split('');
  const classes = c(className, 'LinkRoll', {
    '-underline': underline,
    'has-underline': isBoolean(underline),
  });
  const Tag = tag ? m<HTMLMotionProps<typeof tag>>(tag) : m.a;
  const { active, external, externalTarget } = useUrlState(href);
  const shouldNavigate =
    Boolean(href) && !external && target != '_blank' && target != '_new';

  return (
    <ConditionalWrapper
      condition={shouldNavigate}
      wrapper={children => (
        <NextLink
          href={href as URL['href']}
          legacyBehavior
          passHref
          scroll={false}
        >
          {children}
        </NextLink>
      )}
    >
      <Tag
        animate={hover ? 'in' : 'out'}
        className={classes}
        href={href}
        initial="out"
        onBlur={() => setHover(false)}
        onClick={e => {
          e.stopPropagation();
          shouldNavigate &&
            !active &&
            templateTransition &&
            setTransition('template');
          onClick && onClick(e);
        }}
        onFocus={() => setHover(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        target={target ?? externalTarget}
        {...props}
      >
        <m.span className="LinkRoll-text" variants={linkVariants}>
          {characters.map((char, i) => {
            isEmptyString(char) ? (char = '\u00A0') : false;

            return (
              <m.span
                className="LinkRoll-char"
                key={i}
                variants={characterOutVariants}
              >
                {char}
              </m.span>
            );
          })}
        </m.span>
        <AnimatePresence>
          {hover && (
            <m.span
              animate="in"
              className="LinkRoll-text -hover"
              exit="out"
              hidden
              initial="out"
              variants={linkVariants}
            >
              {characters.map((char, i) => {
                const empty = isEmptyString(char);
                empty ? (char = '\u00A0') : false;

                return (
                  <m.span
                    className={c('LinkRoll-char', { '-empty': empty })}
                    key={i}
                    variants={characterInVariants}
                  >
                    {char}
                  </m.span>
                );
              })}
            </m.span>
          )}
        </AnimatePresence>
      </Tag>
    </ConditionalWrapper>
  );
};
