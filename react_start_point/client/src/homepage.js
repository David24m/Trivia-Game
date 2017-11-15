import React from "react";
import QuestionsContainer from "./containers/QuestionsContainer"

class Homepage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    showComponent: false,
  }
  this.startGame = this.startGame.bind(this);
}

  startGame(e) {
    this.setState({
      showComponent: true,
    });
  }

  render() {

    const header =  <div id="homepage"><h1>Victory or Death</h1>
     <p>Would you like to play a game?</p>
     <p>It's quite simple really, best of 5 questions...</p>
     <p>If you lose, I'll take your soul,</p>
     <p>If you win...NEVER going to happen!</p>
     <p>Any questions? No...Then let's begin!</p>

     <button id="homepage-btn" onClick={this.startGame}>Start</button></div>

    return (
     <div>

       {this.state.showComponent ?
           <QuestionsContainer /> :
           header
        }
     </div>
   );
  }
}

export default Homepage;
