import React from "react";
import QuestionSelector from "../components/QuestionSelector"
import QuestionAnswers from "../components/QuestionAnswers"

class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentQuestion: null
    }
    this.handleQuestionSelected = this.handleQuestionSelected.bind(this);
  };

  componentDidMount() {
    const url = "https://opentdb.com/api.php?amount=50&category=9&type=multiple";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({questions: data.results });
    })
    request.send();
  }

  handleQuestionSelected(index) {
    const selectedQuestion = this.state.questions[index];
    this.setState({currentQuestion: selectedQuestion});
  }

  render() {
    return (
      <div>
        <h1>this is working</h1>
        <QuestionSelector questions={this.state.questions}
          onQuestionSelected={this.handleQuestionSelected}/>
        <QuestionAnswers answers={this.state.currentQuestion} />
      </div>
    );
  }


}

export default QuestionsContainer;
