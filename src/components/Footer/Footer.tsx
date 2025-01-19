import clsx from 'clsx';
import { FC } from 'react';
import { Container } from '../Container';
import { Typography } from '../Typography';
import styles from './styles.module.scss';
import { Logo } from '../../icons';

export const Footer: FC = () => (
  <Container component="footer" className={styles['footer-root']}>
    <Logo className={styles['footer-logo']} alt="Logo" />
    <div className={clsx(styles['footer-links'], styles['footer-product'])}>
      <Typography component="h4" variant="heading-7">
        Product
      </Typography>
      <Typography component="span" variant="body-4">
        Popular
      </Typography>
      <Typography component="span" variant="body-4">
        Trending
      </Typography>
      <Typography component="span" variant="body-4">
        Guided
      </Typography>
      <Typography component="span" variant="body-4">
        Products
      </Typography>
    </div>
    <div className={clsx(styles['footer-links'], styles['footer-company'])}>
      <Typography component="h4" variant="heading-7">
        Company
      </Typography>
      <Typography component="span" variant="body-4">
        Press
      </Typography>
      <Typography component="span" variant="body-4">
        Mission
      </Typography>
      <Typography component="span" variant="body-4">
        Strategy
      </Typography>
      <Typography component="span" variant="body-4">
        About
      </Typography>
    </div>
    <div className={clsx(styles['footer-links'], styles['footer-info'])}>
      <Typography component="h4" variant="heading-7">
        Info
      </Typography>
      <Typography component="span" variant="body-4">
        Support
      </Typography>
      <Typography component="span" variant="body-4">
        Customer Service
      </Typography>
      <Typography component="span" variant="body-4">
        Get started
      </Typography>
    </div>
    <div className={styles['footer-social']}>
      <Typography component="h4" variant="heading-7">
        Follow us
      </Typography>
    </div>
    <Typography className={styles['footer-copy']}>
      © 2021 Manual. All rights reserved
    </Typography>
  </Container>
);
