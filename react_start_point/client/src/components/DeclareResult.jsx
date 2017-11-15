import React from "react";

const DeclareResult = (props) => {

let resultString = null;

if(props.correctAnswer === 3) {
  resultString = "Wow! you won"
}
if(props.incorrectAnswer === 3) {
  resultString = "You lost, idiot!"
}
  return (
    <div>
      <p id="declare-result">{resultString}</p>
    </div>
  )
}

export default DeclareResult;
