import React from "react";
import he from "he";

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
answerList.push(props.answers.correct_answer);
const shufAnswerList = answerList.sort(function() { return 0.5 - Math.random() });
console.log(shufAnswerList);


// function shuffle(answerList) {
//     var shuffles, shufAnswerList, index;
//     for (index = answerList.length - 1; index > 0; index--) {
//         shuffles = Math.floor(Math.random() * (index + 1));
//         shufAnswerList = answerList[index];
//         answerList[index] = answerList[shuffles];
//         answerList[shuffles] = shufAnswerList;
//         console.log(shufAnswerList);
//     }
// }



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
