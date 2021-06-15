import "./index.css";
import { scoreKeeper } from "./scoreKeeper";
import { quiz } from "./data";
import { Header } from "./Header";
import { useState } from "react";

scoreKeeper(0, quiz.questions[0], quiz.questions[0].options[1]);

export const App = () => {
  const [score, setScore] = useState<number>(0);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quiz App Using TS</h1>
      <br />

      <Header name={"Suyash"} score={20} />
      <button onClick={() => setScore((score) => score + 1)}>
        Increment Score
      </button>
      <h3>{score}</h3>
      <br />
      <br />

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
