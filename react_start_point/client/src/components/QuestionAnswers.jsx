import React from "react";
import he from "he";

const QuestionAnswers = (props) => {

  if (props.answers) console.log(props.answers.correct_answer)

const answer = (event) => {
  if (event.target.innerText == props.answers.correct_answer){
    console.log("go you!")
  }
  if(this.answer === props.answers.correct_answer) return <p>"Correct"</p>
  else return <p>"Wrong"</p>

}


if(props.answers === null) return null;
const answerList = props.answers.incorrect_answers;
answerList.push(props.answers.correct_answer);
const shufAnswerList = answerList.sort(function() { return 0.5 - Math.random() });
console.log(shufAnswerList);

  if(!props.answers) return null;
  return (
    <div>
      <button onClick={answer}>{he.decode(shufAnswerList[0])}</button>
      <button onClick={answer}>{he.decode(shufAnswerList[1])}</button>
      <button onClick={answer}>{he.decode(shufAnswerList[2])}</button>
      <button onClick={answer}>{he.decode(shufAnswerList[3])}</button>
      {answer}
    </div>
  )
}

export default QuestionAnswers;
