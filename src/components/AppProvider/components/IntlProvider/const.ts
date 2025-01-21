import { LocaleMessages } from '../../../../types/global';
import { LocaleRecord } from '../../../../types/intl';

export const AppLocalesList = ['en'] as const;

export const localeMap: LocaleRecord<
  () => Promise<{ default: LocaleMessages }>
> = {
  en: () => import('../../../../../lang/en.json'),
};
