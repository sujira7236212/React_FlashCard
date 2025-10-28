import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import "./App.css";
import { QuizData } from "./data/QuizData"
import { useState } from "react";



function App() {
  const [selectSet,setSelectSet] = useState("A")
  
  const [index,setindex] = useState(0)

  const quizList = QuizData[selectSet]

  const Card = quizList[index]

  const next = ()=> {setindex((prev) => (prev + 1) % quizList.length)}

  const pre = ()=> {setindex((prev) => (prev - 1 + quizList.length) % quizList.length)}
  return (
    <>
      <div className="App">
      <Navbar selectSet={selectSet} setSelectSet={setSelectSet} />
      <main>
      <Quiz quiz= {Card.quiz} ans = {Card.ans} />
        <button onClick = {pre} className="btn-pre">Previous</button>
        <button onClick = {next} className="btn-next">Next</button>
      </main>        
      </div>
    </>
  );
}

export default App;
