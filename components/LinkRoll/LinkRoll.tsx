import { m, AnimatePresence, type HTMLMotionProps } from 'framer-motion';
import { default as NextLink } from 'next/link';
import { useAppContext } from '@/components/App';
import { useState } from 'react';
import {
  characterInVariants,
  characterOutVariants,
  linkVariants,
  type LinkRollProps,
} from './';
import c from 'clsx';
import { isBoolean, isEmptyString } from '@/lib/utility';
import { useUrlState } from '@/lib/useUrlState';
import { ConditionalWrapper } from '@/components/ConditionalWrapper';

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
  const { setTransition } = useAppContext();
  const [hover, setHover] = useState(false);
  const characters = children?.split('');
  const classes = c(className, 'LinkRoll', {
    'has-underline': isBoolean(underline),
    '-underline': underline,
  });
  const Tag = tag ? m<HTMLMotionProps<typeof tag>>(tag) : m.a;
  const linkTarget = target
    ? target
    : href?.startsWith('http')
    ? '_blank'
    : false;
  const hasHref = Boolean(href && href.startsWith('/'));
  const { active, external } = useUrlState(href);
  const activeOrExternal = active || external;

  return (
    <ConditionalWrapper
      condition={hasHref}
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
        onClick={e => {
          !activeOrExternal && templateTransition && setTransition('template');
          onClick && onClick(e);
        }}
        onBlur={() => setHover(false)}
        onFocus={() => setHover(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...(href && linkTarget && { target: linkTarget })}
        {...(linkTarget === '_blank' && { rel: 'external' })}
        {...props}
      >
        <m.span className="LinkRoll-text" variants={linkVariants}>
          {characters.map((char, i) => {
            const empty = isEmptyString(char);
            empty ? (char = '\u00A0') : false;

            return (
              <m.span
                className={c('LinkRoll-char', { '-empty': empty })}
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
