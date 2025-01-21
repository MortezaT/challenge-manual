import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { MessageAndChildren, MessageOrChildren } from '../../types/intl';
import { Typography } from '../Typography';
import styles from './styles.module.scss';

type ButtonProps_ = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps<TDontTranslate extends boolean> = MessageOrChildren<
  ButtonProps_,
  TDontTranslate
>;

export function Button<TDontTranslate extends boolean>(
  props: ButtonProps<TDontTranslate>
) {
  const { className, dontTranslate, messageKey, children, ...rest } =
    props as MessageAndChildren<ButtonProps_>;

  return (
    <button {...rest} className={clsx(className, styles['button-root'])}>
      <Typography
        variant="heading-7"
        {...{ dontTranslate, className, messageKey, children }}
      ></Typography>
    </button>
  );
}
