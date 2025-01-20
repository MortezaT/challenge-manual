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
          <Typography component="h1" variant="heading-1">
            Be good to yourself
          </Typography>
          <Typography variant="heading-3">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </Typography>
          <Button onClick={onQuizStart}>Take the quiz</Button>
        </Container>
      </section>
      <Container component="section" className={styles['landing-title']}>
        <Typography component="h2" variant="heading-3">
          What we can help with
        </Typography>
      </Container>
      <Container component="section" className={styles['landing-hair']}>
        <img
          className={styles['landing-img']}
          src="/hair.png"
          alt="Hair loss"
        />
        <div className={styles['landing-content']}>
          <Typography variant="heading-7">Hair loss</Typography>
          <Typography component="h2" variant="heading-4">
            Hair loss needn’t be irreversible. We can help!
          </Typography>
          <Typography variant="body-3">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </Typography>
        </div>
      </Container>
      <Container component="section" className={styles['landing-ed']}>
        <img
          className={styles['landing-img']}
          src="/ed.png"
          alt="Erectile dysfunction"
        />
        <div className={styles['landing-content']}>
          <Typography variant="heading-7">Erectile dysfunction</Typography>
          <Typography variant="heading-4" component="h2">
            Erections can be a tricky thing. But no need to feel down!
          </Typography>
          <Typography variant="body-3">
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </Typography>
        </div>
      </Container>
      <Footer />
      <QuizDialog open={dialogOpen} onClose={onQuizClose} />
      {/* {!dialogOpen ? null : <QuizDialog onClose={onQuizClose} />} */}
    </div>
  );
};
