import React from "react";

const QuestionAnswers = (props) => {

const answer = (event) => {
  if(props.answers.incorrect_answers) return <p>"wrong"</p>
  else return <p>"correct"</p>
}


// const rightAnswer = (e) => {
//   const answer = "correct"
// }

if(props.answers === null) return null;
const answerList = props.answers.incorrect_answers;
// answerList.push(props.answers.correct_answer);
// const shufAnswerList = shuffle(answerList);
console.log(props.answers.incorrect_answers);

  if(!props.answers) return null;
  return (
    <div>
      <button onClick={answer}>{props.answers.incorrect_answers[0]}</button>
      <button onClick={answer}>{props.answers.incorrect_answers[1]}</button>
      <button onClick={answer}>{props.answers.correct_answer}</button>
      <button onClick={answer}>{props.answers.incorrect_answers[2]}</button>
      {answer}
    </div>
  )
}

export default QuestionAnswers;
