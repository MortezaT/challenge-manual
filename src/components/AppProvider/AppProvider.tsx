import { FC } from 'react';
import { IntlProvider } from './components';

import { ReactNode } from 'react';

export type AppProviderProps = {
  children?: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => (
  <IntlProvider locale="en">{children}</IntlProvider>
);
