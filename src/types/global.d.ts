import sourceOfMessages from '../../lang/en.json';
import { AppLocalesList } from '../components/AppProvider/components/IntlProvider/const';

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
