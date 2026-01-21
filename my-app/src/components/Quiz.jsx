import "./Card.css"
import Card from "./Card"
import './Quiz.css'
import { useState } from "react";

function Quiz({quiz,ans}){
    const [flip,setflip] = useState("notflip");

    function toggleFlip(){
        if(flip === "flip"){
            setflip("notflip");
        }else{
            setflip("flip");
        }
    }
    // show quiz or ans ?
    return(
        <div className="quiz">
            <Card flip={flip} onFlip={toggleFlip}>
                {flip === "notflip" ? <p className="quiz">{quiz}</p> : <p className="ans">{ans}</p>}
            </Card>
        </div>
    );
}

export default Quiz;