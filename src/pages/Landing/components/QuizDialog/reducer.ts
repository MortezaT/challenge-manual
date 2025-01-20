import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { ChoiceAnswer, Question } from '../../../../types/models';

export type QuizState = {
  step: number;
  status: 'in-progress' | 'fail' | 'success';
  questions: Question[];
  answers: (ChoiceAnswer | undefined)[];
};

type QuizAction =
  | { type: 'step-back' }
  | { type: 'set-questions'; payload: Question[] }
  | { type: 'set-answer'; payload: ChoiceAnswer }
  | { type: 'clear-answer' };

const initialState: QuizState = {
  step: 0,
  status: 'in-progress',
  questions: [],
  answers: [],
};

const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case 'step-back':
      return { ...state, step: state.step - 1 };

    case 'set-questions':
      return { ...state, questions: action.payload };

    case 'set-answer': {
      const { step, questions } = state;
      const answers = [...state.answers];
      const answer = action.payload;
      answers[step] = answer;
      const status: QuizState['status'] = answer.isRejection
        ? 'fail'
        : step == questions.length - 1
        ? 'success'
        : 'in-progress';

      console.log({ status, step, length: questions.length });

      return {
        ...state,
        answers,
        status,
        step: answer.isRejection ? step : step + 1,
      };
    }
    case 'clear-answer': {
      const { step } = state;
      const answers = [...state.answers];
      answers[step] = undefined;

      return { ...state, answers };
    }

    default:
      return state;
  }
};

const QuizAnswersStoreKey = '@landing/answers';
export const useQuizReducer = () => {
  const initialValue: QuizState = useMemo(() => {
    const answers = JSON.parse(
      localStorage.getItem(QuizAnswersStoreKey) || '[]'
    );

    return { ...initialState, answers };
  }, []);

  const [state, dispatch] = useReducer(quizReducer, initialValue);
  const { step, questions, answers } = state;
  const current = { question: questions[step], answer: answers[step] };

  const setQuestions = useCallback(
    (questions: Question[]) =>
      dispatch({ type: 'set-questions', payload: questions }),
    []
  );
  const onBack = useCallback(() => dispatch({ type: 'step-back' }), []);

  const setAnswer = useCallback(
    (answer: ChoiceAnswer) => dispatch({ type: 'set-answer', payload: answer }),
    []
  );

  useEffect(() => {
    localStorage.setItem(QuizAnswersStoreKey, JSON.stringify(answers));
  }, [answers]);

  return {
    ...state,
    current,

    onBack,
    setAnswer,
    setQuestions,
  };
};
