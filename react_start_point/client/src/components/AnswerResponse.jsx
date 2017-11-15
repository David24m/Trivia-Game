import React from "react";

const AnswerResponse = (props) => {

if(props.questions === null) return null;

let string = null;

if(props.answerChosen === null) return null;
if(props.answerChosen === true) {
  string = "Correct! Well we now have proof miracles can happen"
}
if(props.answerChosen === false) {
  string = "Wrong! No real surprise I guess"
}
  return (
    <div>
      <p id="answer-response">{string}</p>
      <button id="next-quest-btn" onClick={props.nextQuestion}>Next Question</button>
    </div>
  )
}

export default AnswerResponse;
