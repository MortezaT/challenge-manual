import clsx from 'clsx';
import { ComponentType, FC, ReactNode } from 'react';
import styles from './styles.module.scss';

export type TypographyProps = {
  children?: ReactNode;
  className?: string;
  component?: ComponentType | keyof HTMLElementTagNameMap;
  variant?: `body-${3 | 4}` | `heading-${1 | 3 | 4 | 7}`;
};

export const Typography: FC<TypographyProps> = (props) => {
  const {
    children,
    className,
    variant = 'body',
    component: Component = 'span',
  } = props;

  return (
    <Component
      className={clsx(
        className,
        styles['typography-root'],
        styles[`typography-variant-${variant}`]
      )}
    >
      {children}
    </Component>
  );
};
