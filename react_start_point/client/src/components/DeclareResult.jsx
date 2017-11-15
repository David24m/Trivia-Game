import React from "react";

const DeclareResult = (props) => {

let resultString = null;

if(props.correctAnswer === 3) {
  resultString = "Wow! You won?! I'll get you next time!"
}
if(props.incorrectAnswer === 3) {
  resultString = "Mwahahaha! You lost! Your fate awaits!"
}
  return (
    <div>
      <p id="declare-result">{resultString}</p>
    </div>
  )
}

export default DeclareResult;
