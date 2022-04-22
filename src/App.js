import { useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import { useMemo, useEffect } from "react";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "who is the most handsome boy in the world?",
      answers: [
        {
          text: "animesh",
          correct: false,
        },
        {
          text: "Avishek",
          correct: true,
        },
        {
          text: "Vivek",
          correct: false,
        },
        {
          text: "chiranjit",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "who is pro player in bgmi ?",
      answers: [
        {
          text: "Pexton",
          correct: true,
        },
        {
          text: "Knox",
          correct: false,
        },
        {
          text: "Vivek bhai",
          correct: false,
        },
        {
          text: "Hawk",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 400" },
        { id: 5, amount: "$ 500" },
        { id: 6, amount: "$ 600" },
        { id: 7, amount: "$ 700" },
        { id: 8, amount: "$ 800" },
        { id: 9, amount: "$ 900" },
        { id: 10, amount: "$ 1000" },
        { id: 11, amount: "$ 1500" },
        { id: 12, amount: "$ 1800" },
        { id: 13, amount: "$ 2000" },
        { id: 14, amount: "$ 3000" },
        { id: 15, amount: "$ 5000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
           <div className="main">
        {stop ? (
          <h1 className="endText">You earned : {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
               <Timer setStop={setStop} questionNumber={questionNumber}/>
              </div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active "
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername}/> }
   
    </div>
  );
}

export default App;
