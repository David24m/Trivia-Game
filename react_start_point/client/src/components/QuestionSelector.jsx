import React from "react";
import he from "he";

const QuestionSelector = (props) => {


  const options = props.questions.map( (query, index) => {
    return <option value={index} key={index}>{he.decode(query.question)}</option>

  })


  function handleChange(event) {
    props.onQuestionSelected(event.target.value);
  }

  return (
    <ul defaultValue="default" name="question-selector"
      id="question-selector" onChange={handleChange}>
        <li disabled value="default">Choose a questions...</li>
        {options}
      </ul>
  )
}

export default QuestionSelector;
