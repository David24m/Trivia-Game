import React from "react";
import QuestionSelector from "../components/QuestionSelector"
import QuestionAnswers from "../components/QuestionAnswers"
import AnswerResponse from "../components/AnswerResponse"

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: null,
      answerChosen: null
    }
    this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
    this.answerResponse = this.answerResponse.bind(this);
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
      const question = questionList.shift();
      this.setState({questions: data.results, currentQuestion: question });
    })
    request.send();
  }

  handleQuestionSelected(index) {
    const selectedQuestion = this.state.questions[index];
    this.setState({currentQuestion: selectedQuestion});
  }

  answerResponse(response) {

    this.setState({answerChosen: response})
  }


  render() {
    return (
      <div>
        <h1>this is working</h1>
        <QuestionSelector questions={this.state.currentQuestion}
          onQuestionSelected={this.handleQuestionSelected}/>
        <QuestionAnswers answers={this.state.currentQuestion}
          onAnswerSelected={this.answerResponse} />
        <AnswerResponse answerChosen={this.state.answerChosen}/>
      </div>
    );
  }


}

export default QuestionsContainer;
