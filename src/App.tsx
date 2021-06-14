import "./index.css";
import { scoreKeeper } from "./scoreKeeper";
import { quiz } from "./data";

scoreKeeper(22, quiz.questions[0], quiz.questions[0].options[1]);

export const App = () => {
  return (
    <div>
      <h1>Quiz App Using TS</h1>
      <br />
      <br />
      <br />
      <p>CurrentScore : 0</p>
      {quiz.questions.map((question) => (
        <div key={question.id}>
          <h2>{question.question}</h2>
          {question.options.map((option) => (
            <h3 key={option.id}>{option.text}</h3>
          ))}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
};
