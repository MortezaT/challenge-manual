import { useEffect, useState } from 'react';
import { IntlShape } from 'react-intl';
import { LocaleMessages } from '@app/types/global';
import { LocaleRecord } from '@app/types/intl';
import { localeMap } from './const';

export function useLocaleMessages(locale: IntlShape['locale']) {
  const [cache, setCache] = useState<Partial<LocaleRecord<LocaleMessages>>>({});

  useEffect(() => {
    if (!cache[locale]) {
      localeMap[locale]().then(({ default: localeData }) =>
        setCache((cache) => ({
          ...cache,
          [locale]: { ...cache?.en, ...localeData },
        }))
      );
    }
  }, [cache, locale]);

  return cache[locale] || cache.en;
}
