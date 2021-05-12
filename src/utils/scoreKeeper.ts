import { Options, Questions } from "../data";

function scoreKeeper(
  currentScore: number,
  question: Questions,
  selectedOption: Options
) {
  return selectedOption.isRight
    ? currentScore + question.points
    : currentScore - question.negativePoints;
}

export { scoreKeeper };
