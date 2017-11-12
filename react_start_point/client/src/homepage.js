import React from "react";
import QuestionsContainer from "./containers/QuestionsContainer"

class Homepage extends React.Component {


  startGame(e) {
    <QuestionsContainer />
  }




  render() {
    return (
     <div>
       <h1>It's time to play the game!</h1>
       <h2>This is a best of 5 game. Let's get started</h2>

       <button onClick={this.startGame}>Start</button>
       {/* <QuestionsContainer /> */}
     </div>
   );
  }
}

export default Homepage;
