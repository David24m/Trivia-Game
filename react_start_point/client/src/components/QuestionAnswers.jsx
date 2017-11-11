import React from "react";

const QuestionAnswers = (props) => {

const answer = (e) => {
  if(props.answers.incorrect_answers) return <p>"wrong"</p>
  else return <p>"correct"</p>
}


// const rightAnswer = (e) => {
//   const answer = "correct"
// }

console.log(props.answers);
// const answerList = props.answers.incorrect_answers.push;
// answerList.push(props.answers.correct_answer);
// const shufAnswerList = shuffle(answerList);


  if(!props.answers) return null;
  return (
    <div>
      <button onClick={answer}>{props.answers.incorrect_answers[0]}</button>
      <button onClick={answer}>{props.answers.incorrect_answers[1]}</button>
      <button onClick={answer}>{props.answers.correct_answer}</button>
      <button onClick={answer}>{props.answers.incorrect_answers[2]}</button>
      {/* <p>{answer}</p> */}
    </div>
  )
}

export default QuestionAnswers;
