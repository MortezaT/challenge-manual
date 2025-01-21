import { ReactNode } from 'react';
import { IntlShape, MessageDescriptor } from 'react-intl';
import { Prettify } from './utils';

export type LocaleRecord<T> = Record<IntlShape['locale'], T>;
export type FormatterValues = Parameters<IntlShape['formatMessage']>[1];

export type MessageProps = {
  messageKey: MessageDescriptor['id'];
  values?: FormatterValues;
};

export type MessageOrChildren<
  T extends object,
  TDontTranslate extends boolean
> = T & {
  dontTranslate?: TDontTranslate;
} & (TDontTranslate extends true ? { children: ReactNode } : MessageProps);

export type MessageAndChildren<T extends object = object> = Prettify<
  T & MessageOrChildren<object, true> & MessageOrChildren<object, false>
>;
