import { Options, Questions } from "./quiz.types";

export const scoreKeeper = (
  currentScore: number,
  question: Questions,
  selectedOption: Options
) => {
  return selectedOption.isRight
    ? currentScore + 1
    : currentScore - question.points;
};
