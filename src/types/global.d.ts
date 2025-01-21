import sourceOfMessages from '@app/lang/en.json';
import { AppLocalesList } from '@app/constants/intl';

export type LocaleMessages = typeof sourceOfMessages;

declare global {
  namespace FormatjsIntl {
    type LocaleIds = keyof LocaleMessages;

    interface Message {
      ids: LocaleIds;
    }
    interface IntlConfig {
      locale: (typeof AppLocalesList)[number];
    }
  }
}
