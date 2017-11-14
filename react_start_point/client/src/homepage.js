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

    const header =  <div><h1>It's time to play the game!</h1>
     <h2>This is a best of 5 game. Let's get started</h2>

     <button onClick={this.startGame}>Start</button></div>

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
