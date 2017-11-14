import React from "react";

const AnswerResponse = (props) => {

if(props.questions === null) return null;

console.log(props);

if(props.answerChosen === null) return null;
if(props.answerChosen === true) return <p>"Correct"</p>
if(props.answerChosen === false) return <p>"Wrong"</p>

  return (

    <div id="answer-response">
        {props.answerChosen}
      </div>
  )
}

export default AnswerResponse;
