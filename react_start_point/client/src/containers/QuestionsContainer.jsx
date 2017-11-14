import React from "react";
import QuestionSelector from "../components/QuestionSelector"
import QuestionAnswers from "../components/QuestionAnswers"
import AnswerResponse from "../components/AnswerResponse"
import DeclareResult from "../components/DeclareResult"

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      indexOfCurrentQuestion: 0,
      answerChosen: null,
      correctAnswer: 0,
      incorrectAnswer: 0,
      gameState: false
    }
    this.answerResponse = this.answerResponse.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  };

  componentDidMount() {
    const url = "https://opentdb.com/api.php?amount=50&category=9&type=multiple";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      const questionList = data.results.sort(function() { return 0.5 - Math.random() });

      this.setState({questions: data.results});
    })
    request.send();
  }

  // handleQuestionSelected(index) {
  //   const selectedQuestion = this.state.questions[index];
  //   this.setState({currentQuestion: selectedQuestion});
  // }

  answerResponse(response) {

    this.setState({answerChosen: response})
    if(response === true) this.setState({correctAnswer: this.state.correctAnswer+1})
    if(response === false) this.setState({incorrectAnswer: this.state.incorrectAnswer+1})
    if (this.state.correctAnswer === 3 || this.state.incorrectAnswer === 3){
      this.setState({gameState: true})
    }
  }

  nextQuestion (event) {
    this.setState({indexOfCurrentQuestion: this.state.indexOfCurrentQuestion+1})
    this.setState({answerChosen: null })
  }





  render() {

    const footer =
      <div>

      <DeclareResult correctAnswer={this.state.correctAnswer}
        incorrectAnswer={this.state.incorrectAnswer}/> :
        div
      }
    </div>

    return (




        <div>
          {this.state.gameState ?
        <QuestionSelector questions={this.state.questions[this.state.indexOfCurrentQuestion]}/>
        <QuestionAnswers answers={this.state.questions[this.state.indexOfCurrentQuestion]}
          onAnswerSelected={this.answerResponse} />
        <AnswerResponse answerChosen={this.state.answerChosen}
          nextQuestion={this.nextQuestion}/> :
          footer
        }
      </div>

    );
  }


}

export default QuestionsContainer;
