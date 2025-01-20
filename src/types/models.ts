export interface Questionnaire {
  questions: Question[];
}

export type Question = ChoiceTypeQuestion;

export type QuestionTypes = 'ChoiceType';

export interface ChoiceTypeQuestion {
  question: string;
  type: QuestionTypes;
  options: ChoiceAnswer[];
}

export interface ChoiceAnswer {
  display: string;
  value: string | boolean;
  isRejection: boolean;
}
