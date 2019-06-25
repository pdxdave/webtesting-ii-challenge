import React, {Component} from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard'

class App extends Component {

state = {
  balls: 0,
  strikes: 0,
  fouls: 0
}

// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
handleStrike = () => {
  const strike = this.state.strikes + 1;
  if(this.state.strikes === 2 || this.state.balls === 4){
    this.setState({
      balls: 0,
      strikes: 0
    })
  } else {
    this.setState({
      strikes: strike
    })
  }
}

// balls and strikes reset to 0 when a hit is recorded.
handleHit = () => {
  this.setState({
    balls: 0,
    strikes: 0,
    fouls: 0
  })
}

//a foul increases strikes up to 2. With no strikes, a foul makes
// it 1 strike. With 1 strike, a foul makes it 2 strikes. With two
// strikes a foul has no effect, count stays at 2 strikes.

handleFoul = () => {
  const strike = this.state.strikes + 1;
  if(this.state.strikes === 0 || this.state.strikes === 1){
    this.setState({
      srikes: strike
    })
  }
}


handleBalls = () => {
  const ball = this.state.balls + 1;
  if(this.state.balls < 3){
    this.setState({
      balls: ball
    })
  } else if (this.state.balls === 3){
    this.setState({
      srikes: 0,
      balls: 0,
      fouls: 0
    })
  }
}


  render(){
  return (
    <div className="App">
      <header className="App-header">
         <Dashboard handleStrike={this.handleStrike}
                    handleFoul={this.handleFoul}
                    handleHit={this.handleHit}
                    handleBalls={this.handleBalls}
         />
         <Display balls={this.state.balls} strikes={this.state.srikes}/>
         
      </header>
    </div>
  );
  }
}

export default App;
