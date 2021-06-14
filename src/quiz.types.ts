export type Quiz = {
  quizName: String;
  questions: Questions[];
};

export type Questions = {
  id: number;
  question: string;
  points: number;
  negativePoints?: number;
  options: Options[];
};

export type Options = {
  id: number;
  text: String;
  isRight: boolean;
};
