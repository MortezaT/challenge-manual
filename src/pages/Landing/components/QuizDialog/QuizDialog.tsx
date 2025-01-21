import { FC, useCallback, useEffect } from 'react';
import { Button, Container, Typography } from '@app/components';
import { AppConfig } from '@app/config';
import { ChoiceAnswer, Questionnaire } from '@app/types/models';
import { RadioOption } from './RadioOption';
import { useQuizReducer } from './reducer';
import styles from './styles.module.scss';

export type QuizDialogProps = {
  open?: boolean;
  onClose: () => void;
};

export const QuizDialog: FC<QuizDialogProps> = ({ open = true, onClose }) => {
  const {
    step,
    status,
    current,
    questions,
    clearAnswer,
    onBack,
    setAnswer,
    setQuestions,
  } = useQuizReducer();

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
        {status != 'success' ? null : (
          <Typography variant="heading-3" messageKey="landing.quiz.success" />
        )}
        {status != 'fail' ? null : (
          <>
            <Typography
              variant="heading-3"
              className={styles['quiz-dialog-body']}
              messageKey="landing.quiz.fail"
            />
            <div>
              <Button
                onClick={clearAnswer}
                messageKey="landing.quiz.fail.action"
              />
            </div>
          </>
        )}
        {status != 'in-progress' || !current.question ? null : (
          <>
            <Typography
              dontTranslate
              variant="heading-3"
              className={styles['quiz-dialog-head']}
            >
              {current.question.question}
            </Typography>
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
          </>
        )}
        {status != 'in-progress' ? null : (
          <div className={styles['quiz-dialog-footer']}>
            <Button
              disabled={!step}
              onClick={onBack}
              messageKey="common.back"
            />
          </div>
        )}
      </Container>
    </dialog>
  );
};
