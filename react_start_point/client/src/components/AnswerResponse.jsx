import React from "react";

const AnswerResponse = (props) => {

if(props.questions === null) return null;

console.log(props);

if(props.answerChosen === null) return null;
if(props.answerChosen === true) return <p>You are correct, it's a miracle!</p>
if(props.answerChosen === false) return <p>Wrong! no surprise there I guess</p>

  return (

    <div id="answer-response">
        {props.answerChosen}
      </div>
  )
}

export default AnswerResponse;
