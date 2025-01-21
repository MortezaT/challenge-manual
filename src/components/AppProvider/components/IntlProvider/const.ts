import { LocaleMessages } from '@app/types/global';
import { LocaleRecord } from '@app/types/intl';

export const localeMap: LocaleRecord<
  () => Promise<{ default: LocaleMessages }>
> = {
  en: () => import('@lang/en.json'),
};
