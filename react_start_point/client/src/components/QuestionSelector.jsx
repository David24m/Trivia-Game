import React from "react";
import he from "he";

const QuestionSelector = (props) => {

if(props.questions === null) return null;

  return (

    <div id="question-selector">
        {props.questions.question}
      </div>
  )
}

export default QuestionSelector;
