import { FC, PropsWithChildren } from 'react';
import { IntlConfig, IntlProvider as IntlProvider_ } from 'react-intl';
import { useLocaleMessages } from './hooks';

export type IntlProviderProps = PropsWithChildren<Omit<IntlConfig, 'messages'>>;

export const IntlProvider: FC<IntlProviderProps> = (props) => {
  const { children, locale } = props;
  const messages = useLocaleMessages(locale);

  return !messages ? null : (
    <IntlProvider_ {...{ ...props, messages, locale }}>
      {children}
    </IntlProvider_>
  );
};
