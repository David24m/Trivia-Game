import React from "react";
import he from "he";

const QuestionAnswers = (props) => {

  // if (props.answers) console.log(props.answers.correct_answer)

const answer = (event) => {
  // console.log(event.target.innerText)
  // console.log(props.answers.correct_answer)


  if (event.target.innerText == props.answers.correct_answer){
    // console.log("true")

    props.onAnswerSelected(true);
  }else{
    props.onAnswerSelected(false);

  }
}


if(props.answers === null) return null;
const answerList = props.answers.incorrect_answers;
answerList.push(props.answers.correct_answer);
const shufAnswerList = answerList.sort(function() { return 0.5 - Math.random() });
// console.log(shufAnswerList);

  if(!props.answers) return null;
  return (
    <div>
      <button onClick={answer}>{he.decode(shufAnswerList[0])}</button>
      <button onClick={answer}>{he.decode(shufAnswerList[1])}</button>
      <button onClick={answer}>{he.decode(shufAnswerList[2])}</button>
      <button onClick={answer}>{he.decode(shufAnswerList[3])}</button>
    </div>
  )
}

export default QuestionAnswers;
