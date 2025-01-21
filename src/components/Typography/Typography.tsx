import clsx from 'clsx';
import { ComponentType } from 'react';
import { useIntl } from 'react-intl';
import {
  MessageAndChildren,
  MessageOrChildren
} from '../../types/intl';
import styles from './styles.module.scss';

type TypographyProps_ = {
  className?: string;
  component?: ComponentType | keyof HTMLElementTagNameMap;
  variant?: `body-${3 | 4}` | `heading-${1 | 3 | 4 | 7}`;
};

export type TypographyProps<TDontTranslate extends boolean> = MessageOrChildren<
  TypographyProps_,
  TDontTranslate
>;

export function Typography<TDontTranslate extends boolean>(
  props: TypographyProps<TDontTranslate>
) {
  const { formatMessage } = useIntl();
  const {
    className,
    dontTranslate,
    messageKey,
    children,
    values,
    variant = 'body',
    component: Component = 'span',
  } = props as MessageAndChildren<TypographyProps_>;
  const content = dontTranslate
    ? children
    : formatMessage({ id: messageKey }, values);

  return (
    <Component
      className={clsx(
        className,
        styles['typography-root'],
        styles[`typography-variant-${variant}`]
      )}
    >
      {content}
    </Component>
  );
}
