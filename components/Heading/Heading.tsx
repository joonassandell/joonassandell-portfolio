import c from 'clsx';
import { type HeadingProps } from './';

export const Heading = ({
  className,
  children,
  tag: Tag = 'h2',
  size = 'h3',
  ...props
}: HeadingProps) => {
  const display = size === 'display';
  const classes = c(
    'Heading',
    {
      [`${size}`]: size && !display,
      'Heading--display': display,
    },
    className,
  );

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};