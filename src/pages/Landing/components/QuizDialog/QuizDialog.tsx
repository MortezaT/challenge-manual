import { FC, useCallback, useEffect } from 'react';
import { Button, Container, Typography } from '../../../../components';
import { AppConfig } from '../../../../config';
import { ChoiceAnswer, Questionnaire } from '../../../../types/models';
import { RadioOption } from './RadioOption';
import { useQuizReducer } from './reducer';
import styles from './styles.module.scss';

export type QuizDialogProps = {
  open?: boolean;
  onClose: () => void;
};

export const QuizDialog: FC<QuizDialogProps> = ({ open = true, onClose }) => {
  const { step, status, current, questions, onBack, setAnswer, setQuestions } =
    useQuizReducer();

  const onOptionSelect = useCallback(
    (item: ChoiceAnswer) => setAnswer(item),
    [setAnswer]
  );

  useEffect(() => {
    if (!open) return;

    fetch(AppConfig.quizUrl)
      .then((res) => res.json())
      .then(({ questions }: Questionnaire) => {
        setQuestions(questions);
      });
  }, [open, setQuestions]);

  if (!questions.length) return null;

  return (
    <dialog {...{ open }} className={styles['quiz-dialog-root']}>
      <button onClick={onClose} className={styles['quiz-dialog-close']}>
        X
      </button>
      <Container className={styles['quiz-dialog-container']}>
        {!current.question ? null : (
          <Typography
            variant="heading-3"
            className={styles['quiz-dialog-head']}
          >
            {current.question.question}
          </Typography>
        )}
        {status != 'success' ? null : (
          <Typography variant="heading-3">
            Great news! We have the perfect treatment for your hair loss.
            Proceed to www.manual.co, and prepare to say hello to your new hair!
          </Typography>
        )}
        {status != 'fail' ? null : (
          <Typography variant="heading-3">
            Unfortunately, we are unable to prescribe this medication for you.
            This is because finasteride can alter the PSA levels, which may be
            used to monitor for cancer. You should discuss this further with
            your GP or specialist if you would still like this medication.
          </Typography>
        )}
        {status != 'in-progress' || !current.question ? null : (
          <div className={styles['quiz-dialog-body']}>
            {current.question.options.map((item) => (
              <RadioOption
                key={'' + item.value}
                {...{
                  item,
                  name: `question-${step}`,
                  checked: item.value == current.answer?.value,
                  onSelect: onOptionSelect,
                }}
              />
            ))}
          </div>
        )}
        {status != 'in-progress' ? null : (
          <div className={styles['quiz-dialog-footer']}>
            <Button disabled={!step} onClick={onBack}>
              &lt; Back
            </Button>
          </div>
        )}
      </Container>
    </dialog>
  );
};
