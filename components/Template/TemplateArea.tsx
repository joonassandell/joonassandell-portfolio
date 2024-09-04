import { forwardRef } from 'react';
import { type TemplateAreaProps } from './';
import c from 'clsx';

export const TemplateArea = forwardRef<HTMLDivElement, TemplateAreaProps>(
  (
    {
      children,
      className,
      grid = true,
      gridGap = 'l',
      gridRowGap = 'l',
      pb,
      pt = '2xl',
      wrap = true,
      ...props
    },
    ref,
  ) => {
    /* eslint-disable sort-keys-fix/sort-keys-fix */
    const classes = c('Template-area', className, {
      wrap,
      grid,
      '-gap:l': grid && gridGap === 'l',
      '-gap:0': grid && gridGap === false,
      '-gap:row:l': grid && gridRowGap === 'l',
      '-gap:row:0': grid && gridRowGap === false,
      pt: pt === 'base',
      'pt:m': pt === 'm',
      'pt:l': pt === 'l',
      'pt:grid-gap-row-l': pt === 'grid-gap-row-l',
      'pt:2xl': pt === '2xl' || pt === '2xl-5xl',
      'pt:5xl@l': pt === '2xl-5xl',
      'pb:2xl': pb === '2xl' || pb === '2xl-5xl',
      'pb:5xl@l': pb === '2xl-5xl',
    });

    return (
      <div className={classes} ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

TemplateArea.displayName = 'TemplateArea';
