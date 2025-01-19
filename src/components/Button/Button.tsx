import { FC, MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
import styles from './styles.module.scss';
import clsx from 'clsx';
import { Typography } from '../Typography';
export const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={clsx(className, styles['button-root'])}>
      <Typography variant="heading-7">{children}</Typography>
    </button>
  );
};
