import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button {...rest} className={clsx(className, styles['button-root'])}>
      <Typography variant="heading-7">{children}</Typography>
    </button>
  );
};
