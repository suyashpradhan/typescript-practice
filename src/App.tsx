import {quizData} from "./data"
import './App.css'
import { scoreKeeper } from "./utils/scoreKeeper"
import { useState } from "react"

type HeaderProps = {
  username: string,
  score:number
}

type Memo = number | string

function printMemo(memo: Memo) {
  if (typeof memo === "number") {
    return memo + 10
  } return memo.toUpperCase();
}

const Header = ({username,score}:HeaderProps) => {
  return (
    <>
      <h3>Welcome {username}</h3>
      <h4>Score { score }</h4>
    </>
  )
}

export const App = () => {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [status, setStatus] = useState("starting");

  return (
    <div className="App">
      <h1>{quizData.quizName}</h1>
      <br/>
     <Header username={"Suyash"} score={score}/>
      
      <h4>Current Question : {currentQuestion}</h4>

      <strong>{ status }</strong>
      <br/>
      
      <button onClick={() => {
        setScore((score) => score + 1)
        setCurrentQuestion((currentQuestion) => currentQuestion + 1)
        currentQuestion > 5 ? setStatus("finished") : setStatus("starting");
      }
      }>Increment Score</button>
     
     {
       quizData.questions.map(({id,question,points,options})=>{
         return (
           <div key={id}>
              <h3>{question}</h3>
              <span>Points {points}</span>
              {
               options.map(({answer})=>{
                 return <button onClick={()=>scoreKeeper}>{answer}</button>
               })
              }
           </div>
         )
       })
     }
    </div>
  );
}
