import clsx from 'clsx';
import { FC } from 'react';
import { Container } from '../Container';
import { Typography } from '../Typography';
import styles from './styles.module.scss';
import { Logo } from '@app/icons';

export const Footer: FC = () => (
  <Container component="footer" className={styles['footer-root']}>
    <Logo className={styles['footer-logo']} alt="Manual" />
    <div className={clsx(styles['footer-links'], styles['footer-product'])}>
      <Typography
        component="h4"
        variant="heading-7"
        messageKey="footer.links.product.title"
      />
      {(
        [
          'footer.links.product.items.popular',
          'footer.links.product.items.trending',
          'footer.links.product.items.guided',
          'footer.links.product.items.products',
        ] as const
      ).map((key) => (
        <Typography
          key={key}
          component="h4"
          variant="heading-7"
          messageKey={key}
        />
      ))}
    </div>
    <div className={clsx(styles['footer-links'], styles['footer-company'])}>
      <Typography
        component="h4"
        variant="heading-7"
        messageKey="footer.links.company.title"
      />
      {(
        [
          'footer.links.company.items.popular',
          'footer.links.company.items.trending',
          'footer.links.company.items.guided',
          'footer.links.company.items.products',
        ] as const
      ).map((key) => (
        <Typography
          key={key}
          component="h4"
          variant="heading-7"
          messageKey={key}
        />
      ))}
    </div>
    <div className={clsx(styles['footer-links'], styles['footer-info'])}>
      <Typography
        component="h4"
        variant="heading-7"
        messageKey="footer.links.info.title"
      />
      {(
        [
          'footer.links.info.items.support',
          'footer.links.info.items.cs',
          'footer.links.info.items.start',
        ] as const
      ).map((key) => (
        <Typography
          key={key}
          component="h4"
          variant="heading-7"
          messageKey={key}
        />
      ))}
    </div>
    <div className={styles['footer-social']}>
      <Typography
        component="h4"
        variant="heading-7"
        messageKey="footer.links.social.title"
      />
    </div>
    <Typography
      className={styles['footer-copy']}
      messageKey="footer.copy-right"
    />
  </Container>
);
