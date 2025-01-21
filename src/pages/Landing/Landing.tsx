import { FC, useCallback, useState } from 'react';
import { Button, Container, Footer, Typography } from '../../components';
import styles from './styles.module.scss';
import { QuizDialog } from './components';

export const Landing: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const onQuizStart = useCallback(() => setDialogOpen(true), []);
  const onQuizClose = useCallback(() => setDialogOpen(false), []);

  return (
    <div className={styles['landing-root']}>
      <section className={styles['landing-hero']}>
        <Container className={styles['landing-hero-content']}>
          <Typography
            component="h1"
            variant="heading-1"
            messageKey="landing.hero.title"
          />
          <Typography variant="heading-3" messageKey="landing.hero.desc" />
          <Button
            onClick={onQuizStart}
            messageKey="landing.hero.action.label"
          />
        </Container>
      </section>
      <Container component="section" className={styles['landing-title']}>
        <Typography
          component="h2"
          variant="heading-3"
          messageKey="landing.sections.title"
        />
      </Container>
      <Container component="section" className={styles['landing-hair']}>
        <img
          className={styles['landing-img']}
          src="/hair.png"
          alt="Hair loss"
        />
        <div className={styles['landing-content']}>
          <Typography
            variant="heading-7"
            messageKey="landing.hair-loss.title"
          />
          <Typography
            component="h2"
            variant="heading-4"
            messageKey="landing.hair-loss.title"
          />
          <Typography variant="body-3" messageKey="landing.hair-loss.desc" />
        </div>
      </Container>
      <Container component="section" className={styles['landing-ed']}>
        <img
          className={styles['landing-img']}
          src="/ed.png"
          alt="Erectile dysfunction"
        />
        <div className={styles['landing-content']}>
          <Typography variant="heading-7" messageKey="landing.ed.heading" />
          <Typography
            variant="heading-4"
            component="h2"
            messageKey="landing.ed.title"
          />
          <Typography variant="body-3" messageKey="landing.ed.desc" />
        </div>
      </Container>
      <Footer />
      <QuizDialog open={dialogOpen} onClose={onQuizClose} />
      {/* {!dialogOpen ? null : <QuizDialog onClose={onQuizClose} />} */}
    </div>
  );
};
